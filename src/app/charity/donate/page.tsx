import { DonationForm } from "@/app/components/charity/DonationForm";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function DonatePage() {
  // Authentication removed

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            href="/charity"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Charity
          </Link>
        </div>

        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Make a Donation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose how you&apos;d like to help others and make a positive impact
            in the community. Every donation, no matter how small, can create
            meaningful change.
          </p>
        </div>

        {/* Donation Form */}
        <DonationForm />
      </div>
    </div>
  );
}
