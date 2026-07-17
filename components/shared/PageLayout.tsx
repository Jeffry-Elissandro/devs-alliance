import BackButton from "./BackButton";

import PageHero from "@/components/layout/PageHero";
import WelcomeCard from "@/components/layout/WelcomeCard";
import NextSection from "@/components/layout/NextSection";
import FooterSection from "@/components/layout/FooterSection";

interface PageLayoutProps {
  children: React.ReactNode;

  hero: {
    title: string;
    subtitle: string;
    image: string;
  };

  welcome: {
    image: string;
    title: string;
    text: string;
  };

  nextSections: {
    title: string;
    href: string;
  }[];
}

export default function PageLayout({
  children,
  hero,
  welcome,
  nextSections,
}: PageLayoutProps) {
  return (
    <>

      <BackButton />

      <PageHero {...hero} />

      <WelcomeCard {...welcome} />

      <main>

        {children}

      </main>

      <NextSection
        items={nextSections}
      />

      <FooterSection />

    </>
  );
}