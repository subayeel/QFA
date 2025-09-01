import { prisma } from "@/lib/prisma";
import {
  Donation,
  HelpRequest,
  CreateDonationRequest,
  CreateHelpRequestRequest,
  DonationType,
  HelpRequestType,
} from "@/types/charity.types";

export class CharityService {
  // Donation methods
  static async createDonation(
    data: CreateDonationRequest,
    userId?: string
  ): Promise<Donation> {
    return await prisma.donation.create({
      data: {
        type: data.type,
        amount: data.amount || null,
        description: data.description || null,
        anonymous: data.anonymous || false,
        donorName: data.anonymous ? data.donorName : null,
        userId: data.anonymous ? null : userId,
        status: "PENDING",
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  static async getDonations(
    filters: {
      type?: DonationType;
      status?: string;
      limit?: number;
      offset?: number;
    } = {}
  ): Promise<Donation[]> {
    const { type, status, limit = 50, offset = 0 } = filters;

    const where: Record<string, unknown> = {};
    if (type) where.type = type;
    if (status) where.status = status;

    return await prisma.donation.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: limit,
      skip: offset,
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  static async getUserDonations(userId: string): Promise<Donation[]> {
    return await prisma.donation.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });
  }

  // Help request methods
  static async createHelpRequest(
    data: CreateHelpRequestRequest
  ): Promise<HelpRequest> {
    return await prisma.helpRequest.create({
      data: {
        type: data.type,
        title: data.title,
        description: data.description,
        urgency: data.urgency || "medium",
        contactName: data.contactName || null,
        contactEmail: data.contactEmail || null,
        contactPhone: data.contactPhone || null,
        location: data.location || null,
        quantity: data.quantity || null,
        preferredDelivery: data.preferredDelivery || null,
        additionalNotes: data.additionalNotes || null,
        status: "PENDING",
      },
    });
  }

  static async getHelpRequests(
    filters: {
      type?: HelpRequestType;
      status?: string;
      urgency?: string;
      limit?: number;
      offset?: number;
    } = {}
  ): Promise<HelpRequest[]> {
    const { type, status, urgency, limit = 50, offset = 0 } = filters;

    const where: Record<string, unknown> = {};
    if (type) where.type = type;
    if (status) where.status = status;
    if (urgency) where.urgency = urgency;

    return await prisma.helpRequest.findMany({
      where,
      orderBy: [
        { urgency: "desc" }, // Critical and high urgency first
        { createdAt: "desc" },
      ],
      take: limit,
      skip: offset,
    });
  }

  // Statistics methods
  static async getDonationStats(): Promise<{
    total: number;
    byType: Record<string, number>;
    byStatus: Record<string, number>;
  }> {
    const [total, byType, byStatus] = await Promise.all([
      prisma.donation.count(),
      prisma.donation.groupBy({
        by: ["type"],
        _count: { id: true },
      }),
      prisma.donation.groupBy({
        by: ["status"],
        _count: { id: true },
      }),
    ]);

    return {
      total,
      byType: byType.reduce((acc, item) => {
        acc[item.type] = item._count.id;
        return acc;
      }, {} as Record<string, number>),
      byStatus: byStatus.reduce((acc, item) => {
        acc[item.status] = item._count.id;
        return acc;
      }, {} as Record<string, number>),
    };
  }

  static async getHelpRequestStats(): Promise<{
    total: number;
    byType: Record<string, number>;
    byStatus: Record<string, number>;
    byUrgency: Record<string, number>;
  }> {
    const [total, byType, byStatus, byUrgency] = await Promise.all([
      prisma.helpRequest.count(),
      prisma.helpRequest.groupBy({
        by: ["type"],
        _count: { id: true },
      }),
      prisma.helpRequest.groupBy({
        by: ["status"],
        _count: { id: true },
      }),
      prisma.helpRequest.groupBy({
        by: ["urgency"],
        _count: { id: true },
      }),
    ]);

    return {
      total,
      byType: byType.reduce((acc, item) => {
        acc[item.type] = item._count.id;
        return acc;
      }, {} as Record<string, number>),
      byStatus: byStatus.reduce((acc, item) => {
        acc[item.status] = item._count.id;
        return acc;
      }, {} as Record<string, number>),
      byUrgency: byUrgency.reduce((acc, item) => {
        acc[item.urgency] = item._count.id;
        return acc;
      }, {} as Record<string, number>),
    };
  }
}
