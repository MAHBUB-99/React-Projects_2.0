import { Link } from "react-router-dom";

export default function PostHeader({ post }) {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/${post.user.avatar}`;
  return (
    <div className="flex items-center p-3">
      <Link
        to="./profile"
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs"
      >
        <img src={url} className="w-full h-full object-cover" />
      </Link>
      <div className="ml-2">
        <Link to="./profile" className="font-semibold text-sm">
          {post.user.name}
        </Link>
        <span className="text-gray-500 text-xs"> • 6m</span>
      </div>
    </div>
  );
}
