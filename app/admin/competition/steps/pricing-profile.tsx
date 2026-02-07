"use client"

import { ArrowRight, ChevronsUpDown, Heart, Plus, Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

const tabs = [
  { id: "mine", label: "Meus preços", count: 5, active: true },
  { id: "favorites", label: "Favoritos", count: 2, active: false },
  { id: "system", label: "Padrão do sistema", count: 10, active: false },
]

const profiles = [
  {
    id: "profile-1",
    title: "Perfil de preço 1",
    discounts: [5, 10, 20, 30, 40],
    video: "R$ 12",
    active: true,
  },
  {
    id: "profile-2",
    title: "Perfil de preço 2",
    discounts: [5, 15, 25, 35],
    video: null,
    active: false,
  },
  {
    id: "profile-3",
    title: "Perfil de preço 3",
    discounts: [10, 20, 30, 40, 50],
    video: "R$ 10",
    active: false,
  },
]

const priceCards = [
  { label: "Alta resolução", detail: "3.450 píxeis", value: "R$ 29,90" },
  { label: "Média resolução", detail: "2.400 píxeis", value: "R$ 24,90" },
  { label: "Baixa resolução", detail: "1.500 píxeis", value: "R$ 24,90" },
]

const discountPackages = [
  { label: "3 fotos", value: "5%" },
  { label: "6 fotos", value: "10%" },
  { label: "9 fotos", value: "20%" },
  { label: "12 fotos", value: "30%" },
  { label: "15 fotos", value: "40%" },
  { label: "Vídeo", value: "R$ 12,00" },
]

export default function PricingProfile() {
  return (
    <section className="space-y-6">
      <header className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="space-y-2">
          <h2 className="text-base font-semibold text-slate-900">
            Perfil de preço
          </h2>
          <p className="text-sm text-slate-600">
            Escolha o perfil de preço para esse evento.
          </p>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-yellow-300 hover:bg-slate-800"
        >
          <Plus className="h-4 w-4" aria-hidden />
          Novo perfil
        </button>
      </header>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="inline-flex items-center gap-1 rounded-md bg-slate-100 p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={cn(
                "inline-flex items-center gap-2 rounded-[4px] px-3 py-1.5 text-sm font-medium",
                tab.active
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:bg-white/80"
              )}
            >
              {tab.label}
              <span
                className={cn(
                  "inline-flex h-5 w-5 items-center justify-center rounded-sm text-xs font-semibold",
                  tab.active
                    ? "bg-yellow-300 text-slate-900"
                    : "bg-slate-200 text-slate-600"
                )}
              >
                {tab.count}
              </span>
            </button>
          ))}
          <ChevronsUpDown className="h-4 w-4 text-slate-500" aria-hidden />
        </div>

        <div className="relative w-full max-w-[236px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
          <Input
            placeholder="Pesquise"
            className="h-9 pl-8 text-sm text-slate-700"
          />
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="max-h-[344px] space-y-4 overflow-y-auto pr-1">
          {profiles.map((profile) => (
            <article
              key={profile.id}
              className={cn(
                "relative rounded-md border p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]",
                profile.active ? "border-slate-700" : "border-slate-200"
              )}
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-slate-900">
                    {profile.title}
                  </h3>
                  <p className="mt-2 text-[10px] font-semibold text-slate-600">
                    Pacote de desconto
                  </p>
                  {profile.video ? (
                    <span className="mt-1 inline-flex items-center text-[10px] font-medium text-slate-600">
                      <span className="mr-2 inline-block h-1 w-1 rounded-full bg-slate-400" />
                      Vídeo: {profile.video}
                    </span>
                  ) : null}
                </div>
                <Heart className="h-4 w-4 text-slate-600" aria-hidden />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {profile.discounts.map((discount) => (
                  <span
                    key={`${profile.id}-${discount}`}
                    className="inline-flex items-center justify-center rounded-md bg-slate-200 px-2 py-1 text-xs font-semibold text-slate-600"
                  >
                    {discount}%
                  </span>
                ))}
              </div>
            </article>
          ))}
        </aside>

        <section className="rounded-lg border border-slate-700 p-6">
          <header className="space-y-1">
            <h3 className="text-sm font-semibold text-slate-900">
              Perfil de preço 1
            </h3>
          </header>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {priceCards.map((card) => (
              <article
                key={card.label}
                className="rounded-md border border-slate-200 px-3 py-4 text-center text-slate-600"
              >
                <p className="text-xs font-medium leading-tight">
                  {card.label} <br />
                  {card.detail}:
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-700">
                  {card.value}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-sm font-semibold text-slate-900">
                Pacote de desconto
              </h4>
              <p className="text-[10px] text-slate-600">
                Prazo de validade:{" "}
                <span className="font-semibold italic">90 dias</span>
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {discountPackages.map((pkg) => (
                <div
                  key={pkg.label}
                  className="flex items-center justify-center rounded-lg bg-slate-200 px-3 py-2 text-sm text-slate-600"
                >
                  <span className="font-medium">
                    {pkg.label}:{" "}
                    <span className="font-semibold">{pkg.value}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <div className="flex items-center gap-6 pt-2">
        <button type="button" className="text-sm font-medium text-slate-700">
          Anterior
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-yellow-300 hover:bg-slate-800"
        >
          Próximo
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>
    </section>
  )
}
