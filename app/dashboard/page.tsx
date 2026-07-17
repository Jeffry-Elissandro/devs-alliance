import Dashboard from "@/components/dashboard/Dashboard";
import PageTransition from "@/components/transitions/PageTransition";

export default function DashboardPage() {
  return (
    <PageTransition>
      <Dashboard />
    </PageTransition>
  );
}