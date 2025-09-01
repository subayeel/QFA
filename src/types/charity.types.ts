export type DonationType =
  | "ZAKAH"
  | "QURAN"
  | "ONE_PLATE"
  | "OLD_CLOTHES"
  | "OLD_BOOKS"
  | "CUSTOM";

export type DonationStatus = "PENDING" | "COMPLETED" | "CANCELLED";

export type HelpRequestType =
  | "BOOKS"
  | "CLOTHES"
  | "FOOD"
  | "EDUCATION"
  | "MEDICAL"
  | "SHELTER"
  | "OTHER";

export type HelpRequestStatus =
  | "PENDING"
  | "APPROVED"
  | "FULFILLED"
  | "REJECTED";

export interface Donation {
  id: string;
  type: DonationType;
  amount: number | null;
  description: string | null;
  status: DonationStatus;
  userId: string | null;
  user: {
    id: string;
    name: string | null;
    email: string;
  } | null;
  anonymous: boolean;
  donorName: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface HelpRequest {
  id: string;
  type: HelpRequestType;
  title: string;
  description: string;
  urgency: string;
  status: HelpRequestStatus;
  contactName: string | null;
  contactEmail: string | null;
  contactPhone: string | null;
  location: string | null;
  quantity: string | null;
  preferredDelivery: string | null;
  additionalNotes: string | null;
  adminNotes: string | null;
  fulfilledBy: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateDonationRequest {
  type: DonationType;
  amount?: number;
  description?: string;
  anonymous?: boolean;
  donorName?: string;
}

export interface CreateHelpRequestRequest {
  type: HelpRequestType;
  title: string;
  description: string;
  urgency?: string;
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
  location?: string;
  quantity?: string;
  preferredDelivery?: string;
  additionalNotes?: string;
}
