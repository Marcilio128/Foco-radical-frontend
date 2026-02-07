"use client"

import { ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function Keywords() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Palavras-chave do evento
        </h2>
        <p className="text-sm text-slate-600">
          Defina palavras-chave que facilitam a busca pelo evento no site.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900">
            Palavras-chave
          </label>
          <p className="text-sm text-slate-600">
            Aperte &quot;Enter&quot; ou adicione uma vírgula após cada palavra.
          </p>
          <Input placeholder="Digite" className="h-9" />
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
      </form>
    </div>
  )
}
