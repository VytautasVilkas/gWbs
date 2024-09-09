import './globals.css'; 
import { BreadcrumbWithDropdown } from "@/components/ui/BreadcrumbWithDropdown"; 
import { HoverCardDemo } from "@/components/ui/MyHover"; // Import HoverCardDemo
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white font-sans">
        
        {/* Breadcrumb component will be available on every page */}
        <header className="p-4">
          <BreadcrumbWithDropdown />
        </header>
        
        
        <main className="flex-grow">
          {children}
        </main>

        <div className="text-center text-sm  mt-8 p-1">
        <HoverCardDemo />
      </div>
        <footer className=" no-select p-1 text-center text-sm text-white">
          © 2024 Gabrielė Tvaskaitė
        </footer>
        
      </body>
    </html>
  );
}
