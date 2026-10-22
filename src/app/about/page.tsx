import type { Metadata } from "next";
import { AboutPage, Footer, Header } from "@/components/homepage";

export const metadata: Metadata = {
  title: "About | BrightNest Cleaning Services",
  description:
    "Learn more about BrightNest Cleaning Services and how to get in touch.",
};

export default function About() {
  return (
    <>
      <Header />
      <AboutPage />
      <Footer />
    </>
  );
}
