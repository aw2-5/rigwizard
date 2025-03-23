
import { cn } from "@/lib/utils";
import { Drill, Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-rig-border py-6 bg-white/50 backdrop-blur-md">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Drill className="h-5 w-5 text-rig-accent" />
          <span className="text-sm font-medium">RigWizard © {new Date().getFullYear()}</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="#" 
            className={cn(
              "text-rig-secondary hover:text-rig-accent transition-colors text-sm flex items-center gap-1"
            )}
          >
            <Twitter className="h-4 w-4" />
            <span>Twitter</span>
          </a>
          <a 
            href="#" 
            className={cn(
              "text-rig-secondary hover:text-rig-accent transition-colors text-sm flex items-center gap-1"
            )}
          >
            <Github className="h-4 w-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
