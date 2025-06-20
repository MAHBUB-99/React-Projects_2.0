import { useNavigate } from "react-router-dom";
import logout from "../../assets/icons/logout.svg";
import { useAuth } from "../../hooks/useAuth";

export default function Logout() {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuth({});
    navigate("/login");
  };
  return (
    <button className="icon-btn" onClick={handleLogout}>
      <img src={logout} alt="Logout" />
    </button>
  );
}
