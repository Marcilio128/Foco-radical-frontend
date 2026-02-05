import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import {
  BarChart3,
  Calendar,
  DollarSign,
  GraduationCap,
  HelpCircle,
  Home,
  Megaphone,
  MessageCircle,
  Search,
  ShoppingBag,
  Store,
  UserCircle2,
  Users,
} from "lucide-react";

const sidebarSections = [
  {
    title: "Geral",
    items: [
      { label: "Início", icon: Home, active: true, href: "/admin" },
      { label: "Eventos", icon: Calendar, href: "/admin/competition/create" },
      { label: "Minha agenda", icon: Calendar, href: "#" },
      { label: "Minha loja", icon: Store, href: "#" },
    ],
  },
  {
    title: "Outros",
    items: [
      { label: "Financeiro", icon: DollarSign, href: "#" },
      { label: "Relatórios", icon: BarChart3, href: "#" },
      { label: "Marketing", icon: Megaphone, href: "#" },
      { label: "Foco Talk", icon: MessageCircle, href: "#" },
      { label: "FAQ", icon: HelpCircle, href: "#" },
    ],
  },
  {
    title: "Produtos",
    items: [
      { label: "Shop Foco", icon: ShoppingBag, href: "#" },
      { label: "Foco Clube", icon: Users, href: "#" },
      { label: "Foco Academy", icon: GraduationCap, href: "#" },
    ],
  },
];

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <aside className="flex w-64 flex-col rounded-r-3xl bg-slate-950 text-white">
          <div className="flex h-20 items-center gap-3 px-6">
            <Image
              src="/deafult_foco_radical_logo.png"
              alt="Foco Radical"
              width={90}
              height={32}
              priority
            />
          </div>
          <nav className="flex-1 space-y-6 px-4 pb-6">
            {sidebarSections.map((section) => (
              <div key={section.title} className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-yellow-300/90">
                  {section.title}
                </p>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition ${
                        item.active
                          ? "bg-yellow-300 text-slate-950"
                          : "text-slate-200 hover:bg-slate-800"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>
          <div className="px-4 pb-6">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800"
            >
              <HelpCircle className="h-4 w-4" />
              <span>Fale conosco</span>
            </button>
          </div>
        </aside>

        <div className="flex flex-1 flex-col gap-6 px-6 py-6">
          <header className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-sm font-medium text-slate-700">
                <UserCircle2 className="h-4 w-4 text-slate-500" />
                Créditos: <span className="font-semibold text-slate-900">1000</span>
              </span>
            </div>
            <div className="flex flex-1 items-center justify-end gap-3">
              <div className="relative w-full max-w-sm">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input
                  placeholder="Pesquisa"
                  className="h-10 bg-white pl-9"
                />
              </div>
              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-sm font-semibold text-slate-700">
                SN
                <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-red-500" />
              </div>
            </div>
          </header>

          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}

