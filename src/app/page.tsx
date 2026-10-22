import {
  ContactSection,
  Footer,
  Header,
  Hero,
} from "@/components/homepage";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
