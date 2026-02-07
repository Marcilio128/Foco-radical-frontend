import * as React from "react"

import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

type InputGroupAlign = "inline-start" | "inline-end"

const InputGroup = React.forwardRef<HTMLDivElement, React.ComponentProps<"div">>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("relative flex w-full items-center", className)}
      {...props}
    />
  )
)
InputGroup.displayName = "InputGroup"

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<typeof Input>
>(({ className, ...props }, ref) => (
  <Input ref={ref} className={cn("pr-10", className)} {...props} />
))
InputGroupInput.displayName = "InputGroupInput"

const InputGroupAddon = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & { align?: InputGroupAlign }
>(({ className, align = "inline-end", ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute inset-y-0 flex items-center",
      align === "inline-start" ? "left-1" : "right-1",
      className
    )}
    {...props}
  />
))
InputGroupAddon.displayName = "InputGroupAddon"

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { size?: ButtonProps["size"] | "icon-xs" }
>(({ className, size = "icon-xs", ...props }, ref) => (
  <Button ref={ref} className={className} size={size} {...props} />
))
InputGroupButton.displayName = "InputGroupButton"

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
}
