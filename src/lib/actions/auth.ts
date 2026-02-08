"use server";

import { signIn, signOut } from "@/auth";
import { redirect } from "next/navigation";

export async function signUpAction(formData: FormData) {
  // Prisma removed - throwing error
  throw new Error("Database not available");
}

export async function signInAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  if (!email || !password) {
    throw new Error("Missing required fields");
  }

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  redirect("/");
}

export async function signOutAction() {
  await signOut({ redirect: true, redirectTo: "/auth/login" });
}

export async function signInWithProvider(provider: "google") {
  await signIn(provider, { redirect: false });
  redirect("/");
}
