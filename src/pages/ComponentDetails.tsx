
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { RigDiagramSVG } from "@/components/RigDiagramSVG";
import { ComponentRelationships } from "@/components/ComponentRelationships";
import { getComponentById, getCategoryColor } from "@/data/rigComponents";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Drill, Network } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const ComponentDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const componentId = parseInt(id || "0");
  const component = getComponentById(componentId);
  
  useEffect(() => {
    if (!component) {
      toast({
        title: "لم يتم العثور على المكون",
        description: `لا يوجد مكون بالرقم ${componentId}.`,
        variant: "destructive"
      });
      navigate("/rig-diagram");
    }
  }, [component, componentId, navigate]);
  
  if (!component) {
    return null;
  }
  
  return (
    <Layout className="pt-16 container max-w-7xl">
      <div className="animate-fade-in py-4 md:py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate("/rig-diagram")}
          className="mb-6 gap-2 hover:bg-rig-accent/5 hover:text-rig-accent"
        >
          <ArrowLeft className="h-4 w-4" />
          العودة إلى مخطط الحفارة
        </Button>
        
        <div className="flex flex-col gap-6">
          <div className="flex items-start justify-between flex-col md:flex-row gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold"
                  style={{ backgroundColor: getCategoryColor(component.category) }}
                >
                  {component.id}
                </div>
                <Badge 
                  className="font-medium text-white"
                  style={{ backgroundColor: getCategoryColor(component.category) }}
                >
                  {component.categoryArabic}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold mb-4 text-rig-primary">{component.nameArabic}</h1>
              <p className="text-rig-secondary text-lg max-w-3xl mb-6">
                {component.descriptionArabic}
              </p>
            </div>
          </div>
          
          <Tabs defaultValue="diagram" className="w-full">
            <TabsList className="grid w-[400px] grid-cols-2">
              <TabsTrigger value="diagram" className="text-sm">
                <Drill className="h-4 w-4 mr-2" />
                المكون في المخطط
              </TabsTrigger>
              <TabsTrigger value="related" className="text-sm">
                <Network className="h-4 w-4 mr-2" />
                المكونات ذات الصلة
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="diagram" className="mt-6">
              <Card className="border border-rig-border">
                <CardContent className="p-0">
                  <RigDiagramSVG 
                    width={1200} 
                    height={700} 
                    initialScale={0.8}
                    highlightedComponentId={component.id}
                    onComponentClick={(id) => navigate(`/component/${id}`)}
                  />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="related" className="mt-6">
              <Card className="border border-rig-border">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4 text-rig-primary flex items-center gap-2">
                    <Network className="h-5 w-5 text-rig-accent" />
                    المكونات ذات الصلة
                  </h2>
                  <p className="text-rig-secondary mb-6">
                    المكونات التالية ترتبط مباشرة بـ {component.nameArabic}:
                  </p>
                  <ComponentRelationships component={component} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default ComponentDetails;
