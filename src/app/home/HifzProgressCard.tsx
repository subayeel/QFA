"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Target } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HifzProgressSummary } from "@/types/hifz.types";

interface Props {
  isMobile?: boolean;
}

export default function HifzProgressCard({ isMobile = false }: Props) {
  const [summary, setSummary] = useState<HifzProgressSummary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await fetch("/api/hifz-progress");
        if (response.ok) {
          const data = await response.json();
          setSummary(data);
        }
      } catch (error) {
        console.error("Failed to fetch hifz progress:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProgress();
  }, []);

  if (loading) {
    return (
      <Card
        className={`bg-white shadow-none relative p-4 overflow-hidden ${
          isMobile ? "h-[150px] mx-6" : "h-[180px]"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex gap-2 items-center mb-4">
              <p
                className={`font-semibold ${
                  isMobile ? "text-lg sm:text-2xl" : "text-xl"
                }`}
              >
                Hifz Progress
              </p>
              <ChevronRight className="text-textGray" size={20} />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Loading...</p>
              <div className="h-2 bg-gray-200 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  if (!summary) {
    return (
      <Card
        className={`bg-white shadow-none relative p-4 overflow-hidden ${
          isMobile ? "h-[150px] mx-6" : "h-[180px]"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex gap-2 items-center mb-4">
              <p
                className={`font-semibold ${
                  isMobile ? "text-lg sm:text-2xl" : "text-xl"
                }`}
              >
                Hifz Progress
              </p>
              <ChevronRight className="text-textGray" size={20} />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">Start your Hifz journey</p>
              <Link href="/hifz-tracking">
                <Button size="sm" className="mt-2">
                  <Target className="h-4 w-4 mr-2" />
                  Track Progress
                </Button>
              </Link>
            </div>
          </div>
          <div className="absolute right-0 bottom-0">
            <Image
              src="/home-quran.png"
              className="object-contain h-16 sm:h-24"
              alt="quran"
              width={70}
              height={100}
            />
          </div>
        </div>
      </Card>
    );
  }

  const nextSurahText = summary.nextSurahToMemorize
    ? `Next: ${summary.nextSurahToMemorize.surahName}`
    : "All surahs completed!";

  return (
    <Link href="/hifz-tracking">
      <Card
        className={`bg-white shadow-none relative p-4 overflow-hidden cursor-pointer hover:shadow-md transition-shadow ${
          isMobile ? "h-[150px] mx-6" : "h-[180px]"
        }`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex gap-2 items-center mb-4">
              <p
                className={`font-semibold ${
                  isMobile ? "text-lg sm:text-2xl" : "text-xl"
                }`}
              >
                Hifz Progress
              </p>
              <ChevronRight className="text-textGray" size={20} />
            </div>

            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                {summary.totalMemorizedVerses.toLocaleString()} /{" "}
                {summary.totalQuranVerses.toLocaleString()} verses
              </p>

              <div className="flex gap-2 items-center">
                <div
                  className={`h-2 rounded-full flex w-full relative overflow-hidden bg-gray-200 ${
                    isMobile
                      ? "max-w-[140px] sm:max-w-[220px]"
                      : "max-w-[200px]"
                  }`}
                >
                  <div
                    className="absolute top-0 bg-teal-900 h-2 z-[10] transition-all duration-300"
                    style={{ width: `${summary.percentageComplete}%` }}
                  ></div>
                </div>
                <p className="font-semibold">{summary.percentageComplete}%</p>
              </div>

              <p className="text-xs text-gray-500">{nextSurahText}</p>
            </div>
          </div>

          <div className="absolute right-0 bottom-0">
            <Image
              src="/home-quran.png"
              className="object-contain h-16 sm:h-24"
              alt="quran"
              width={70}
              height={100}
            />
          </div>
        </div>
      </Card>
    </Link>
  );
}
