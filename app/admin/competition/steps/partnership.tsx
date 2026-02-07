"use client"

import { ArrowRight } from "lucide-react"

import { Input } from "@/components/ui/input"

export default function Partnership() {
  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">Parceria</h2>
        <p className="text-sm text-slate-600">
          Adicione um parceiro e configure as comissões de cada participante.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-900">
            Adicione um parceiro
          </label>
          <Input placeholder="Digite" className="h-9 max-w-[240px]" />
          <p className="text-xs text-slate-600">
            Você só pode adicionar um parceiro por evento.
          </p>
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
    </section>
  )
}
