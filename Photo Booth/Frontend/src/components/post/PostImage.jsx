import { Link } from "react-router-dom";

export default function PostImage({ post }) {
  const url = `${import.meta.env.VITE_SERVER_BASE_URL}/${post?.image}`;
  
  return (
    <div className="relative">
      <Link to="./post-details">
        <img
          src={url}
          alt="Post image"
          className="w-full object-cover max-h-[1000px]"
        />
      </Link>
    </div>
  );
}
