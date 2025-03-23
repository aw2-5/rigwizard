
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { RigDiagramSVG } from "@/components/RigDiagramSVG";
import { CategoryLegend } from "@/components/CategoryLegend";
import { RigComponentCard } from "@/components/RigComponentCard";
import { rigComponents } from "@/data/rigComponents";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, Search, Drill } from "lucide-react";

const RigDiagram = () => {
  const navigate = useNavigate();
  const [selectedComponentId, setSelectedComponentId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("diagram");
  
  // Get the selected component if any
  const selectedComponent = selectedComponentId 
    ? rigComponents.find(component => component.id === selectedComponentId) 
    : null;
  
  // Filter components based on search query
  const filteredComponents = searchQuery
    ? rigComponents.filter(component => 
        component.nameArabic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.id.toString() === searchQuery
      )
    : rigComponents;
  
  const handleComponentClick = (id: number) => {
    setSelectedComponentId(id);
    setActiveTab("list");
  };
  
  return (
    <Layout fullWidth className="pt-16 container max-w-7xl">
      <div className="animate-fade-in py-4 md:py-8">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2 text-rig-primary flex items-center gap-2">
                <Drill className="h-6 w-6 text-rig-accent" />
                مكونات حفارة النفط
              </h1>
              <p className="text-rig-secondary text-lg">
                استكشف وتعلم عن جميع مكونات حفارة النفط الـ 61
              </p>
            </div>
          </div>
          
          <Tabs 
            defaultValue="diagram" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <div className="flex items-center justify-between mb-6">
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger value="diagram" className="text-sm">
                  <Drill className="h-4 w-4 mr-2" />
                  المخطط التفاعلي
                </TabsTrigger>
                <TabsTrigger value="list" className="text-sm">
                  <Info className="h-4 w-4 mr-2" />
                  قائمة المكونات
                </TabsTrigger>
              </TabsList>
              
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="البحث عن المكونات..."
                  className="w-full pl-10 pr-4 py-2 bg-white border border-rig-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rig-accent focus:border-transparent"
                />
              </div>
            </div>
            
            <TabsContent value="diagram" className="mt-0">
              <div className="bg-white rounded-xl border border-rig-border overflow-hidden shadow-sm">
                <RigDiagramSVG 
                  width={1200} 
                  height={800} 
                  initialScale={0.8}
                  highlightedComponentId={selectedComponentId}
                  onComponentClick={(id) => navigate(`/component/${id}`)}
                />
              </div>
              
              <div className="mt-6">
                <CategoryLegend />
              </div>
              
              {selectedComponent && (
                <div className="mt-8 animate-scale">
                  <h2 className="text-xl font-semibold mb-3 text-rig-primary">المكون المحدد</h2>
                  <RigComponentCard 
                    component={selectedComponent} 
                    isHighlighted={true}
                  />
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="list" className="mt-0">
              <div className={cn(
                "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
                searchQuery && filteredComponents.length === 0 ? "hidden" : "block"
              )}>
                {filteredComponents.map(component => (
                  <RigComponentCard 
                    key={component.id}
                    component={component}
                    isHighlighted={component.id === selectedComponentId}
                  />
                ))}
              </div>
              
              {searchQuery && filteredComponents.length === 0 && (
                <div className="bg-white border border-rig-border rounded-lg p-8 text-center">
                  <Search className="h-10 w-10 mx-auto mb-4 text-rig-secondary opacity-50" />
                  <h3 className="text-lg font-medium mb-2 text-rig-primary">لا توجد مكونات</h3>
                  <p className="text-rig-secondary mb-6">
                    لا توجد مكونات تطابق مصطلح البحث: <strong>"{searchQuery}"</strong>
                  </p>
                  <Button onClick={() => setSearchQuery("")}>
                    مسح البحث
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default RigDiagram;
