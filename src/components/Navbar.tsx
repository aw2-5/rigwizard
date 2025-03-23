
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Drill, Home } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  
  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Only show back button if not on home page
  const showBackButton = location.pathname !== "/";
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md border-b",
        scrolled 
          ? "bg-white/80 border-rig-border shadow-sm" 
          : "bg-white/50 border-transparent"
      )}
    >
      <div className="container h-16 flex items-center justify-between">
        <div className="flex items-center gap-6">
          {showBackButton && (
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="group mr-2"
            >
              <Link to="/">
                <ArrowLeft 
                  className="h-5 w-5 transition-transform group-hover:-translate-x-1" 
                />
              </Link>
            </Button>
          )}
          
          <Link to="/" className="flex items-center gap-2 transition-all hover:opacity-80">
            <Drill className="h-6 w-6 text-rig-accent" />
            <span className="text-xl font-medium tracking-tight">RigWizard</span>
          </Link>
        </div>
        
        <nav className="flex items-center gap-1 sm:gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link 
              to="/"
              className={cn(
                "flex items-center gap-1.5",
                location.pathname === "/" ? "text-rig-accent" : "text-rig-primary"
              )}
            >
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
          </Button>
          
          <Button variant="ghost" size="sm" asChild>
            <Link 
              to="/rig-diagram"
              className={cn(
                "flex items-center gap-1.5",
                location.pathname === "/rig-diagram" ? "text-rig-accent" : "text-rig-primary"
              )}
            >
              <Drill className="h-4 w-4" />
              <span>Rig Diagram</span>
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
