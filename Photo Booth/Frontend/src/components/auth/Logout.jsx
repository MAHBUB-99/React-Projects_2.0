import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import LogoutIcon from "../../svgIcons/LogoutIcon";

const Logout = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };

  return (
    <button title="logout" className="cursor-pointer" onClick={handleLogout}>
      <LogoutIcon/>
    </button>
  );
};

export default Logout;
