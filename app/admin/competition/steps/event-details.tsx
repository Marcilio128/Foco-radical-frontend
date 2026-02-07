"use client";

import Image from "next/image";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">Dados do evento</h2>
        <p className="text-sm text-slate-600">
          Cadastre os dados do seu evento.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-900">
            Tipo do evento*
          </label>
          <div className="flex flex-wrap gap-4">
            {eventTypes.map((type, index) => (
              <label
                key={type.id}
                className="flex h-9 cursor-pointer items-center gap-2 rounded-md border border-slate-300 px-3 text-sm font-medium text-slate-700 transition hover:border-slate-400"
              >
                <input
                  type="radio"
                  name="eventType"
                  defaultChecked={index === 0}
                  className="h-4 w-4 accent-slate-900"
                />
                <Image
                  src={type.logo}
                  alt={type.label}
                  width={60}
                  height={22}
                  className="h-4 w-auto"
                />
                {type.label}
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900">
            Categoria*
          </label>
          <Select>
            <SelectTrigger className="h-9">
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="corrida">Corrida</SelectItem>
              <SelectItem value="ciclismo">Ciclismo</SelectItem>
              <SelectItem value="triathlon">Triathlon</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900">
            Nome do evento*
          </label>
          <Input placeholder="Digite" className="h-9" />
          <p className="text-sm leading-5 text-slate-600">
            Para destacar uma palavra em negrito, insira um asterisco antes e
            depois do texto: Exemplo: <strong>*texto*</strong>
          </p>
        </div>

        <div className="flex items-center gap-6 pt-2">
          <button type="button" className="text-sm font-medium text-slate-700">
            Sair
          </button>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-yellow-300 hover:bg-slate-800"
          >
            Próximo
            <span aria-hidden>→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
