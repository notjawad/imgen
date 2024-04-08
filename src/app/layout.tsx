import "./globals.css";

import { VT323 } from "next/font/google";

import { cn } from "@/lib/utils";

const font = VT323({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-neutral-900 text-neutral-100", font.className)}>
        {children}
      </body>
    </html>
  );
}
