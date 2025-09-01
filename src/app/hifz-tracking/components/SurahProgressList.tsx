"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Edit, CheckCircle, Clock, BookOpen } from "lucide-react";
import { SurahProgress } from "@/types/hifz.types";

interface Props {
  surahProgress: SurahProgress[];
  onUpdateProgress: (surah: SurahProgress) => void;
}

export default function SurahProgressList({
  surahProgress,
  onUpdateProgress,
}: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState<
    "all" | "completed" | "in-progress" | "not-started"
  >("all");

  const filteredSurahs = surahProgress.filter((surah) => {
    const matchesSearch =
      surah.surahName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.surahNumber.toString().includes(searchTerm);

    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && surah.isCompleted) ||
      (filter === "in-progress" &&
        surah.memorizedVerses > 0 &&
        !surah.isCompleted) ||
      (filter === "not-started" && surah.memorizedVerses === 0);

    return matchesSearch && matchesFilter;
  });

  const getStatusBadge = (surah: SurahProgress) => {
    if (surah.isCompleted) {
      return <Badge className="bg-green-100 text-green-800">Completed</Badge>;
    } else if (surah.memorizedVerses > 0) {
      return <Badge className="bg-blue-100 text-blue-800">In Progress</Badge>;
    } else {
      return (
        <Badge variant="outline" className="text-gray-600">
          Not Started
        </Badge>
      );
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 80) return "bg-green-500";
    if (percentage >= 60) return "bg-blue-500";
    if (percentage >= 40) return "bg-yellow-500";
    if (percentage >= 20) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search surahs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={filter === "all" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button
            variant={filter === "completed" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("completed")}
          >
            <CheckCircle className="h-4 w-4 mr-1" />
            Completed
          </Button>
          <Button
            variant={filter === "in-progress" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("in-progress")}
          >
            <Clock className="h-4 w-4 mr-1" />
            In Progress
          </Button>
          <Button
            variant={filter === "not-started" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("not-started")}
          >
            <BookOpen className="h-4 w-4 mr-1" />
            Not Started
          </Button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-gray-600">
        Showing {filteredSurahs.length} of {surahProgress.length} surahs
      </div>

      {/* Surah List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSurahs.map((surah) => (
          <Card key={surah.surahNumber} className="bg-teal-50 shadow-none">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {surah.surahNumber}. {surah.surahName}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {surah.memorizedVerses} / {surah.totalVerses} verses
                  </p>
                </div>
                {getStatusBadge(surah)}
              </div>

              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">
                      {surah.percentageComplete}%
                    </span>
                  </div>
                  <Progress
                    value={surah.percentageComplete}
                    className="h-2"
                    style={
                      {
                        "--progress-color": getProgressColor(
                          surah.percentageComplete
                        ),
                      } as React.CSSProperties
                    }
                  />
                </div>

                {surah.lastUpdated && (
                  <p className="text-xs text-gray-500">
                    Last updated:{" "}
                    {new Date(surah.lastUpdated).toLocaleDateString()}
                  </p>
                )}

                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onUpdateProgress(surah)}
                  className="w-full"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Update Progress
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredSurahs.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No surahs found
          </h3>
          <p className="text-gray-600">
            {searchTerm
              ? `No surahs match "${searchTerm}"`
              : "No surahs match the current filter"}
          </p>
        </div>
      )}
    </div>
  );
}
