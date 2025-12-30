import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
        <h1 className="mb-4 font-display text-6xl text-primary">404</h1>
        <p className="mb-6 text-xl text-muted-foreground font-heading">Oops! Page not found</p>
        <a href="/" className="text-primary hover:text-gold-light transition-colors underline font-body">
          Return to Home
        </a>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-8" />
      </div>
    </div>
  );
};

export default NotFound;
