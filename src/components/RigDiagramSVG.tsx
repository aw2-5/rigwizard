
import { useState, useEffect, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { rigComponents, getCategoryColor } from "@/data/rigComponents";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Search, 
  Maximize2, 
  Minimize2, 
  HelpCircle, 
  Info 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const ComponentBadge = memo(({ 
  id, 
  name, 
  nameArabic,
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
  nameArabic: string;
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
      {/* Background glow for highlighted items */}
      {isPrimaryHighlighted && (
        <circle
          cx={x}
          cy={y}
          r={textWidth / 1.5}
          fill={getCategoryColor(category)}
          className="opacity-20 animate-pulse"
        />
      )}
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
        y={y - 2}
        textAnchor="middle"
        fill="white"
        fontSize={11}
        fontWeight={isPrimaryHighlighted ? "600" : "500"}
        className="select-none pointer-events-none text-shadow"
      >
        {id}. {name}
      </text>
      <text
        x={x}
        y={y + 10}
        textAnchor="middle"
        fill="white"
        fontSize={9}
        className="select-none pointer-events-none text-shadow opacity-90"
      >
        {nameArabic}
      </text>
    </g>
  );
});

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
  const [fullscreen, setFullscreen] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  
  const handleZoom = (direction: 'in' | 'out') => {
    setScale(prevScale => {
      const newScale = direction === 'in' 
        ? Math.min(prevScale * 1.2, 3) 
        : Math.max(prevScale / 1.2, 0.5);
      
      return newScale;
    });
  };
  
  const handleResetView = () => {
    setScale(initialScale);
    setPan({ x: 0, y: 0 });
    toast({
      title: "تم إعادة ضبط العرض",
      description: "تم إعادة ضبط عرض المخطط إلى الإعدادات الافتراضية"
    });
  };
  
  const toggleFullscreen = () => {
    setFullscreen(!fullscreen);
    
    if (!fullscreen) {
      toast({
        title: "وضع ملء الشاشة",
        description: "تم تفعيل وضع العرض بملء الشاشة للمخطط التفاعلي"
      });
    }
  };
  
  const toggleHelp = () => {
    setShowHelp(!showHelp);
  };
  
  const handleComponentClick = (id: number) => {
    if (onComponentClick) {
      onComponentClick(id);
    } else {
      navigate(`/component/${id}`);
    }
  };
  
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
  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      return;
    }
    
    const query = searchQuery.toLowerCase();
    const results = rigComponents
      .filter(component => 
        component.name.toLowerCase().includes(query) || 
        component.nameArabic.toLowerCase().includes(query) ||
        component.id.toString() === query
      )
      .map(component => component.id);
    
    setSearchResults(results);
  }, [searchQuery]);
  
  const renderConnectionLines = () => {
    const connections: JSX.Element[] = [];
    
    rigComponents.forEach(component => {
      const { id, position, related } = component;
      
      const isComponentHighlighted = 
        highlightedComponentId === id || 
        hoveredComponent === id;
      
      related.forEach(relatedId => {
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

  return (
    <div className={cn(
      "relative w-full overflow-hidden rounded-xl border border-rig-border bg-gradient-to-br from-blue-50/50 via-white to-sky-50/50 transition-all duration-300",
      fullscreen ? "fixed inset-0 z-50 m-0 rounded-none border-0" : ""
    )}>
      {/* Toolbar */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-white/70 backdrop-blur-sm p-2 rounded-lg shadow-sm">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handleZoom('in')}
                className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>تكبير</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                onClick={() => handleZoom('out')}
                className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>تصغير</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleResetView}
                className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>إعادة ضبط العرض</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                onClick={toggleFullscreen}
                className="bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm"
              >
                {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{fullscreen ? 'إلغاء ملء الشاشة' : 'ملء الشاشة'}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                onClick={toggleHelp}
                className={cn(
                  "bg-white/80 backdrop-blur-sm hover:bg-white shadow-sm",
                  showHelp && "bg-rig-accent text-white hover:bg-rig-accent/90"
                )}
              >
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>تعليمات الاستخدام</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
      
      {/* Search Bar */}
      <div className="absolute top-4 right-4 z-10 w-64">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="البحث عن المكونات..."
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
                      <span 
                        className="w-5 h-5 flex items-center justify-center rounded-full text-white text-xs"
                        style={{ backgroundColor: getCategoryColor(component.category) }}
                      >
                        {component.id}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{component.name}</span>
                        <span className="text-xs text-rig-secondary">{component.nameArabic}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      
      {/* Help Instructions */}
      {showHelp && (
        <div className="absolute bottom-4 right-4 z-10 w-72 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-rig-border">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-medium text-rig-primary flex items-center gap-1">
              <Info className="h-4 w-4 text-rig-accent" />
              تعليمات استخدام المخطط
            </h3>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6" 
              onClick={toggleHelp}
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>
          <ul className="text-sm space-y-2 text-rig-secondary">
            <li className="flex items-start gap-2">
              <span className="text-rig-accent">•</span>
              <span>استخدم زر التكبير <ZoomIn className="inline h-3 w-3" /> والتصغير <ZoomOut className="inline h-3 w-3" /> للتحكم في حجم المخطط</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rig-accent">•</span>
              <span>اضغط واسحب لتحريك المخطط</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rig-accent">•</span>
              <span>انقر على أي مكون لعرض تفاصيله</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rig-accent">•</span>
              <span>مرر المؤشر فوق مكون لرؤية ارتباطاته</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rig-accent">•</span>
              <span>استخدم شريط البحث للعثور على مكون محدد</span>
            </li>
          </ul>
        </div>
      )}
      
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
          
          {/* Radial gradient background */}
          <radialGradient id="rig-bg-gradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#f3f8ff" />
          </radialGradient>
        </defs>
        
        {/* Modern background pattern */}
        <rect width={width} height={height} fill="url(#rig-bg-gradient)" />
        
        {/* Subtle grid pattern */}
        <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path 
            d="M 50 0 L 0 0 0 50" 
            fill="none" 
            stroke="#f3f4f6" 
            strokeWidth="1"
          />
        </pattern>
        <rect width={width} height={height} fill="url(#grid)" opacity="0.6" />
        
        <g 
          transform={`translate(${pan.x}, ${pan.y}) scale(${scale})`}
          className="transition-transform duration-300 ease-out"
        >
          {renderConnectionLines()}
          
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
                nameArabic={component.nameArabic}
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
      
      {/* Fullscreen exit button */}
      {fullscreen && (
        <Button
          variant="outline"
          size="sm"
          onClick={toggleFullscreen}
          className="absolute bottom-4 left-4 z-10 bg-white/80 backdrop-blur-sm border border-rig-border shadow-sm"
        >
          <Minimize2 className="h-4 w-4 mr-2" />
          إغلاق وضع ملء الشاشة
        </Button>
      )}
    </div>
  );
};
