import Header from "../components/common/Header";
import { useAuth } from "../hooks/useAuth";
import { Link } from "react-router-dom";
export default function HomePage() {
  const auth = useAuth();
  // console.log(auth);
  return (
    <>
      {/* <Header /> */}
      <p>Home page</p>
      <Link to="/me">Go to <u>Profile Page</u></Link>
    </>
  );
}
