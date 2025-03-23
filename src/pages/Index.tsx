
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Drill, List, Search, Shield, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCategoryColor, groupComponentsByCategory } from "@/data/rigComponents";

const Index = () => {
  const navigate = useNavigate();
  const categoryGroups = groupComponentsByCategory();
  
  return (
    <Layout className="container max-w-6xl">
      <div className="animate-fade-in pt-16">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-16 md:py-24">
          <div className="relative">
            <div className="absolute inset-0 -z-10 opacity-10 blur-3xl rounded-full bg-rig-accent" />
            <Drill className="h-20 w-20 text-rig-accent mb-6 animate-float" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-rig-primary">
            Welcome to RigWizard
          </h1>
          <p className="text-lg md:text-xl text-rig-secondary max-w-2xl mx-auto mb-8 text-balance">
            Explore the components of an oil drilling rig with this interactive visualization tool.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="gap-2 bg-rig-primary hover:bg-rig-primary/90 text-white animate-slide-up"
              onClick={() => navigate("/rig-diagram")}
              style={{ animationDelay: "100ms" }}
            >
              <Drill className="h-5 w-5" />
              Explore Rig Diagram
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-rig-muted rounded-3xl my-16">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-rig-primary">Features</h2>
              <p className="text-lg text-rig-secondary max-w-2xl mx-auto">
                RigWizard helps you understand the complex structure and relationships between different components of a drilling rig.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Interactive Diagram",
                  description: "Explore the rig components with an interactive SVG diagram that highlights related components.",
                  icon: <Drill className="h-10 w-10 text-rig-accent" />,
                  delay: "0ms"
                },
                {
                  title: "Comprehensive Database",
                  description: "Access detailed information about all 61 components and their relationships.",
                  icon: <List className="h-10 w-10 text-rig-accent" />,
                  delay: "150ms"
                },
                {
                  title: "Component Search",
                  description: "Quickly find specific components using the search functionality.",
                  icon: <Search className="h-10 w-10 text-rig-accent" />,
                  delay: "300ms"
                },
                {
                  title: "Related Components",
                  description: "See which components are related to each other and how they interact.",
                  icon: <Wrench className="h-10 w-10 text-rig-accent" />,
                  delay: "450ms"
                },
                {
                  title: "Category Classification",
                  description: "Components are organized by categories for easier understanding.",
                  icon: <Shield className="h-10 w-10 text-rig-accent" />,
                  delay: "600ms"
                },
                {
                  title: "Responsive Design",
                  description: "Access RigWizard on any device with our responsive interface.",
                  icon: <Drill className="h-10 w-10 text-rig-accent" />,
                  delay: "750ms"
                }
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-rig-border h-full flex flex-col items-center text-center animate-slide-up"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className="mb-4 p-3 rounded-full bg-rig-accent/10">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-rig-primary">{feature.title}</h3>
                  <p className="text-rig-secondary flex-grow">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Component Categories */}
        <section className="py-16">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-rig-primary">Component Categories</h2>
              <p className="text-lg text-rig-secondary max-w-2xl mx-auto">
                Drilling rigs consist of various specialized components organized by function.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(categoryGroups).map(([category, components], index) => (
                <div 
                  key={category}
                  className="glass-card rounded-xl p-5 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-3 flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: getCategoryColor(category) }}
                    />
                    <h3 className="text-lg font-semibold text-rig-primary">{category}</h3>
                  </div>
                  <p className="mb-3 text-sm text-rig-secondary">
                    {components.length} component{components.length !== 1 ? 's' : ''}
                  </p>
                  <ul className="text-sm space-y-1 text-rig-secondary">
                    {components.slice(0, 3).map(component => (
                      <li key={component.id} className="truncate">
                        <span className="font-medium text-rig-primary">{component.id}.</span> {component.name}
                      </li>
                    ))}
                    {components.length > 3 && (
                      <li className="text-rig-accent font-medium text-xs mt-2 cursor-pointer" onClick={() => navigate("/rig-diagram")}>
                        + {components.length - 3} more components
                      </li>
                    )}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                onClick={() => navigate("/rig-diagram")}
              >
                View All Components
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-rig-primary to-rig-accent rounded-3xl my-16 py-16 text-white">
          <div className="container max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Dive into the interactive rig diagram and discover how all the components work together.
            </p>
            <Button
              size="lg"
              className="bg-white text-rig-accent hover:bg-white/90 gap-2"
              onClick={() => navigate("/rig-diagram")}
            >
              Explore Now
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
