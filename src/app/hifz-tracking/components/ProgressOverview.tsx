"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, TrendingUp, Award, Clock } from "lucide-react";
import { HifzProgressSummary } from "@/types/hifz.types";

interface Props {
  summary: HifzProgressSummary;
}

export default function ProgressOverview({ summary }: Props) {
  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-blue-600";
    if (percentage >= 40) return "text-yellow-600";
    if (percentage >= 20) return "text-orange-600";
    return "text-red-600";
  };

  const getProgressBarColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    if (percentage >= 20) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Overall Progress */}
      <Card className="bg-white shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Overall Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600">
              {summary.totalMemorizedVerses.toLocaleString()} /{" "}
              {summary.totalQuranVerses.toLocaleString()} verses
            </span>
            <Badge
              variant="secondary"
              className={getProgressColor(summary.percentageComplete)}
            >
              {summary.percentageComplete}% Complete
            </Badge>
          </div>
          <Progress
            value={summary.percentageComplete}
            className="h-3"
            style={
              {
                "--progress-color": getProgressBarColor(
                  summary.percentageComplete
                ),
              } as React.CSSProperties
            }
          />
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900">
                {summary.completedSurahs}
              </p>
              <p className="text-gray-600">Completed Surahs</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-900">
                {summary.totalSurahs - summary.completedSurahs}
              </p>
              <p className="text-gray-600">Remaining Surahs</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Next Target */}
      {summary.nextSurahToMemorize && (
        <Card className="bg-white shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Next Target
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {summary.nextSurahToMemorize.surahName}
                </h3>
                <p className="text-gray-600">
                  {summary.nextSurahToMemorize.remainingVerses} verses remaining
                </p>
              </div>
              <Badge variant="outline" className="bg-blue-50 text-blue-700">
                Focus Area
              </Badge>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recent Progress */}
      {summary.recentProgress.length > 0 && (
        <Card className="bg-white shadow-none">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {summary.recentProgress.slice(0, 3).map((progress) => (
                <div
                  key={progress.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div>
                    <p className="font-medium text-gray-900">
                      {progress.surahName}
                    </p>
                    <p className="text-sm text-gray-600">
                      {progress.memorizedVerses} / {progress.totalVerses} verses
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      {Math.round(
                        (progress.memorizedVerses / progress.totalVerses) * 100
                      )}
                      %
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(progress.lastUpdated).toLocaleDateString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Motivational Stats */}
      <Card className="bg-white shadow-none">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Your Journey
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
              <BookOpen className="h-8 w-8 text-teal-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-teal-900">
                {summary.totalMemorizedVerses.toLocaleString()}
              </p>
              <p className="text-sm text-teal-700">Verses Memorized</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
              <Target className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-green-900">
                {summary.completedSurahs}
              </p>
              <p className="text-sm text-green-700">Surahs Completed</p>
            </div>
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
              <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-lg font-bold text-blue-900">
                {summary.percentageComplete}%
              </p>
              <p className="text-sm text-blue-700">Overall Progress</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
