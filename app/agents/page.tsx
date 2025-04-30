import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AgentHero from "@/components/agents/AgentHero";
import AgentVideoHero from "@/components/agents/AgentVideoHero";
import AgentSearch from "@/components/agents/AgentSearch";
import AgentFeatured from "@/components/agents/AgentFeatured";
import AgentCTA from "@/components/agents/AgentCTA";
import SmoothScrollInit from "@/components/SmoothScrollInit";

export default function AgentsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <SmoothScrollInit />
      <Navbar />
      <AgentVideoHero />
      <AgentSearch />
      <AgentFeatured />
      <AgentCTA />
      <Footer />
    </main>
  );
} 