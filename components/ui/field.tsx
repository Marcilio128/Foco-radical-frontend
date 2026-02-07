import * as React from "react"

import { cn } from "@/lib/utils"

const Field = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
  )
)
Field.displayName = "Field"

const FieldLabel = React.forwardRef<
  HTMLLabelElement,
  React.ComponentProps<"label">
>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn("text-sm font-medium text-slate-900", className)}
    {...props}
  />
))
FieldLabel.displayName = "FieldLabel"

export { Field, FieldLabel }
