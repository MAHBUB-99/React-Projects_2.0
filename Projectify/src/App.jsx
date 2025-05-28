import MainContents from "./components/MainContents";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <body className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <SideBar />
        <MainContents />
      </div>
    </body>
  );
}



