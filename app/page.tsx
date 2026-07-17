import Landing from "@/components/landing/Landing";
import PageTransition from "@/components/transitions/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Landing />
    </PageTransition>
  );
}