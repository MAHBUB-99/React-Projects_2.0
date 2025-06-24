import { Route, Routes } from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/login/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Notifications from "./pages/Notifications.jsx";
import Profile from "./pages/Profile.jsx";
import Registration from "./pages/registration/Registration.jsx";
import PrivateRoutes from "./routes/PrivateRoutes.jsx";
import PostDetails from "./pages/PostDetails.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} exact />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/post-details" element={<PostDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
