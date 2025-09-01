"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { HelpRequestType } from "@/types/charity.types";
import {
  HandHeart,
  BookOpen,
  Shirt,
  Utensils,
  GraduationCap,
  Heart,
  Home,
  Package,
} from "lucide-react";

const helpRequestTypes = [
  {
    value: "BOOKS",
    label: "Books",
    icon: BookOpen,
    description: "Educational books, textbooks, or reading materials",
  },
  {
    value: "CLOTHES",
    label: "Clothes",
    icon: Shirt,
    description: "Clothing items for adults or children",
  },
  {
    value: "FOOD",
    label: "Food",
    icon: Utensils,
    description: "Food assistance or meal support",
  },
  {
    value: "EDUCATION",
    label: "Education",
    icon: GraduationCap,
    description: "Educational support, tutoring, or supplies",
  },
  {
    value: "MEDICAL",
    label: "Medical",
    icon: Heart,
    description: "Medical assistance or health-related support",
  },
  {
    value: "SHELTER",
    label: "Shelter",
    icon: Home,
    description: "Housing or temporary accommodation",
  },
  {
    value: "OTHER",
    label: "Other",
    icon: Package,
    description: "Other types of assistance needed",
  },
];

const urgencyLevels = [
  { value: "low", label: "Low", description: "Not urgent, can wait" },
  { value: "medium", label: "Medium", description: "Somewhat urgent" },
  { value: "high", label: "High", description: "Urgent, needs attention soon" },
  {
    value: "critical",
    label: "Critical",
    description: "Very urgent, immediate help needed",
  },
];

interface HelpRequestFormProps {
  onSuccess?: () => void;
}

export function HelpRequestForm({ onSuccess }: HelpRequestFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "" as HelpRequestType | "",
    title: "",
    description: "",
    urgency: "medium",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    location: "",
    quantity: "",
    preferredDelivery: "",
    additionalNotes: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.type || !formData.title || !formData.description) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/charity/help-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit help request");
      }

      toast({
        title: "Success",
        description:
          "Your help request has been submitted successfully! We'll review it and get back to you soon.",
      });

      // Reset form
      setFormData({
        type: "",
        title: "",
        description: "",
        urgency: "medium",
        contactName: "",
        contactEmail: "",
        contactPhone: "",
        location: "",
        quantity: "",
        preferredDelivery: "",
        additionalNotes: "",
      });

      onSuccess?.();
    } catch {
      toast({
        title: "Error",
        description: "Failed to submit help request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const selectedType = helpRequestTypes.find(
    (type) => type.value === formData.type
  );

  return (
    <Card className="p-6 max-w-2xl mx-auto bg-gray-50">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <HandHeart className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Request Help</h2>
        <p className="text-gray-600 mt-2">
          Tell us what you need and we&apos;ll do our best to help you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Help Request Type */}
        <div className="space-y-4">
          <Label className="text-base font-semibold">
            What type of help do you need? *
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {helpRequestTypes.map((type) => {
              const Icon = type.icon;
              const isSelected = formData.type === type.value;

              return (
                <div
                  key={type.value}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      type: type.value as HelpRequestType,
                    }))
                  }
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isSelected ? "bg-blue-100" : "bg-gray-100"
                      }`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          isSelected ? "text-blue-600" : "text-gray-600"
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

        {/* Title */}
        <div>
          <Label htmlFor="title">Brief Title *</Label>
          <Input
            id="title"
            placeholder="e.g., Need winter clothes for children"
            value={formData.title}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, title: e.target.value }))
            }
            required
          />
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description">Detailed Description *</Label>
          <Textarea
            id="description"
            placeholder="Please describe your situation and what you need in detail..."
            value={formData.description}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, description: e.target.value }))
            }
            rows={4}
            required
          />
        </div>

        {/* Urgency Level */}
        <div>
          <Label htmlFor="urgency">How urgent is this request? *</Label>
          <Select
            value={formData.urgency}
            onValueChange={(value) =>
              setFormData((prev) => ({ ...prev, urgency: value }))
            }
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {urgencyLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{level.label}</span>
                    <span className="text-sm text-gray-500">
                      - {level.description}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Quantity */}
        <div>
          <Label htmlFor="quantity">Quantity Needed (Optional)</Label>
          <Input
            id="quantity"
            placeholder="e.g., 2 books, 5 sets of clothes, 1 month supply"
            value={formData.quantity}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, quantity: e.target.value }))
            }
          />
        </div>

        {/* Contact Information Section */}
        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Contact Information (Optional)
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            You can provide contact information if you&apos;d like us to reach
            out to you directly, or leave it blank for completely anonymous
            requests.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactName">Name</Label>
              <Input
                id="contactName"
                placeholder="Your name"
                value={formData.contactName}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contactName: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <Label htmlFor="contactEmail">Email</Label>
              <Input
                id="contactEmail"
                type="email"
                placeholder="your.email@example.com"
                value={formData.contactEmail}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contactEmail: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <Label htmlFor="contactPhone">Phone</Label>
              <Input
                id="contactPhone"
                type="tel"
                placeholder="Your phone number"
                value={formData.contactPhone}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contactPhone: e.target.value,
                  }))
                }
              />
            </div>

            <div>
              <Label htmlFor="location">Location (Optional)</Label>
              <Input
                id="location"
                placeholder="City, Country"
                value={formData.location}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, location: e.target.value }))
                }
              />
            </div>
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
          <Textarea
            id="additionalNotes"
            placeholder="Any other information that might help us assist you better..."
            value={formData.additionalNotes}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                additionalNotes: e.target.value,
              }))
            }
            rows={3}
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={
            isLoading ||
            !formData.type ||
            !formData.title ||
            !formData.description
          }
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <HandHeart className="w-4 h-4" />
              Submit Help Request
            </div>
          )}
        </Button>
      </form>

      {/* Selected Type Info */}
      {selectedType && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <selectedType.icon className="w-4 h-4 text-blue-600" />
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

      {/* Privacy Notice */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center mt-0.5">
            <span className="text-xs text-gray-600">ℹ</span>
          </div>
          <div className="text-sm text-gray-600">
            <strong>Privacy Notice:</strong> Your information is kept
            confidential and will only be used to help fulfill your request. You
            can choose to remain completely anonymous by not providing contact
            information.
          </div>
        </div>
      </div>
    </Card>
  );
}
