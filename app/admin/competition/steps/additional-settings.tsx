"use client"

import { ArrowRight, Info } from "lucide-react"

import { Switch } from "@/components/ui/switch"

export default function AdditionalSettings() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Configurações extras
        </h2>
        <p className="text-sm text-slate-600">
          Defina um status para as configurações deste evento.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Switch id="release-orders" />
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <label htmlFor="release-orders" className="font-medium">
                Ativar a liberação de pedidos neste evento
              </label>
              <Info className="h-4 w-4 text-slate-400" aria-hidden />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Switch id="fast-orders" />
            <div className="flex items-center gap-2 text-sm text-slate-700">
              <label htmlFor="fast-orders" className="font-medium">
                Ativar Foco Fast
              </label>
              <Info className="h-4 w-4 text-slate-400" aria-hidden />
            </div>
          </div>
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
