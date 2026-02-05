import Link from "next/link"

import { cn } from "@/lib/utils"

type SidebarItem = {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  active?: boolean
  badge?: string
}

type SidebarProps = {
  title?: string
  items: SidebarItem[]
  footer?: React.ReactNode
  className?: string
}

function Sidebar({ title = "Menu", items, footer, className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r bg-sidebar text-sidebar-foreground",
        className
      )}
    >
      <div className="flex h-16 items-center px-6 text-lg font-semibold">
        {title}
      </div>
      <nav className="flex-1 space-y-1 px-3 pb-4">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                item.active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "hover:bg-sidebar-accent/60 hover:text-sidebar-accent-foreground"
              )}
            >
              {Icon ? <Icon className="h-4 w-4" /> : null}
              <span className="flex-1">{item.label}</span>
              {item.badge ? (
                <span className="rounded-full bg-sidebar-primary px-2 py-0.5 text-xs text-sidebar-primary-foreground">
                  {item.badge}
                </span>
              ) : null}
            </Link>
          )
        })}
      </nav>
      {footer ? <div className="border-t px-4 py-3">{footer}</div> : null}
    </aside>
  )
}

export { Sidebar }
export type { SidebarItem, SidebarProps }

