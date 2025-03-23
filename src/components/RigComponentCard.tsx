
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { RigComponent, getCategoryColor } from "@/data/rigComponents";

interface RigComponentCardProps {
  component: RigComponent;
  isHighlighted?: boolean;
}

export const RigComponentCard = ({ component, isHighlighted = false }: RigComponentCardProps) => {
  const navigate = useNavigate();
  const { id, nameArabic, descriptionArabic, category, categoryArabic } = component;
  
  const handleClick = () => {
    navigate(`/component/${id}`);
  };
  
  return (
    <Card 
      className={cn(
        "group h-full transition-all duration-300 cursor-pointer border overflow-hidden",
        isHighlighted 
          ? "border-rig-accent shadow-md ring-1 ring-rig-accent/20" 
          : "border-rig-border hover:shadow-md hover:border-rig-accent/50"
      )}
      onClick={handleClick}
    >
      <CardHeader className="relative p-4 pb-3">
        <div className="flex items-center justify-between gap-2">
          <Badge 
            className="absolute -top-3 -right-3 z-10 font-medium text-white"
            style={{ backgroundColor: getCategoryColor(category) }}
          >
            {categoryArabic}
          </Badge>
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <span 
              className="flex items-center justify-center h-6 w-6 rounded-full text-xs text-white"
              style={{ backgroundColor: getCategoryColor(category) }}
            >
              {id}
            </span>
            <span className="text-rig-primary">{nameArabic}</span>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-rig-secondary line-clamp-3">{descriptionArabic}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-end">
        <Button 
          variant="ghost"
          size="sm"
          className="gap-1 group-hover:text-rig-accent group-hover:bg-rig-accent/5"
        >
          عرض التفاصيل
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};
