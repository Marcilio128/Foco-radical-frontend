import Image from "next/image";

import { Input } from "@/components/ui/input";

const eventTypes = [
  {
    id: "esportivo",
    label: "Esportivo",
    logo: "/deafult_foco_radical_logo.png",
  },
  {
    id: "social",
    label: "Social",
    logo: "/default_fotos_by_logo.png",
  },
];

export default function EventDetails() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 border-b border-slate-200 pb-4">
        <h2 className="text-lg font-semibold text-slate-900">Dados do evento</h2>
        <p className="text-sm text-slate-500">
          Cadastre os dados do seu evento.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-semibold text-slate-900">
            Tipo do evento*
          </label>
          <div className="flex flex-wrap gap-4">
            {eventTypes.map((type, index) => (
              <label
                key={type.id}
                className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300"
              >
                <input
                  type="radio"
                  name="eventType"
                  defaultChecked={index === 0}
                  className="h-4 w-4"
                />
                <Image
                  src={type.logo}
                  alt={type.label}
                  width={48}
                  height={20}
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-900">
            Categoria*
          </label>
          <select className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-600">
            <option>Selecione</option>
            <option>Corrida</option>
            <option>Ciclismo</option>
            <option>Triathlon</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-900">
            Nome do evento*
          </label>
          <Input placeholder="Digite" className="h-10" />
          <p className="text-xs text-slate-500">
            Para destacar uma palavra em negrito, insira um asterisco antes e
            depois do texto: Exemplo: <b>*texto*</b>
          </p>
        </div>

        <div className="flex items-center gap-6 pt-2">
          <button type="button" className="text-sm font-semibold text-slate-600">
            Sair
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          >
            Próximo
            <span aria-hidden>→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
