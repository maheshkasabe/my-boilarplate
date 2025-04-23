import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentHero from "@/components/agents/AgentHero";
import AgentSearch from "@/components/agents/AgentSearch";
import AgentFeatured from "@/components/agents/AgentFeatured";
import AgentCTA from "@/components/agents/AgentCTA";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navbar />
      <AgentHero />
      <AgentSearch />
      <AgentFeatured />
      <AgentCTA />
      <Footer />
    </main>
  );
} 