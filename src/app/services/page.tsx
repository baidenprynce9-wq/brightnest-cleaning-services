import type { Metadata } from "next";
import { Footer, Header, ServicesPage } from "@/components/homepage";

export const metadata: Metadata = {
  title: "Cleaning Services | BrightNest Cleaning",
  description:
    "Home, deep, and office cleaning. Contact BrightNest to ask about a quote.",
};

export default function Services() {
  return (
    <>
      <Header />
      <ServicesPage />
      <Footer />
    </>
  );
}
