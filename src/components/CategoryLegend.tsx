
import { cn } from "@/lib/utils";
import { getCategoryColor } from "@/data/rigComponents";

const categories = [
  "Hoisting",
  "Drilling",
  "Power",
  "Fluid",
  "Safety",
  "Housing",
  "Storage",
  "Other"
];

export const CategoryLegend = () => {
  return (
    <div className="flex flex-wrap gap-3 justify-center p-4 bg-white/70 backdrop-blur-sm rounded-lg border border-rig-border shadow-sm">
      {categories.map(category => (
        <div 
          key={category}
          className="flex items-center gap-2 text-sm"
        >
          <span 
            className={cn(
              "inline-block w-3 h-3 rounded-full"
            )}
            style={{ backgroundColor: getCategoryColor(category) }}
          />
          <span className="text-rig-primary">{category}</span>
        </div>
      ))}
    </div>
  );
};
