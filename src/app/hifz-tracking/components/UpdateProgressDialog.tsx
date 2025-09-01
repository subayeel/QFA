"use client";

import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, CheckCircle, Loader2 } from "lucide-react";
import { SurahProgress } from "@/types/hifz.types";
import { QURAN_SURAHS } from "@/utils/quranData";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  surah: SurahProgress | null;
  onProgressUpdated: () => void;
}

export default function UpdateProgressDialog({
  open,
  onOpenChange,
  surah,
  onProgressUpdated,
}: Props) {
  const [selectedSurahNumber, setSelectedSurahNumber] = useState<number | null>(
    null
  );
  const [memorizedVerses, setMemorizedVerses] = useState<number>(0);
  const [notes, setNotes] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Initialize form when surah changes
  useEffect(() => {
    if (surah) {
      setSelectedSurahNumber(surah.surahNumber);
      setMemorizedVerses(surah.memorizedVerses);
      setNotes("");
    } else {
      setSelectedSurahNumber(null);
      setMemorizedVerses(0);
      setNotes("");
    }
    setError(null);
  }, [surah]);

  const selectedSurah = selectedSurahNumber
    ? QURAN_SURAHS.find((s) => s.number === selectedSurahNumber)
    : null;

  const percentageComplete = selectedSurah
    ? Math.round((memorizedVerses / selectedSurah.verses) * 100)
    : 0;

  const isCompleted = selectedSurah && memorizedVerses === selectedSurah.verses;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedSurahNumber || memorizedVerses < 0) {
      setError("Please select a surah and enter a valid number of verses");
      return;
    }

    if (selectedSurah && memorizedVerses > selectedSurah.verses) {
      setError(
        `Cannot memorize more than ${selectedSurah.verses} verses in ${selectedSurah.name}`
      );
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/hifz-progress", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          surahNumber: selectedSurahNumber,
          memorizedVerses,
          notes: notes.trim() || undefined,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to update progress");
      }

      onProgressUpdated();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update progress"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSurahChange = (surahNumber: number) => {
    setSelectedSurahNumber(surahNumber);
    const surah = QURAN_SURAHS.find((s) => s.number === surahNumber);
    if (surah) {
      setMemorizedVerses(0);
    }
    setError(null);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            {surah ? "Update Progress" : "Add Progress"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Surah Selection */}
          <div className="space-y-2">
            <Label htmlFor="surah-select">Select Surah</Label>
            <select
              id="surah-select"
              value={selectedSurahNumber || ""}
              onChange={(e) => handleSurahChange(Number(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              disabled={!!surah} // Disable if editing existing surah
            >
              <option value="">Choose a surah...</option>
              {QURAN_SURAHS.map((s) => (
                <option key={s.number} value={s.number}>
                  {s.number}. {s.name} ({s.verses} verses)
                </option>
              ))}
            </select>
          </div>

          {/* Selected Surah Info */}
          {selectedSurah && (
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">
                  {selectedSurah.name}
                </h3>
                <Badge variant="outline">
                  {selectedSurah.verses} verses total
                </Badge>
              </div>
              <p className="text-sm text-gray-600">
                {selectedSurah.verses} verses in this surah
              </p>
            </div>
          )}

          {/* Memorized Verses Input */}
          <div className="space-y-2">
            <Label htmlFor="memorized-verses">
              Memorized Verses
              {selectedSurah && (
                <span className="text-sm text-gray-500 ml-1">
                  (0 - {selectedSurah.verses})
                </span>
              )}
            </Label>
            <Input
              id="memorized-verses"
              type="number"
              min="0"
              max={selectedSurah?.verses || 999}
              value={memorizedVerses}
              onChange={(e) => setMemorizedVerses(Number(e.target.value))}
              placeholder="Enter number of verses memorized"
              className="w-full"
            />
          </div>

          {/* Progress Display */}
          {selectedSurah && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Progress</span>
                <span className="font-medium">{percentageComplete}%</span>
              </div>
              <Progress value={percentageComplete} className="h-2" />
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>{memorizedVerses} verses memorized</span>
                <span>
                  {selectedSurah.verses - memorizedVerses} verses remaining
                </span>
              </div>
              {isCompleted && (
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>Surah completed!</span>
                </div>
              )}
            </div>
          )}

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add any notes about your memorization progress..."
              rows={3}
            />
          </div>

          {/* Error Display */}
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-teal-600 hover:bg-teal-700"
              disabled={loading || !selectedSurahNumber}
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Updating...
                </>
              ) : (
                <>
                  <Target className="h-4 w-4 mr-2" />
                  {surah ? "Update" : "Save"} Progress
                </>
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
