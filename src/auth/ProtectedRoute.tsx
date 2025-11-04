import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Auth from "./authcontext";
import { useEffect, useState} from "react";

interface ProtectedRouteProps {
  timeout?: number;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ timeout = 10000 }) => {
  const { useAuth } = Auth;
  const auth = useAuth();
  const navigate = useNavigate();
  const [initialized, setInitialized] = useState(false);
  
  
  useEffect(() => {
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      console.log(`⏳ เริ่มจับเวลา ${timeout / 1000} วินาที เพื่อ logout อัตโนมัติ...`);
      const timer = setTimeout(() => {
        console.log("❌ หมดเวลา! ออกจากระบบอัตโนมัติ");
        auth.logout();
       window.dispatchEvent(new Event("auth-change")); 
        navigate("/login", { replace: true });
    }, timeout);

      return () => clearTimeout(timer);
    }
  }, [auth.isAuthenticated, timeout]);

  if (!initialized) return null;

  if (!auth.isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
};

export default ProtectedRoute;


