"use client"

import { ArrowRight, Hash, Image, ScanFace } from "lucide-react"

const searchOptions = [
  { id: "facial", label: "Reconhecimento facial", icon: ScanFace },
  { id: "numeric", label: "Reconhecimento numérico", icon: Hash },
  { id: "gallery", label: "Exibição por galeria", icon: Image },
]

export default function SearchType() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">Tipo de busca</h2>
        <p className="text-sm text-slate-600">
          Selecione um tipo de busca para fotos e vídeos no evento.
        </p>
      </div>

      <form className="space-y-6">
        <fieldset className="flex flex-wrap items-center gap-6">
          <legend className="sr-only">Tipos de busca</legend>
          {searchOptions.map((option) => {
            const Icon = option.icon
            return (
              <label
                key={option.id}
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <input
                  type="checkbox"
                  name="searchTypes"
                  value={option.id}
                  className="h-3.5 w-3.5 rounded-[2px] border border-slate-300 text-slate-900 accent-slate-900"
                />
                <Icon className="h-5 w-5 text-slate-600" aria-hidden />
                <span>{option.label}</span>
              </label>
            )
          })}
        </fieldset>

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
      </form>
    </div>
  )
}
