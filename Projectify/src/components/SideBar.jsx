import lws from "../assets/lws-logo-en.svg";
import Calender from "../svgIcons/Calender";
import Contact from "../svgIcons/Contact";
import Dashboard from "../svgIcons/DashBoard";
import Kanban from "../svgIcons/Kanban";
import Message from "../svgIcons/Message";
import Projects from "../svgIcons/Projects";
import Settings from "../svgIcons/Settings";
export default function SideBar() {
  return (
    <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
      <div className="mb-8 flex items-center">
        <div className="flex items-center justify-center rounded-full text-xl font-bold">
          <img src={lws} className="mx-auto h-10 text-center" />
        </div>
      </div>
      <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
        + New Project
      </button>
      <nav>
        <ul className="space-y-4">
          <li>
            <a href="#" className="flex items-center">
              <Dashboard />
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Projects />
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Contact />
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Kanban />
              Kanban
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Calender />
              Calendar
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Message />
              Messages
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center">
              <Settings />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
