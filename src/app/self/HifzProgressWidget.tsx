"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";
import { HifzProgressSummary } from "@/types/hifz.types";

export default function HifzProgressWidget() {
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
      <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Hifz Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!summary) {
    return (
      <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Hifz Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Start tracking your Quran memorization journey
            </p>
            <Link href="/hifz-tracking">
              <Button className="bg-teal-600 hover:bg-teal-700">
                <Target className="h-4 w-4 mr-2" />
                Start Tracking
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="p-6 sm:p-8 bg-white/80 backdrop-blur-sm border shadow-none">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Hifz Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Overall Progress */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              {summary.totalMemorizedVerses.toLocaleString()} /{" "}
              {summary.totalQuranVerses.toLocaleString()} verses
            </span>
            <Badge variant="secondary" className="bg-teal-100 text-teal-800">
              {summary.percentageComplete}% Complete
            </Badge>
          </div>
          <Progress value={summary.percentageComplete} className="h-3" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-gray-900">
              {summary.completedSurahs}
            </p>
            <p className="text-sm text-gray-600">Completed Surahs</p>
          </div>
          <div className="text-center p-3 bg-gray-50 rounded-lg">
            <p className="text-lg font-bold text-gray-900">
              {summary.totalSurahs - summary.completedSurahs}
            </p>
            <p className="text-sm text-gray-600">Remaining Surahs</p>
          </div>
        </div>

        {/* Next Target */}
        {summary.nextSurahToMemorize && (
          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                Next Target
              </span>
            </div>
            <p className="text-sm font-semibold text-blue-900">
              {summary.nextSurahToMemorize.surahName}
            </p>
            <p className="text-xs text-blue-700">
              {summary.nextSurahToMemorize.remainingVerses} verses remaining
            </p>
          </div>
        )}

        {/* Action Button */}
        <Link href="/hifz-tracking">
          <Button className="w-full bg-teal-600 hover:bg-teal-700">
            <TrendingUp className="h-4 w-4 mr-2" />
            View Full Progress
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
