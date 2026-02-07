"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

type Step = {
  label: string
  description?: string
  href?: string
  onClick?: () => void
}

type StepsProps = {
  steps: Step[]
  activeStep?: number
  orientation?: "horizontal" | "vertical"
  className?: string
}

function Steps({
  steps,
  activeStep = 0,
  orientation = "horizontal",
  className,
}: StepsProps) {
  if (orientation === "vertical") {
    return (
      <ol className={cn("space-y-2", className)}>
        {steps.map((step, index) => {
          const isCurrent = index === activeStep

          const content = (
            <div
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition",
                isCurrent
                  ? "bg-slate-100 text-slate-900"
                  : "text-slate-600 hover:bg-slate-50"
              )}
            >
              <ChevronRight
                className={cn(
                  "h-4 w-4",
                  isCurrent ? "text-slate-900" : "text-slate-400"
                )}
              />
              <span>{step.label}</span>
              {step.description ? (
                <span className="ml-2 text-xs text-slate-500">
                  {step.description}
                </span>
              ) : null}
            </div>
          )

          return (
            <li key={step.label}>
              {step.href ? (
                <Link href={step.href}>{content}</Link>
              ) : step.onClick ? (
                <button
                  type="button"
                  className="block w-full text-left"
                  onClick={step.onClick}
                >
                  {content}
                </button>
              ) : (
                content
              )}
            </li>
          )
        })}
      </ol>
    )
  }

  return (
    <ol className={cn("flex w-full items-center", className)}>
      {steps.map((step, index) => {
        const isComplete = index < activeStep
        const isCurrent = index === activeStep
        const stepContent = (
          <div className="flex items-center gap-3">
            <span
              className={cn(
                "flex h-8 w-8 items-center justify-center rounded-full border text-sm font-semibold",
                isComplete
                  ? "border-primary bg-primary text-primary-foreground"
                  : isCurrent
                  ? "border-primary text-primary"
                  : "border-muted-foreground/40 text-muted-foreground"
              )}
            >
              {index + 1}
            </span>
            <div className="flex flex-col">
              <span
                className={cn(
                  "text-sm font-medium",
                  isComplete || isCurrent
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {step.label}
              </span>
              {step.description ? (
                <span className="text-xs text-muted-foreground">
                  {step.description}
                </span>
              ) : null}
            </div>
          </div>
        )

        return (
          <li key={step.label} className="flex flex-1 items-center">
            {step.href ? (
              <Link href={step.href}>{stepContent}</Link>
            ) : step.onClick ? (
              <button
                type="button"
                className="text-left"
                onClick={step.onClick}
              >
                {stepContent}
              </button>
            ) : (
              stepContent
            )}
            {index < steps.length - 1 ? (
              <div
                className={cn(
                  "mx-3 h-px flex-1 bg-border",
                  isComplete ? "bg-primary" : "bg-border"
                )}
              />
            ) : null}
          </li>
        )
      })}
    </ol>
  )
}

export { Steps }
export type { Step, StepsProps }

