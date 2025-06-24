import { Navigate, Outlet } from "react-router-dom";
import SideNavbar from "../components/common/SideNavbar";
import { useAuth } from "../hooks/useAuth";
import ProfileProvider from "../providers/ProfileProvider";

const PrivateRoutes = () => {
  const { auth } = useAuth();

  return (
    <>
      {auth.user ? (
        <>
          <ProfileProvider>
            <SideNavbar />
            <main className="mx-auto max-w-[1020px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
