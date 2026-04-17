import type { Metadata } from "next";
import ProvidersHero from "@/components/providers/ProvidersHero";
import ProviderFeatures from "@/components/providers/ProviderFeatures";
import ProviderSteps from "@/components/providers/ProviderSteps";
import CTA from "@/components/ui/CTA";
import providerData from "@/data/providers.json";

export const metadata: Metadata = {
  title: "Providers",
  description: "Join our network of vetted home service professionals. We bring the customers to you, so you can focus on what you do best.",
};

export default function ProvidersPage() {
  const { title, description, buttonText } = providerData.cta;

  return (
    <main>
      <ProvidersHero />
      <ProviderFeatures />
      <ProviderSteps />
      <CTA
        title={title}
        description={description}
        buttonText={buttonText}
        href="#"
      />
    </main>
  );
}
