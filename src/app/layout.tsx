import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightNest Cleaning Services",
  description:
    "Home, deep, and office cleaning. Contact BrightNest to ask about a quote.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
