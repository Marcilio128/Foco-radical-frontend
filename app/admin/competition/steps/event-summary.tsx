"use client";

import { Check, Image as ImageIcon, PencilLine } from "lucide-react";

const discountPackages = ["5%", "10%", "20%", "30%", "40%"];
const priceCards = [
  { label: "Alta resolução", detail: "3.450 píxeis", value: "R$ 29,90" },
  { label: "Média resolução", detail: "2.400 píxeis", value: "R$ 24,90" },
  { label: "Baixa resolução", detail: "1.500 píxeis", value: "R$ 24,90" },
];
const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4"];

export default function EventSummary() {
  return (
    <section className="space-y-6">
      <header className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Resumo do evento
        </h2>
        <p className="text-sm text-slate-600">
          Revise as informações do seu evento antes de finalizar.
        </p>
      </header>

      <div className="space-y-4">
        <article className="space-y-4 rounded-md border border-slate-200 bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-slate-900">Dados do evento</h3>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Editar dados do evento"
            >
              <PencilLine className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <dl className="space-y-2 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">Tipo do evento:</dt>
              <dd>Esportivo</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">Categoria:</dt>
              <dd>Surf</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">Nome:</dt>
              <dd>Treinos Beira Mar Norte</dd>
            </div>
          </dl>
        </article>

        <article className="space-y-4 rounded-md border border-slate-200 bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Data e localização
            </h3>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Editar data e localização"
            >
              <PencilLine className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <dl className="space-y-2 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">Data do evento:</dt>
              <dd>20/11/2025</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">
                Data de lançamento:
              </dt>
              <dd>15/11/2025</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">Cidade:</dt>
              <dd>Florianópolis</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">Estado:</dt>
              <dd>Santa Catarina</dd>
            </div>
          </dl>
        </article>

        <article className="space-y-4 rounded-md border border-slate-200 bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-slate-900">Palavras-chave</h3>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Editar palavras-chave"
            >
              <PencilLine className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </article>

        <article className="space-y-4 rounded-md border border-slate-200 bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Configurações extras
            </h3>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Editar configurações extras"
            >
              <PencilLine className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <dl className="space-y-2 text-sm text-slate-700">
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">
                Liberação de pedidos:
              </dt>
              <dd>Ativo</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="font-medium text-slate-900">Foco Fast:</dt>
              <dd>Ativo</dd>
            </div>
          </dl>
        </article>

        <article className="space-y-4 rounded-md border border-slate-200 bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-slate-900">
              Perfil de preço
            </h3>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Editar perfil de preço"
            >
              <PencilLine className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <div className="space-y-2">
              <p className="font-medium text-slate-900">Pacote de desconto</p>
              <div className="flex flex-wrap items-center gap-2">
                {discountPackages.map((discount) => (
                  <span
                    key={discount}
                    className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600"
                  >
                    {discount}
                  </span>
                ))}
                <span className="text-xs font-medium text-slate-600">
                  Vídeo: R$12,00
                </span>
              </div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {priceCards.map((card) => (
                <div
                  key={card.label}
                  className="rounded-md border border-slate-200 bg-slate-50 p-3 text-xs text-slate-600"
                >
                  <p className="font-medium text-slate-700">
                    {card.label} {card.detail}:
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-900">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="space-y-4 rounded-md border border-slate-200 bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-slate-900">Tipo de busca</h3>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Editar tipo de busca"
            >
              <PencilLine className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="space-y-1 text-sm text-slate-700">
            <div className="flex items-center gap-2 text-slate-900">
              <ImageIcon className="h-4 w-4 text-slate-700" aria-hidden />
              <span className="font-medium">Exibição por galeria</span>
            </div>
            <p className="text-sm text-slate-600">Várias galerias</p>
          </div>
        </article>

        <article className="space-y-4 rounded-md border border-slate-200 bg-white p-4 shadow-[0px_0px_10px_rgba(0,0,0,0.08)]">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-sm font-semibold text-slate-900">Colaboração</h3>
            <button
              type="button"
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 text-slate-500 transition hover:border-slate-300 hover:text-slate-700"
              aria-label="Editar colaboração"
            >
              <PencilLine className="h-4 w-4" aria-hidden />
            </button>
          </div>
          <div className="space-y-3 text-sm text-slate-700">
            <span className="inline-flex w-fit items-center rounded-md bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600">
              Perfil de comissão 1
            </span>
            <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-50 text-green-600">
                <Check className="h-3 w-3" aria-hidden />
              </span>
              Contrato vinculado
            </div>
            <p className="text-sm text-slate-700">
              <span className="font-medium text-slate-900">Foco Radical:</span>{" "}
              10%{" "}
              <span className="pl-2 font-medium text-slate-900">
                Sua comissão:
              </span>{" "}
              50%{" "}
              <span className="pl-2 font-medium text-slate-900">Parceiro:</span>{" "}
              20%{" "}
              <span className="pl-2 font-medium text-slate-900">
                Fotógrafo:
              </span>{" "}
              20%
            </p>
          </div>
        </article>
      </div>

      <div className="flex items-center gap-6 pt-2">
        <button type="button" className="text-sm font-medium text-slate-700">
          Sair
        </button>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-yellow-300 hover:bg-slate-800"
        >
          Publicar evento
        </button>
      </div>
    </section>
  );
}
