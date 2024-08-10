import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

export const metadata: Metadata = {
  title: "Michele",
  description: "Personal website - Michele Xiloyannis",
};

const inter = Inter({ subsets: ["latin"] });

storyblokInit({
  accessToken: "uixt4dzzh3SLf3fzcSftMQtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
