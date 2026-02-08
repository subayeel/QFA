import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PrayerTimeSection from "@/components/homepage/PrayerTimeSection";

export default async function Home() {
  // Authentication removed - always show content
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-10">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4 text-[#214e45]">
              Welcome to Quran For All
            </h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your comprehensive platform for Islamic education and spiritual growth
            </p>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Discover the universal message of the Quran, learn Islamic teachings,
              and connect with a community dedicated to spiritual growth and understanding.
            </p>
          </div>

          {/* Prayer Time Section */}
          <PrayerTimeSection />

          {/* Quick Actions */}
          <div className="mt-12 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-[#214e45] mb-6">
                Explore Our Features
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#214e45]">Courses & Lessons</CardTitle>
                  <CardDescription>
                    Comprehensive Islamic education covering Quran, Tawheed, Salah, History, and more
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-[#214e45] hover:bg-[#1a3d36]">
                    <Link href="/courses">Explore Courses</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#214e45]">Dashboard</CardTitle>
                  <CardDescription>
                    Access your personalized dashboard with todos, progress tracking, and daily inspiration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="bg-[#214e45] hover:bg-[#1a3d36]">
                    <Link href="/home">Go to Dashboard</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#214e45]">My Hifz</CardTitle>
                  <CardDescription>
                    Plan your journey to become a Hafiz with personalized scheduling based on your routine
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="border-[#214e45] text-[#214e45] hover:bg-[#214e45] hover:text-white">
                    <Link href="/hifz-planner">Start Hifz Journey</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-[#214e45]">Charity & Community</CardTitle>
                  <CardDescription>
                    Give back through donations or request help anonymously. Together we grow stronger
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="border-[#214e45] text-[#214e45] hover:bg-[#214e45] hover:text-white">
                    <Link href="/charity">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
