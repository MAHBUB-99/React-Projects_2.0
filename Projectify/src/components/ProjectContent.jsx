import Plus from "../svgIcons/Plus";
import CatagoryContainer from "./CatagoryContainer";

export default function ProjectContent() {
  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Projectify</h2>
        <div className="flex space-x-2">
          <button className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white">
            <Plus />
            Add
          </button>
        </div>
      </div>
      <CatagoryContainer />
    </div>
  );
}
