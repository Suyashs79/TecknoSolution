"use client";

import {
  Activity,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Layers3,
  Plus,
  Workflow,
} from "lucide-react";

import CommunicationWidget from "@/components/communication/CommunicationWidget";

const applications = [
  {
    name: "Product Management",
    description: "Manage products and releases",
    status: "Active",
  },
  {
    name: "Engineering Workspace",
    description: "Development and engineering tools",
    status: "Active",
  },
  {
    name: "Customer Operations",
    description: "Customer workflows and support",
    status: "Active",
  },
];

const activities = [
  {
    title: "Communication widget connected",
    description: "Slack preview initialized",
    time: "5 min ago",
  },
  {
    title: "Engineering workflow updated",
    description: "Deployment workflow completed",
    time: "28 min ago",
  },
  {
    title: "New application added",
    description: "Customer Operations",
    time: "1 hr ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
            Workspace
          </p>

          <h1 className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Welcome back. Here&apos;s what&apos;s happening across your
            workspace.
          </p>
        </div>

        <button className="flex w-fit items-center gap-2 rounded-lg bg-slate-900 px-4 py-2.5 text-xs font-medium text-white shadow-sm transition hover:bg-slate-800">
          <Plus className="h-4 w-4" />
          Add Application
        </button>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Applications"
          value="24"
          description="+4 this month"
          icon={<Layers3 className="h-4 w-4" />}
        />

        <StatCard
          title="Active Workflows"
          value="12"
          description="3 running now"
          icon={<Workflow className="h-4 w-4" />}
        />

        <StatCard
          title="Team Activity"
          value="+18%"
          description="Compared to last week"
          icon={<Activity className="h-4 w-4" />}
        />

        <StatCard
          title="Success Rate"
          value="98.4%"
          description="+2.1% this month"
          icon={<BarChart3 className="h-4 w-4" />}
        />
      </div>

      {/* Communication */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-900">
              Communication
            </h2>

            <p className="text-xs text-slate-500">
              Stay connected with your teams without leaving Teckno Space.
            </p>
          </div>

          <button className="flex items-center gap-1 text-xs font-medium text-slate-500 transition hover:text-slate-900">
            Open workspace
            <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </div>

        <CommunicationWidget />
      </div>

      {/* Bottom section */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Applications */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
            <div>
              <h2 className="text-sm font-semibold text-slate-900">
                Applications
              </h2>

              <p className="mt-0.5 text-xs text-slate-500">
                Your most recently used applications
              </p>
            </div>

            <button className="text-xs font-medium text-slate-500 hover:text-slate-900">
              View all
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            {applications.map((application) => (
              <div
                key={application.name}
                className="flex items-center justify-between px-5 py-4"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                    <Layers3 className="h-4 w-4 text-slate-500" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-800">
                      {application.name}
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      {application.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                  <span className="text-[11px] font-medium text-slate-500">
                    {application.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Activity */}
        <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-5 py-4">
            <h2 className="text-sm font-semibold text-slate-900">
              Recent Activity
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">
              Latest events across your workspace
            </p>
          </div>

          <div className="divide-y divide-slate-100">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="flex gap-3 px-5 py-4"
              >
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100">
                  <CheckCircle2 className="h-4 w-4 text-slate-500" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-slate-800">
                    {activity.title}
                  </p>

                  <p className="mt-0.5 text-[11px] text-slate-400">
                    {activity.description}
                  </p>

                  <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
                    <Clock3 className="h-3 w-3" />
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
  icon,
}: {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-slate-500">{title}</span>

        <div className="rounded-lg bg-slate-100 p-2 text-slate-500">
          {icon}
        </div>
      </div>

      <p className="mt-4 text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[11px] text-slate-400">{description}</p>
    </div>
  );
}