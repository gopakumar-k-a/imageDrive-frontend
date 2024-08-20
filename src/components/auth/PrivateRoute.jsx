import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (!user) {
      navigate("/login"); 
    }
  }, [user, navigate]);
  return user ? children : null;
}

export default PrivateRoute;
