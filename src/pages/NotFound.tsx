
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Drill } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout className="pt-16">
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <div className="text-center max-w-md mx-auto animate-fade-in">
          <Drill className="h-20 w-20 text-rig-accent mx-auto mb-6 animate-float" />
          <h1 className="text-5xl font-bold mb-4 text-rig-primary">404</h1>
          <p className="text-xl text-rig-secondary mb-8">
            Oops! This page seems to have drilled too deep and got lost.
          </p>
          <Button
            onClick={() => navigate("/")}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Return to Home
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
