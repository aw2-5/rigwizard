
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

type LayoutProps = {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
};

export function Layout({ children, className, fullWidth = false }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-rig-background" dir="rtl">
      <Navbar />
      <main 
        className={cn(
          "flex-1 px-4 py-6 md:py-10",
          fullWidth ? "max-w-none" : "container",
          className
        )}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
