import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // This is handled by the Home component route
    // Index page is not needed as we route directly to home
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-primary">Loading Vijay Prints...</h1>
      </div>
    </div>
  );
};
