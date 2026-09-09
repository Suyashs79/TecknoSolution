"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Activity,
  AppWindow,
  BarChart3,
  ChevronRight,
  LayoutDashboard,
  Settings,
  Workflow,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Applications",
    href: "/dashboard/applications",
    icon: AppWindow,
  },
  {
    name: "Workflows",
    href: "/dashboard/workflows",
    icon: Workflow,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },
  {
    name: "Activity",
    href: "/dashboard/activity",
    icon: Activity,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">

      {/* =====================================================
          LOGO
      ===================================================== */}

      <div className="flex h-16 items-center border-b border-white/10 px-5">

        <Link
          href="/dashboard"
          className="flex items-center gap-3"
        >

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
            <span className="font-bold text-slate-900">
              T
            </span>
          </div>

          <span className="font-heading text-lg font-semibold text-white">
            Teckno-Space
          </span>

        </Link>

      </div>


      {/* =====================================================
          NAVIGATION
      ===================================================== */}

      <nav className="flex-1 space-y-1 p-4">

        <div className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Workspace
        </div>


        {navigation.map((item) => {

          const Icon = item.icon;

          const isActive =
            pathname === item.href ||
            (
              item.href !== "/dashboard" &&
              pathname.startsWith(item.href)
            );

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group
                flex
                items-center
                gap-3
                rounded-lg
                px-3
                py-2.5
                text-sm
                font-medium
                transition
                ${
                  isActive
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >

              <Icon size={18} />

              <span className="flex-1">
                {item.name}
              </span>

              {isActive && (
                <ChevronRight
                  size={15}
                  className="text-slate-400"
                />
              )}

            </Link>
          );
        })}


        <div className="mb-4 mt-8 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          System
        </div>


        <Link
          href="/dashboard/settings"
          className={`
            flex
            items-center
            gap-3
            rounded-lg
            px-3
            py-2.5
            text-sm
            font-medium
            transition
            ${
              pathname.startsWith("/dashboard/settings")
                ? "bg-white/10 text-white"
                : "text-slate-400 hover:bg-white/5 hover:text-white"
            }
          `}
        >

          <Settings size={18} />

          <span>
            Settings
          </span>

        </Link>

      </nav>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="border-t border-white/10 p-4">

        <div className="rounded-xl bg-white/5 p-4">

          <div className="text-xs font-medium text-slate-400">
            Teckno-Space
          </div>

          <div className="mt-1 text-sm text-white">
            Unified Workspace
          </div>

          <div className="mt-3 text-xs leading-5 text-slate-500">
            Connect your tools and manage your digital workspace.
          </div>

        </div>

      </div>

    </div>
  );
}