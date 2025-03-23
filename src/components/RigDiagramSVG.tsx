
import { useState, useEffect, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { rigComponents, getCategoryColor } from "@/data/rigComponents";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { ZoomIn, ZoomOut, RotateCcw, Search } from "lucide-react";

const ComponentBadge = memo(({ 
  id, 
  name, 
  x, 
  y, 
  isHighlighted, 
  isPrimaryHighlighted, 
  category,
  onMouseEnter,
  onMouseLeave,
  onClick
}: { 
  id: number;
  name: string;
  x: number;
  y: number;
  isHighlighted: boolean;
  isPrimaryHighlighted: boolean;
  category: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClick: () => void;
}) => {
  // Use text width to determine badge width
  const nameLength = name.length;
  const width = Math.max(40, nameLength * 10); // Base width on text length
  
  const textRef = useRef<SVGTextElement>(null);
  const [textWidth, setTextWidth] = useState(width);
  
  useEffect(() => {
    if (textRef.current) {
      const box = textRef.current.getBBox();
      setTextWidth(box.width + 30); // Add padding
    }
  }, [name]);
  
  return (
    <g
      className={cn(
        "cursor-pointer transition-all duration-300 ease-out transform",
        isHighlighted ? "opacity-100" : "opacity-80 hover:opacity-90",
        isPrimaryHighlighted ? "scale-110" : "hover:scale-105"
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <rect
        x={x - textWidth / 2}
        y={y - 15}
        width={textWidth}
        height={30}
        rx={15}
        fill={getCategoryColor(category)}
        className={cn(
          "shadow-sm transition-all duration-300",
          isHighlighted ? "fill-opacity-100" : "fill-opacity-80",
          isPrimaryHighlighted ? "stroke-[3px] stroke-white shadow-lg" : ""
        )}
      />
      <text
        ref={textRef}
        x={x}
        y={y + 5}
        textAnchor="middle"
        fill="white"
        fontSize={12}
        fontWeight={isPrimaryHighlighted ? "600" : "500"}
        className="select-none pointer-events-none text-shadow"
      >
        {id}. {name}
      </text>
    </g>
  );
});

ComponentBadge.displayName = "ComponentBadge";

const ConnectorLine = memo(({ 
  startX, 
  startY, 
  endX, 
  endY, 
  isHighlighted 
}: { 
  startX: number; 
  startY: number; 
  endX: number; 
  endY: number;
  isHighlighted: boolean;
}) => {
  // Calculate bezier curve control points
  const dx = Math.abs(endX - startX);
  const dy = Math.abs(endY - startY);
  const curvature = Math.min(dx, dy) * 0.5;
  
  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  
  const controlX1 = startX + (midX - startX) / 2;
  const controlY1 = startY;
  const controlX2 = endX - (endX - midX) / 2;
  const controlY2 = endY;
  
  return (
    <path
      d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
      fill="none"
      stroke={isHighlighted ? "#0EA5E9" : "#CBD5E1"}
      strokeWidth={isHighlighted ? 2 : 1}
      strokeDasharray={isHighlighted ? "none" : "5,5"}
      className={cn(
        "transition-all duration-300",
        isHighlighted ? "opacity-80" : "opacity-40"
      )}
    />
  );
});

ConnectorLine.displayName = "ConnectorLine";

interface RigDiagramSVGProps {
  width?: number;
  height?: number;
  initialScale?: number;
  highlightedComponentId?: number | null;
  onComponentClick?: (id: number) => void;
}

export const RigDiagramSVG = ({
  width = 1200,
  height = 800,
  initialScale = 1,
  highlightedComponentId = null,
  onComponentClick
}: RigDiagramSVGProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [scale, setScale] = useState(initialScale);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [hoveredComponent, setHoveredComponent] = useState<number | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<number[]>([]);
  
  // Handle zooming
  const handleZoom = (direction: 'in' | 'out') => {
    setScale(prevScale => {
      const newScale = direction === 'in' 
        ? Math.min(prevScale * 1.2, 3) 
        : Math.max(prevScale / 1.2, 0.5);
      
      return newScale;
    });
  };
  
  // Handle resetting view
  const handleResetView = () => {
    setScale(initialScale);
    setPan({ x: 0, y: 0 });
    toast({
      title: "View Reset",
      description: "Diagram view has been reset to default"
    });
  };
  
  // Handle clicking on a component
  const handleComponentClick = (id: number) => {
    if (onComponentClick) {
      onComponentClick(id);
    } else {
      navigate(`/component/${id}`);
    }
  };
  
  // Handle mouse events for dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 0) { // Left mouse button
      setDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (dragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setPan(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };
  
  // Handle search
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = rigComponents
      .filter(component => 
        component.name.toLowerCase().includes(query) || 
        component.id.toString() === query
      )
      .map(component => component.id);
    
    setSearchResults(results);
  }, [searchQuery]);
  
  // Create connection lines between related components
  const renderConnectionLines = () => {
    const connections: JSX.Element[] = [];
    
    rigComponents.forEach(component => {
      const { id, position, related } = component;
      
      // Determine if this component or its connections should be highlighted
      const isComponentHighlighted = 
        highlightedComponentId === id || 
        hoveredComponent === id;
      
      // For each related component, draw a line
      related.forEach(relatedId => {
        // Only draw the connection once (from smaller ID to larger ID)
        if (id < relatedId) {
          const relatedComponent = rigComponents.find(c => c.id === relatedId);
          
          if (relatedComponent) {
            const isRelatedHighlighted = 
              (highlightedComponentId === id && relatedComponent.related.includes(highlightedComponentId)) ||
              (highlightedComponentId === relatedId && component.related.includes(highlightedComponentId)) ||
              (hoveredComponent === id && related.includes(relatedId)) ||
              (hoveredComponent === relatedId && relatedComponent.related.includes(id));
            
            connections.push(
              <ConnectorLine
                key={`connection-${id}-${relatedId}`}
                startX={position.x * 10}
                startY={position.y * 7}
                endX={relatedComponent.position.x * 10}
                endY={relatedComponent.position.y * 7}
                isHighlighted={isComponentHighlighted || isRelatedHighlighted}
              />
            );
          }
        }
      });
    });
    
    return connections;
  };

  // Render the SVG components
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-rig-border bg-white">
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        <Button
          variant="secondary"
          size="icon"
          onClick={() => handleZoom('in')}
          className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={() => handleZoom('out')}
          className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          onClick={handleResetView}
          className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
      
      <div className="absolute top-4 right-4 z-10 w-64">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2 bg-white/80 backdrop-blur-sm border border-rig-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rig-accent focus:border-transparent"
          />
          
          {searchResults.length > 0 && (
            <div className="absolute mt-1 w-full bg-white border border-rig-border rounded-md shadow-lg max-h-60 overflow-auto z-20">
              {searchResults.map(id => {
                const component = rigComponents.find(c => c.id === id);
                if (!component) return null;
                
                return (
                  <div
                    key={`search-${id}`}
                    className="px-4 py-2 hover:bg-rig-muted cursor-pointer transition-colors"
                    onClick={() => {
                      handleComponentClick(id);
                      setSearchQuery("");
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{component.id}.</span>
                      <span>{component.name}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={cn(
          "transition-all duration-300 ease-out",
          dragging ? "cursor-grabbing" : "cursor-grab"
        )}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ touchAction: "none" }}
      >
        <defs>
          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.1" />
          </filter>
          <style>
            {`
              .text-shadow {
                text-shadow: 0px 1px 2px rgba(0,0,0,0.2);
              }
            `}
          </style>
        </defs>
        <g 
          transform={`translate(${pan.x}, ${pan.y}) scale(${scale})`}
          className="transition-transform duration-300 ease-out"
        >
          {/* Background grid */}
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path 
              d="M 50 0 L 0 0 0 50" 
              fill="none" 
              stroke="#f3f4f6" 
              strokeWidth="1"
            />
          </pattern>
          <rect width={width} height={height} fill="url(#grid)" opacity="0.6" />
          
          {/* Connection lines */}
          {renderConnectionLines()}
          
          {/* Component badges */}
          {rigComponents.map(component => {
            const isHighlighted = 
              searchResults.includes(component.id) ||
              highlightedComponentId === component.id || 
              hoveredComponent === component.id ||
              (highlightedComponentId !== null && 
                rigComponents.find(c => c.id === highlightedComponentId)?.related.includes(component.id)) ||
              (hoveredComponent !== null && 
                rigComponents.find(c => c.id === hoveredComponent)?.related.includes(component.id));
                
            const isPrimaryHighlighted = 
              highlightedComponentId === component.id || 
              hoveredComponent === component.id;
            
            return (
              <ComponentBadge
                key={`component-${component.id}`}
                id={component.id}
                name={component.name}
                x={component.position.x * 10}
                y={component.position.y * 7}
                isHighlighted={isHighlighted}
                isPrimaryHighlighted={isPrimaryHighlighted}
                category={component.category}
                onMouseEnter={() => setHoveredComponent(component.id)}
                onMouseLeave={() => setHoveredComponent(null)}
                onClick={() => handleComponentClick(component.id)}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
};
