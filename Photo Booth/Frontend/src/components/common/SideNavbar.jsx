import { Link } from "react-router-dom";
import logo2 from "../../assets/logo-2.svg";
import avatar from "../../assets/users/user-1.png";
import { useAuth } from "../../hooks/useAuth";
import "../../index.css";
import Logout from "../auth/Logout";

export default function SideNavbar() {
  const { auth } = useAuth();
  return (
    <aside className="hidden floating-navbar bg-white  border px-6 py-2 border-gray-200 md:flex flex-col">
      <Link to="/" className="flex gap-2 items-center font-medium py-4 mb-8">
        <img src={logo2} alt="PhotoBooth" className="h-6 object-contain" />
        <h2 className="text-lg">Photo Booth</h2>
      </Link>

      <ul className="space-y-8 flex-1">
        <li>
          <Link to="/" className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-zinc-800"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-sm text-zinc-800">Home</span>
          </Link>
        </li>

        <li>
          <Link
            to="./notifications"
            className="flex flex-row items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-zinc-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="text-xs">Notifications</span>
          </Link>
        </li>
        <li>
          <Link to="./create-post" className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-zinc-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinecap="round"
                strokeWidth="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-xs">Create</span>
          </Link>
        </li>

        <li>
          <Link to="/profile" className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinecap="round"
              className="lucide lucide-user-icon lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="text-xs">Profile</span>
          </Link>
        </li>
      </ul>

      <div className="flex  justify-between">
        <Link to="./profile">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-300">
              <img
                src={avatar}
                alt="User avatar"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-2">
              <span className="font-semibold text-sm">{auth?.user?.name}</span>
              <p className="text-xs text-gray-500  leading-0">
                {auth?.user?.email}
              </p>
            </div>
          </div>
        </Link>
        <Logout />
      </div>
    </aside>
  );
}
