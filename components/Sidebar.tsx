// components/Sidebar.tsx
import Link from "next/link";

export function Sidebar() {
  return (
    <div className="p-4 flex flex-col h-full text-slate-200">
      
      {/* Logo Area */}
      <div className="text-xl font-bold mb-8 p-2 tracking-wide text-white">
        Teckno Solution
      </div>

      {/* Navigation Links */}
      <nav className="space-y-2 flex-1">
        <Link href="/" className="block p-3 rounded-md hover:bg-slate-800 transition-colors">
          Dashboard Home
        </Link>
        <Link href="/crm" className="block p-3 rounded-md hover:bg-slate-800 transition-colors">
          CRM Integrations
        </Link>
        <Link href="/comms" className="block p-3 rounded-md hover:bg-slate-800 transition-colors">
          Communications
        </Link>
      </nav>
      
      {/* User Settings Area (Bottom of sidebar) */}
      <div className="mt-auto border-t border-slate-800 pt-4 p-2 text-sm text-slate-400">
        Settings
      </div>
    </div>
  );
}