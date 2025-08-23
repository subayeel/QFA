"use server";

import { signIn, signOut } from "@/auth";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

const prisma = new PrismaClient();

export async function signUpAction(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const name = formData.get("name") as string;

  if (!email || !password || !name) {
    throw new Error("Missing required fields");
  }

  // Check if user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // Create user
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // Sign in the user
  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  redirect("/");
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
  await signOut();
  redirect("/auth/login");
}

export async function signInWithProvider(provider: "google" | "github") {
  await signIn(provider, { redirect: false });
  redirect("/");
}
