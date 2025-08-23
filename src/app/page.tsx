"use server";
import { auth } from "@/auth";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default async function Home() {
  const session = await auth();

  return (
    <div className="container mx-auto py-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Welcome to QFA</h1>
          <p className="text-xl text-muted-foreground">
            Your modern educational platform
          </p>
        </div>

        {session?.user ? (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back, {session.user.name}!</CardTitle>
                <CardDescription>
                  You are successfully signed in to your account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-4">
                  {session.user.image && (
                    <img
                      src={session.user.image}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-medium">{session.user.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <Button asChild>
                    <Link href="/user-profile">View Profile</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/auth/login">Sign Out</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Get Started</CardTitle>
                <CardDescription>
                  Create a new account to access all features
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Already have an account?</CardTitle>
                <CardDescription>
                  Sign in to continue where you left off
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/auth/login">Sign In</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
