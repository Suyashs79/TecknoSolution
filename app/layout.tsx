import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { cn } from "@/lib/utils"; // Added this import since you are using cn() in the html tag

const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });
const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unified Workspace Dashboard",
  description: "Centralized hub for enterprise applications",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full", 
        "antialiased", 
        geistSans.variable, 
        geistMono.variable, 
        "font-sans", 
        notoSans.variable, 
        playfairDisplayHeading.variable
      )}
    >
      {/* 
        The Dashboard Grid Layout:
        'h-screen' and 'overflow-hidden' lock the page size.
        'bg-slate-50' gives a subtle background color for the widgets to sit on.
      */}
      <body className="flex h-screen overflow-hidden bg-slate-50">
        
        {/* 1. The Persistent Sidebar */}
        <aside className="hidden md:flex w-64 flex-col bg-slate-900 shrink-0">
          <Sidebar />
        </aside>

        {/* 2. The Main Content Area */}
        <main className="flex-1 flex flex-col">
          
          {/* Top Header */}
          <header className="h-16 bg-white border-b flex items-center px-6 shrink-0">
            {/* Using your Playfair Display font variable here as an example */}
            <h1 className="text-xl font-semibold font-heading text-slate-800">
              Teckno Space
            </h1>
          </header>

          {/* Dynamic Widget Area (This is where your pages load) */}
          <div className="flex-1 overflow-y-auto p-6">
            {children}
          </div>

        </main>
      </body>
    </html>
  );
}