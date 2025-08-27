import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "@/components/session-provider";
import { Toaster } from "@/components/ui/toaster";
import Dock from "./components/Dock";

const outfit = localFont({
  src: [
    {
      path: "../../public/font/Outfit-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../public/font/Outfit-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "QFA - Educational Platform",
  description: "A modern educational platform with authentication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="pb-[80px]">
      <body className={`${outfit.variable} antialiased`}>
        <SessionProvider>{children}</SessionProvider>
        <Toaster />
      </body>
      <footer className="fixed bottom-4 left-1/2 transform -translate-x-1/2  w-full px-6 max-w-[300px]">
        <Dock />
      </footer>
    </html>
  );
}
