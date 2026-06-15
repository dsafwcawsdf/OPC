import type { Metadata } from "next";
import { Inter, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSerif = Noto_Serif_SC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "乡村创业孵化平台 — AI驱动的一站式乡村创业服务",
  description:
    "从注册到运营，从内容到销售，AI驱动的乡村创业孵化平台提供创业孵化、内容生产、产销匹配、数字人直播、乡村文化、数据管理等一站式服务，助力乡村振兴。",
  keywords: [
    "乡村创业",
    "乡村振兴",
    "AI创业孵化",
    "数字人直播",
    "农产品电商",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
