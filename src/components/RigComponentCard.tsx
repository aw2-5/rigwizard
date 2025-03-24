
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight, Info } from "lucide-react";
import { RigComponent, getCategoryColor } from "@/data/rigComponents";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface RigComponentCardProps {
  component: RigComponent;
  isHighlighted?: boolean;
}

export const RigComponentCard = ({ component, isHighlighted = false }: RigComponentCardProps) => {
  const navigate = useNavigate();
  const { id, name, nameArabic, descriptionArabic, category, categoryArabic } = component;
  
  const handleClick = () => {
    navigate(`/component/${id}`);
  };
  
  return (
    <Card 
      className={cn(
        "group h-full transition-all duration-300 cursor-pointer overflow-hidden bg-gradient-to-br from-white to-gray-50 hover:shadow-md",
        isHighlighted 
          ? "border-rig-accent shadow-md ring-1 ring-rig-accent/20 scale-[1.01]" 
          : "border-rig-border hover:border-rig-accent/50"
      )}
      onClick={handleClick}
    >
      <CardHeader className="relative p-4 pb-3">
        <div className="flex items-center justify-between gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Badge 
                  className="absolute -top-3 -right-3 z-10 font-medium text-white shadow-sm"
                  style={{ backgroundColor: getCategoryColor(category) }}
                >
                  {categoryArabic}
                </Badge>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p className="text-xs">فئة المكون</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          
          <CardTitle className="text-lg font-medium flex items-center gap-2">
            <span 
              className="flex items-center justify-center h-6 w-6 rounded-full text-xs text-white"
              style={{ backgroundColor: getCategoryColor(category) }}
            >
              {id}
            </span>
            <div className="flex flex-col">
              <span className="text-rig-primary text-sm font-bold rtl:text-right">{name}</span>
              <span className="text-rig-secondary text-xs rtl:text-right">{nameArabic}</span>
            </div>
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-sm text-rig-secondary line-clamp-3 rtl:text-right">{descriptionArabic}</p>
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
