import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, HandHeart, Users, Gift } from "lucide-react";
import Link from "next/link";

export default async function CharityPage() {
  // Authentication removed

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-10 h-10 text-red-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Charity & Giving
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Make a difference in someone&apos;s life through acts of charity and
            kindness. Every donation, no matter how small, can create a positive
            impact.
          </p>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="donate" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
            <TabsTrigger value="donate" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              Donate
            </TabsTrigger>
            <TabsTrigger value="request" className="flex items-center gap-2">
              <HandHeart className="w-4 h-4" />
              Request Help
            </TabsTrigger>
          </TabsList>

          <TabsContent value="donate" className="space-y-6">
            {/* Donation Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Gift className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Zakah
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Fulfill your religious obligation with the obligatory
                    charity (2.5% of wealth)
                  </p>
                  <Link href="/charity/donate?type=zakah">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Donate Zakah
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Donate a Quran
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Help provide Quran copies to those who need them
                  </p>
                  <Link href="/charity/donate?type=quran">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Donate Quran
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Donate One Plate
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Provide a meal for someone in need
                  </p>
                  <Link href="/charity/donate?type=plate">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700">
                      Donate Plate
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Donate Old Clothes
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Give clothes to those who need them
                  </p>
                  <Link href="/charity/donate?type=clothes">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Donate Clothes
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Donate Old Books
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Share knowledge through books
                  </p>
                  <Link href="/charity/donate?type=books">
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Donate Books
                    </Button>
                  </Link>
                </div>
              </Card>

              <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <HandHeart className="w-8 h-8 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Custom Donation
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Other forms of charity and giving
                  </p>
                  <Link href="/charity/donate?type=custom">
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Custom Donation
                    </Button>
                  </Link>
                </div>
              </Card>
            </div>

            {/* General Donation Form Link */}
            <div className="text-center mt-8">
              <Link href="/charity/donate">
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  <Heart className="w-5 h-5 mr-2" />
                  Make a General Donation
                </Button>
              </Link>
            </div>
          </TabsContent>

          <TabsContent value="request" className="space-y-6">
            {/* Help Request Information */}
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-sm">
              <div className="text-center max-w-3xl mx-auto">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <HandHeart className="w-10 h-10 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Help? We&apos;re Here for You
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  If you or someone you know is in need of assistance with
                  books, clothes, food, education, medical support, or shelter,
                  we&apos;re here to help. Your requests are completely
                  anonymous and confidential.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      What We Can Help With:
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Educational books and supplies</li>
                      <li>• Clothing for adults and children</li>
                      <li>• Food assistance and meals</li>
                      <li>• Educational support and tutoring</li>
                      <li>• Medical assistance</li>
                      <li>• Temporary shelter</li>
                      <li>• Other essential needs</li>
                    </ul>
                  </div>

                  <div className="text-left">
                    <h3 className="font-semibold text-gray-900 mb-3">
                      How It Works:
                    </h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>1. Submit your request anonymously</li>
                      <li>2. We review and prioritize requests</li>
                      <li>3. Our community helps fulfill needs</li>
                      <li>4. We coordinate delivery or pickup</li>
                    </ul>
                  </div>
                </div>

                <Link href="/charity/request-help">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <HandHeart className="w-5 h-5 mr-2" />
                    Request Help Now
                  </Button>
                </Link>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
