"use client"

import { useState } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

export default function DateAndLocation() {
  const [eventDate, setEventDate] = useState<Date | undefined>()
  const [releaseDate, setReleaseDate] = useState<Date | undefined>()

  return (
    <div className="space-y-6">
      <div className="space-y-2 border-b border-slate-200 pb-5">
        <h2 className="text-base font-semibold text-slate-900">
          Data e localização
        </h2>
        <p className="text-sm text-slate-600">
          Defina a data que o evento vai acontecer, a data de seu lançamento e
          sua localização.
        </p>
      </div>

      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">
              Data do evento*
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "h-9 w-full justify-between border-slate-300 bg-white px-3 text-sm text-slate-700 shadow-none hover:bg-white",
                    !eventDate && "text-slate-500"
                  )}
                >
                  {eventDate ? (
                    format(eventDate, "dd/MM/yyyy")
                  ) : (
                    <span>Selecione</span>
                  )}
                  <CalendarIcon className="h-4 w-4 text-slate-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                className="rounded-lg border-slate-300 bg-white text-slate-700 shadow-none hover:bg-white"
                  mode="single"
                  selected={eventDate}
                  onSelect={(date) => setEventDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">
              Data de lançamento*
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "h-9 w-full justify-between border-slate-300 bg-white px-3 text-sm text-slate-700 shadow-none hover:bg-white",
                    !releaseDate && "text-slate-500"
                  )}
                >
                  {releaseDate ? (
                    format(releaseDate, "dd/MM/yyyy")
                  ) : (
                    <span>Selecione</span>
                  )}
                  <CalendarIcon className="h-4 w-4 text-slate-500" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={releaseDate}
                  onSelect={setReleaseDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">
              Estado*
            </label>
            <Select>
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sp">São Paulo</SelectItem>
                <SelectItem value="rj">Rio de Janeiro</SelectItem>
                <SelectItem value="mg">Minas Gerais</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-900">
              Cidade*
            </label>
            <Select>
              <SelectTrigger className="h-9">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sao-paulo">São Paulo</SelectItem>
                <SelectItem value="rio-de-janeiro">Rio de Janeiro</SelectItem>
                <SelectItem value="belo-horizonte">Belo Horizonte</SelectItem>
              </SelectContent>
            </Select>
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
