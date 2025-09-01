"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { DonationType } from "@/types/charity.types";
import {
  Heart,
  HandHeart,
  BookOpen,
  Shirt,
  Utensils,
  DollarSign,
} from "lucide-react";

const donationTypes = [
  {
    value: "ZAKAH",
    label: "Zakah",
    icon: DollarSign,
    description: "Obligatory charity (2.5% of wealth)",
  },
  {
    value: "QURAN",
    label: "Donate a Quran",
    icon: BookOpen,
    description: "Help provide Quran copies",
  },
  {
    value: "ONE_PLATE",
    label: "Donate One Plate",
    icon: Utensils,
    description: "Provide a meal for someone in need",
  },
  {
    value: "OLD_CLOTHES",
    label: "Donate Old Clothes",
    icon: Shirt,
    description: "Give clothes to those who need them",
  },
  {
    value: "OLD_BOOKS",
    label: "Donate Old Books",
    icon: BookOpen,
    description: "Share knowledge through books",
  },
  {
    value: "CUSTOM",
    label: "Custom Donation",
    icon: HandHeart,
    description: "Other forms of charity",
  },
];

interface DonationFormProps {
  onSuccess?: () => void;
}

export function DonationForm({ onSuccess }: DonationFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "" as DonationType | "",
    amount: "",
    description: "",
    anonymous: false,
    donorName: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.type) {
      toast({
        title: "Error",
        description: "Please select a donation type",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/charity/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: formData.type,
          amount: formData.amount ? parseFloat(formData.amount) : undefined,
          description: formData.description || undefined,
          anonymous: formData.anonymous,
          donorName: formData.anonymous ? formData.donorName : undefined,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }

      toast({
        title: "Success",
        description: "Your donation has been submitted successfully!",
      });

      // Reset form
      setFormData({
        type: "",
        amount: "",
        description: "",
        anonymous: false,
        donorName: "",
      });

      onSuccess?.();
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit donation. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const selectedType = donationTypes.find(
    (type) => type.value === formData.type
  );

  return (
    <Card className="p-6 max-w-2xl mx-auto bg-white">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Heart className="w-8 h-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Make a Donation</h2>
        <p className="text-gray-600 mt-2">
          Choose how you&apos;d like to help others and make a positive impact
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Donation Type Selection */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">
            Select Donation Type
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {donationTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = formData.type === type.value;

              return (
                <div
                  key={type.value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      type: type.value as DonationType,
                    }))
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isSelected ? "bg-red-100" : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected ? "text-red-600" : "text-gray-600"
                        }`}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-gray-900">
                        {type.label}
                      </div>
                      <div className="text-sm text-gray-600">
                        {type.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Amount (for monetary donations) */}
        {(formData.type === "ZAKAH" || formData.type === "CUSTOM") && (
          <div>
            <Label htmlFor="amount">Amount (Optional)</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              placeholder="Enter amount if applicable"
              value={formData.amount}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, amount: e.target.value }))
              }
            />
          </div>
        )}

        {/* Description */}
        <div>
          <Label htmlFor="description">Description (Optional)</Label>
          <Textarea
            id="description"
            placeholder="Add any additional details about your donation..."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            rows={3}
          />
        </div>

        {/* Anonymous Option */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="anonymous"
            checked={formData.anonymous}
            onCheckedChange={(checked) =>
              setFormData((prev) => ({
                ...prev,
                anonymous: checked as boolean,
              }))
            }
          />
          <Label htmlFor="anonymous">Make this donation anonymously</Label>
        </div>

        {/* Donor Name (if anonymous) */}
        {formData.anonymous && (
          <div>
            <Label htmlFor="donorName">Your Name (Optional)</Label>
            <Input
              id="donorName"
              placeholder="Enter your name if you'd like"
              value={formData.donorName}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, donorName: e.target.value }))
              }
            />
          </div>
        )}

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          disabled={isLoading || !formData.type}
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Submit Donation
            </div>
          )}
        </Button>
      </form>

      {/* Selected Type Info */}
      {selectedType && (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
              <selectedType.icon className="w-4 h-4 text-red-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">
                {selectedType.label}
              </div>
              <div className="text-sm text-gray-600">
                {selectedType.description}
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}
