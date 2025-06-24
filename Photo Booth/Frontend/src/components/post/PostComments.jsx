import { Link } from "react-router-dom";
import SendHorizontalIcon from "../../svgIcons/SendHorizontalIcon";

export default function PostComments({ post }) {
  return (
    <>
      <div className="px-3 mt-1">
        <Link to="/post-details" className="text-gray-500 text-sm">
          View all {post.comments.length} comments
        </Link>
      </div>

      <div className="px-3 mt-2 flex justify-between items-center h-6">
        <input
          type="text"
          placeholder="Add a comment..."
          className="text-sm w-full outline-none "
        />
        <SendHorizontalIcon />
      </div>
    </>
  );
}
