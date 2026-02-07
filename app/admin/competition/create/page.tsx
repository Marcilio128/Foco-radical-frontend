"use client";

import { useState } from "react";

import { Steps } from "@/components/steps";
import AdditionalSettings from "@/app/admin/competition/steps/additional-settings";
import CardPreview from "@/app/admin/competition/steps/card-preview";
import DateAndLocation from "@/app/admin/competition/steps/date-and-location";
import EventDetails from "@/app/admin/competition/steps/event-details";
import EventSummary from "@/app/admin/competition/steps/event-summary";
import Keywords from "@/app/admin/competition/steps/keywords";
import Partnership from "@/app/admin/competition/steps/partnership";
import PricingProfile from "@/app/admin/competition/steps/pricing-profile";
import SearchType from "@/app/admin/competition/steps/search-type";

const steps = [
  { key: "event-details", label: "Dados do evento" },
  { key: "date-and-location", label: "Data e localização" },
  { key: "card-preview", label: "Preview do card" },
  { key: "keywords", label: "Palavras-chave" },
  { key: "additional-settings", label: "Configurações extras" },
  { key: "pricing-profile", label: "Perfil de preço" },
  { key: "search-type", label: "Tipo de busca" },
  { key: "partnership", label: "Parceria" },
  { key: "event-summary", label: "Resumo do evento" },
];

const stepComponents: Record<string, React.ComponentType> = {
  "event-details": EventDetails,
  "date-and-location": DateAndLocation,
  "card-preview": CardPreview,
  keywords: Keywords,
  "additional-settings": AdditionalSettings,
  "pricing-profile": PricingProfile,
  "search-type": SearchType,
  partnership: Partnership,
  "event-summary": EventSummary,
};

export default function CompetitionCreate() {
  const [currentStepKey, setCurrentStepKey] = useState("event-details");
  const activeStepIndex = Math.max(
    0,
    steps.findIndex((step) => step.key === currentStepKey)
  );
  const StepComponent =
    stepComponents[currentStepKey] ?? stepComponents["event-details"];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <section className="rounded-3xl bg-white p-6 shadow-sm">
        <div className="space-y-2 border-b border-slate-200 pb-4">
          <h1 className="text-2xl font-semibold text-slate-900">
            Crie seu evento
          </h1>
          <p className="text-sm text-slate-500">
            Preencha as informações do seu evento.
          </p>
        </div>

        <div className="grid gap-8 pt-6 lg:grid-cols-[240px_1fr]">
          <aside className="space-y-4">
            <Steps
              steps={steps.map((step) => ({
                label: step.label,
                onClick: () => setCurrentStepKey(step.key),
              }))}
              activeStep={activeStepIndex}
              orientation="vertical"
            />
          </aside>

          <div className="space-y-6">
            <StepComponent />
          </div>
        </div>
      </section>
    </div>
  );
}

