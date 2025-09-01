import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Heart,
  Target,
  Users,
  Lightbulb,
  Share2,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default async function GuidePage() {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/login");
  }

  const guideTopics = [
    {
      title: "Getting Started with Hifz",
      description:
        "Learn the basics of Quran memorization and establish a solid foundation for your journey.",
      icon: BookOpen,
      color: "bg-teal-50 text-teal-600",
      href: "/hifz-planner",
    },
    {
      title: "Daily Islamic Routine",
      description:
        "Create a balanced daily schedule that includes prayer, Quran study, and other Islamic activities.",
      icon: Target,
      color: "bg-blue-50 text-blue-600",
      href: "/home",
    },
    {
      title: "Charity and Giving",
      description:
        "Understand the importance of charity in Islam and how to incorporate it into your daily life.",
      icon: Heart,
      color: "bg-red-50 text-red-600",
      href: "/charity/donate",
    },
    {
      title: "Supporting Others",
      description:
        "Learn how to help and guide others in their Islamic journey.",
      icon: Users,
      color: "bg-purple-50 text-purple-600",
      href: "/charity/request-help",
    },
  ];

  const tips = [
    "Start with short surahs and gradually increase difficulty",
    "Consistency is more important than quantity",
    "Review regularly to maintain what you've memorized",
    "Find a qualified teacher or study partner",
    "Make dua for guidance and success",
    "Stay patient and trust in Allah's plan",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 flex items-center gap-3">
            <Users className="h-8 w-8 text-teal-600" />
            Guide Your Friend
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Help others in their Islamic journey with guidance and support
          </p>
        </div>

        {/* Guide Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Lightbulb className="h-6 w-6" />
            Guide Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guideTopics.map((topic, index) => (
              <Link key={index} href={topic.href}>
                <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-sm transition-all duration-300 cursor-pointer group hover:shadow-md">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${topic.color} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <topic.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {topic.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {topic.description}
                      </p>
                      <div className="flex items-center text-teal-600 text-sm font-medium">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Tips Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Tips for Success
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tips.map((tip, index) => (
              <Card
                key={index}
                className="p-4 bg-white/80 backdrop-blur-sm border"
              >
                <CardContent className="p-0">
                  <div className="flex items-start gap-3">
                    <Badge
                      variant="outline"
                      className="bg-teal-50 text-teal-700 border-teal-200 flex-shrink-0"
                    >
                      {index + 1}
                    </Badge>
                    <p className="text-gray-700 text-sm">{tip}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-teal-50 to-teal-100 border-teal-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-teal-900">
                <Share2 className="h-5 w-5" />
                Share Your Journey
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-teal-800 mb-4">
                Inspire others by sharing your progress and experiences. Your
                journey can motivate someone else to start their own.
              </p>
              <Link href="/hifz-tracking">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  View My Progress
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-900">
                <Heart className="h-5 w-5" />
                Support Others
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-blue-800 mb-4">
                Help those in need by donating or responding to charity
                requests. Every small act of kindness makes a difference.
              </p>
              <Link href="/charity/donate">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Make a Donation
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Back to Profile */}
        <div className="mt-8 text-center">
          <Link href="/self">
            <Button variant="outline">Back to Profile</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
