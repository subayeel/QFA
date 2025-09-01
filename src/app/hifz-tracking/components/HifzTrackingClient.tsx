"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Target,
  TrendingUp,
  Plus,
  RefreshCw,
  CheckCircle,
  Clock,
} from "lucide-react";
import { HifzProgressSummary, SurahProgress } from "@/types/hifz.types";
import ProgressOverview from "./ProgressOverview";
import SurahProgressList from "./SurahProgressList";
import UpdateProgressDialog from "./UpdateProgressDialog";
import RecentActivity from "./RecentActivity";

export default function HifzTrackingClient() {
  const [summary, setSummary] = useState<HifzProgressSummary | null>(null);
  const [allSurahProgress, setAllSurahProgress] = useState<SurahProgress[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [selectedSurah, setSelectedSurah] = useState<SurahProgress | null>(
    null
  );

  const fetchProgress = async () => {
    try {
      setLoading(true);
      const [summaryRes, surahProgressRes] = await Promise.all([
        fetch("/api/hifz-progress"),
        fetch("/api/hifz-progress/stats"),
      ]);

      if (!summaryRes.ok || !surahProgressRes.ok) {
        throw new Error("Failed to fetch progress data");
      }

      const summaryData = await summaryRes.json();
      const statsData = await surahProgressRes.json();

      setSummary(summaryData);
      setAllSurahProgress(statsData.allSurahProgress || []);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load progress");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  const handleUpdateProgress = (surah: SurahProgress) => {
    setSelectedSurah(surah);
    setUpdateDialogOpen(true);
  };

  const handleProgressUpdated = () => {
    setUpdateDialogOpen(false);
    setSelectedSurah(null);
    fetchProgress(); // Refresh data
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="mx-auto h-12 w-12 text-teal-400 animate-spin" />
          <p className="mt-4 text-xl">Loading your Hifz progress...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 mb-4">{error}</p>
          <Button onClick={fetchProgress}>Retry</Button>
        </div>
      </div>
    );
  }

  if (!summary) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500">No progress data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Header */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-teal-600" />
              Hifz Progress Tracker
            </h1>
            <p className="text-gray-600 mt-2">
              Track your Quran memorization journey verse by verse
            </p>
          </div>
          <Button
            onClick={() => {
              setSelectedSurah(null);
              setUpdateDialogOpen(true);
            }}
            className="bg-teal-600 hover:bg-teal-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Update Progress
          </Button>
        </div>
      </div>

      {/* Progress Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Total Verses
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {summary.totalMemorizedVerses.toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  of {summary.totalQuranVerses.toLocaleString()}
                </p>
              </div>
              <Target className="h-8 w-8 text-teal-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Progress</p>
                <p className="text-2xl font-bold text-gray-900">
                  {summary.percentageComplete}%
                </p>
                <Progress value={summary.percentageComplete} className="mt-2" />
              </div>
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Completed Surahs
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {summary.completedSurahs}
                </p>
                <p className="text-xs text-gray-500">
                  of {summary.totalSurahs} surahs
                </p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-none">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Next Target</p>
                {summary.nextSurahToMemorize ? (
                  <>
                    <p className="text-lg font-bold text-gray-900">
                      {summary.nextSurahToMemorize.surahName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {summary.nextSurahToMemorize.remainingVerses} verses
                      remaining
                    </p>
                  </>
                ) : (
                  <p className="text-lg font-bold text-green-600">
                    All Complete!
                  </p>
                )}
              </div>
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="surahs">All Surahs</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <ProgressOverview summary={summary} />
        </TabsContent>

        <TabsContent value="surahs" className="space-y-6">
          <SurahProgressList
            surahProgress={allSurahProgress}
            onUpdateProgress={handleUpdateProgress}
          />
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <RecentActivity recentProgress={summary.recentProgress} />
        </TabsContent>
      </Tabs>

      {/* Update Progress Dialog */}
      <UpdateProgressDialog
        open={updateDialogOpen}
        onOpenChange={setUpdateDialogOpen}
        surah={selectedSurah}
        onProgressUpdated={handleProgressUpdated}
      />
    </div>
  );
}
