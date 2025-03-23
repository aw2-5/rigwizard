
import { cn } from "@/lib/utils";
import { getCategoryColor } from "@/data/rigComponents";

const categories = [
  "رفع",
  "حفر",
  "طاقة",
  "سوائل",
  "أمان",
  "إسكان",
  "تخزين",
  "أخرى"
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
            style={{ backgroundColor: getCategoryColor(categoryArabicToEnglish(category)) }}
          />
          <span className="text-rig-primary">{category}</span>
        </div>
      ))}
    </div>
  );
};

// Helper function to map Arabic categories to English for color lookup
function categoryArabicToEnglish(arabicCategory: string): string {
  const categoryMap: Record<string, string> = {
    'رفع': 'Hoisting',
    'حفر': 'Drilling',
    'طاقة': 'Power',
    'سوائل': 'Fluid',
    'أمان': 'Safety',
    'إسكان': 'Housing',
    'تخزين': 'Storage',
    'أخرى': 'Other'
  };

  return categoryMap[arabicCategory] || 'Other';
}
