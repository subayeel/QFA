"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock, TrendingUp, CheckCircle, BookOpen } from "lucide-react";
import { HifzProgress } from "@/types/hifz.types";

interface Props {
  recentProgress: HifzProgress[];
}

export default function RecentActivity({ recentProgress }: Props) {
  if (recentProgress.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No recent activity
          </h3>
          <p className="text-gray-600">
            Start tracking your Hifz progress to see your recent activity here.
          </p>
        </CardContent>
      </Card>
    );
  }

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - new Date(date).getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return "Today";
    if (diffDays === 2) return "Yesterday";
    if (diffDays <= 7) return `${diffDays - 1} days ago`;

    return new Date(date).toLocaleDateString();
  };

  const getActivityIcon = (progress: HifzProgress) => {
    if (progress.isCompleted) {
      return <CheckCircle className="h-5 w-5 text-green-600" />;
    }
    if (progress.memorizedVerses > 0) {
      return <TrendingUp className="h-5 w-5 text-blue-600" />;
    }
    return <BookOpen className="h-5 w-5 text-gray-600" />;
  };

  const getActivityColor = (progress: HifzProgress) => {
    if (progress.isCompleted) {
      return "bg-green-50 border-green-200";
    }
    if (progress.memorizedVerses > 0) {
      return "bg-blue-50 border-blue-200";
    }
    return "bg-gray-50 border-gray-200";
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentProgress.map((progress) => (
              <div
                key={progress.id}
                className={`p-4 rounded-lg border ${getActivityColor(
                  progress
                )}`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getActivityIcon(progress)}
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {progress.surahName}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {progress.memorizedVerses} / {progress.totalVerses}{" "}
                        verses
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge
                      variant={progress.isCompleted ? "default" : "secondary"}
                      className={
                        progress.isCompleted
                          ? "bg-green-100 text-green-800"
                          : ""
                      }
                    >
                      {progress.isCompleted ? "Completed" : "In Progress"}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(progress.lastUpdated)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">
                      {Math.round(
                        (progress.memorizedVerses / progress.totalVerses) * 100
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={
                      (progress.memorizedVerses / progress.totalVerses) * 100
                    }
                    className="h-2"
                  />
                </div>

                {progress.notes && (
                  <div className="mt-3 p-2 bg-white rounded border">
                    <p className="text-sm text-gray-700 italic">
                      "{progress.notes}"
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Activity Summary */}
      <Card>
        <CardContent className="p-6">
          <h3 className="font-semibold text-gray-900 mb-4">Activity Summary</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold text-gray-900">
                {recentProgress.length}
              </p>
              <p className="text-gray-600">Recent Updates</p>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <p className="text-lg font-bold text-gray-900">
                {recentProgress.filter((p) => p.isCompleted).length}
              </p>
              <p className="text-gray-600">Recently Completed</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
