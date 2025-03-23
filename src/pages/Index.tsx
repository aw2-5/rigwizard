
import { useNavigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ChevronRight, Drill, List, Search, Shield, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { getCategoryColor, groupComponentsByCategory } from "@/data/rigComponents";

// Arabic translation mapping for categories
const categoryEnglishToArabic: Record<string, string> = {
  'Hoisting': 'رفع',
  'Drilling': 'حفر',
  'Power': 'طاقة',
  'Fluid': 'سوائل',
  'Safety': 'أمان',
  'Housing': 'إسكان',
  'Storage': 'تخزين',
  'Other': 'أخرى'
};

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
            <img 
              src="/lovable-uploads/8af4af26-5e68-48c8-afe2-9f28fde5c073.png" 
              alt="حفارة نفط" 
              className="h-[300px] mb-6 animate-float" 
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-rig-primary">
            مرحبًا بك في أدوات الحفر
          </h1>
          <p className="text-lg md:text-xl text-rig-secondary max-w-2xl mx-auto mb-8 text-balance">
            استكشف مكونات حفارة النفط من خلال هذه الأداة التفاعلية للتصور.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button
              size="lg"
              className="gap-2 bg-rig-primary hover:bg-rig-primary/90 text-white animate-slide-up"
              onClick={() => navigate("/rig-diagram")}
              style={{ animationDelay: "100ms" }}
            >
              <Drill className="h-5 w-5" />
              استكشاف مخطط الحفارة
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-rig-muted rounded-3xl my-16">
          <div className="container max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-rig-primary">المميزات</h2>
              <p className="text-lg text-rig-secondary max-w-2xl mx-auto">
                تساعدك أدوات الحفر على فهم الهيكل المعقد والعلاقات بين المكونات المختلفة لحفارة النفط.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "مخطط تفاعلي",
                  description: "استكشف مكونات الحفارة مع مخطط SVG تفاعلي يسلط الضوء على المكونات ذات الصلة.",
                  icon: <Drill className="h-10 w-10 text-rig-accent" />,
                  delay: "0ms"
                },
                {
                  title: "قاعدة بيانات شاملة",
                  description: "الوصول إلى معلومات مفصلة حول جميع المكونات الـ 61 وعلاقاتها.",
                  icon: <List className="h-10 w-10 text-rig-accent" />,
                  delay: "150ms"
                },
                {
                  title: "بحث المكونات",
                  description: "العثور بسرعة على مكونات محددة باستخدام وظيفة البحث.",
                  icon: <Search className="h-10 w-10 text-rig-accent" />,
                  delay: "300ms"
                },
                {
                  title: "المكونات ذات الصلة",
                  description: "معرفة المكونات المرتبطة ببعضها البعض وكيفية تفاعلها.",
                  icon: <Wrench className="h-10 w-10 text-rig-accent" />,
                  delay: "450ms"
                },
                {
                  title: "تصنيف الفئات",
                  description: "يتم تنظيم المكونات حسب الفئات لفهم أسهل.",
                  icon: <Shield className="h-10 w-10 text-rig-accent" />,
                  delay: "600ms"
                },
                {
                  title: "تصميم متجاوب",
                  description: "الوصول إلى أدوات الحفر على أي جهاز مع واجهة متجاوبة.",
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
              <h2 className="text-3xl font-bold mb-4 text-rig-primary">فئات المكونات</h2>
              <p className="text-lg text-rig-secondary max-w-2xl mx-auto">
                تتكون حفارات النفط من مكونات متخصصة مختلفة منظمة حسب الوظيفة.
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
                    <h3 className="text-lg font-semibold text-rig-primary">{categoryEnglishToArabic[category] || category}</h3>
                  </div>
                  <p className="mb-3 text-sm text-rig-secondary">
                    {components.length} عنصر
                  </p>
                  <ul className="text-sm space-y-1 text-rig-secondary">
                    {components.slice(0, 3).map(component => (
                      <li key={component.id} className="truncate">
                        <span className="font-medium text-rig-primary">{component.id}.</span> {component.name}
                      </li>
                    ))}
                    {components.length > 3 && (
                      <li className="text-rig-accent font-medium text-xs mt-2 cursor-pointer" onClick={() => navigate("/rig-diagram")}>
                        + {components.length - 3} عنصر آخر
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
                عرض جميع المكونات
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-rig-primary to-rig-accent rounded-3xl my-16 py-16 text-white">
          <div className="container max-w-6xl text-center">
            <h2 className="text-3xl font-bold mb-4">جاهز للاستكشاف؟</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              انغمس في مخطط الحفارة التفاعلي واكتشف كيف تعمل جميع المكونات معًا.
            </p>
            <Button
              size="lg"
              className="bg-white text-rig-accent hover:bg-white/90 gap-2"
              onClick={() => navigate("/rig-diagram")}
            >
              استكشف الآن
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
