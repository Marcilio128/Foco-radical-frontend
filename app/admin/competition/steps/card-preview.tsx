"use client"

import { ArrowRight, Calendar, MapPin, Store, Waves } from "lucide-react"

export default function CardPreview() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">Preview do card</h2>
        <p className="text-sm text-slate-600">
          Veja uma prévia das informações do card deste evento.
        </p>
      </div>

      <div className="space-y-6">
        <div className="rounded-md border border-slate-300 bg-white p-4">
          <div className="mx-auto flex max-w-[660px] items-center gap-4 rounded-[12px] border border-slate-200 bg-white p-3 shadow-[0px_0px_8px_rgba(0,0,0,0.17)]">
            <div className="flex h-[110px] w-[160px] items-center justify-center rounded-[16px] bg-[#e8e8e8]">
              <Waves className="h-10 w-10 text-[#181818]" aria-hidden />
            </div>
            <div className="flex flex-1 flex-col gap-2">
              <p className="text-sm font-semibold uppercase tracking-[0.02em] text-[#181818]">
                Evento com nome longo de surf
              </p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[#454545]">
                <div className="flex items-center gap-2">
                  <Waves className="h-4 w-4" aria-hidden />
                  <span className="font-semibold">Surf</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" aria-hidden />
                  <span>07/06/2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" aria-hidden />
                  <span>Florianópolis/SC</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#454545]">
                <Store className="h-4 w-4" aria-hidden />
                <span>
                  <span className="font-medium">Por:</span>{" "}
                  <span className="font-semibold underline">
                    Floripa Road Runners
                  </span>
                </span>
              </div>
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
      </div>
    </div>
  )
}
