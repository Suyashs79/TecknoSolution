import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Sidebar } from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">

      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col bg-slate-900 md:flex">
        <Sidebar />
      </aside>

      {/* Main */}
      <main className="flex min-w-0 flex-1 flex-col">

        {/* Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b bg-white px-6">

          <h1 className="font-heading text-xl font-semibold text-slate-800">
            Teckno-Space
          </h1>

          <div className="flex items-center gap-4">

            <Show when="signed-out">
              <SignInButton />

              <SignUpButton>
                <button className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-700">
                  Sign Up
                </button>
              </SignUpButton>
            </Show>

            <Show when="signed-in">
              <UserButton />
            </Show>

          </div>

        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>

      </main>
    </div>
  );
}