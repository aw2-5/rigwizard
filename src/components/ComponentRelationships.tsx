
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RigComponent, getComponentById, getCategoryColor } from "@/data/rigComponents";

interface ComponentRelationshipsProps {
  component: RigComponent;
}

export const ComponentRelationships = ({ component }: ComponentRelationshipsProps) => {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  
  const relatedComponents = component.related.map(id => getComponentById(id)).filter(Boolean) as RigComponent[];
  
  if (relatedComponents.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-6">
          <p className="text-rig-secondary text-center">No related components found.</p>
        </CardContent>
      </Card>
    );
  }
  
  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {relatedComponents.map(relatedComponent => (
          <Button
            key={relatedComponent.id}
            variant="outline"
            className="h-auto p-3 justify-start text-left border hover:border-rig-accent/50 hover:shadow-sm transition-all"
            onMouseEnter={() => setHoveredId(relatedComponent.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => navigate(`/component/${relatedComponent.id}`)}
          >
            <div className="flex items-center gap-3 w-full">
              <div 
                className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white"
                style={{ backgroundColor: getCategoryColor(relatedComponent.category) }}
              >
                {relatedComponent.id}
              </div>
              <div className="flex flex-col items-start">
                <span className="font-medium text-rig-primary">{relatedComponent.name}</span>
                <span className="text-xs text-rig-secondary">{relatedComponent.category}</span>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};
