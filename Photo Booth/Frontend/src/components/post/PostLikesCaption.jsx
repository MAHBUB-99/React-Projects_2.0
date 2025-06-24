import user_1 from "../../assets/users/user-1.png";
import {Link} from 'react-router-dom'

export default function PostLikesCaption({ post }) {
  const displayLikes = post.likes ? post.likes.slice(0, 3) : [];

  return (
    <>
      <div className="px-3">
        <div className="flex items-center">
          <div className="h-6 flex -space-x-2">
            {displayLikes.length > 0 ? (
              displayLikes.map((likeUser) => (
                <img
                  key={likeUser._id} // Use a unique key for each mapped item
                  src={
                    likeUser.avatar
                      ? `${import.meta.env.VITE_SERVER_BASE_URL}/${
                          likeUser.avatar
                        }` // Assuming avatar path is relative to base URL
                      : user_1 // Fallback to a default image if no avatar
                  }
                  alt={`${likeUser.name}'s avatar`}
                  className="w-6 h-6 rounded-full object-cover"
                />
              ))
            ) : (
              <img
                src={user_1}
                alt="No likes yet"
                className="w-6 h-6 rounded-full object-cover"
              />
            )}
          </div>
          <p className="text-sm ml-2">
            <span className="font-semibold">{post.likes.length} likes</span>
          </p>
        </div>
      </div>
      <div className="px-3 mt-2">
        <p className="text-sm">
          {/* Display the username of the post owner. You'll need to pass the user's name as a prop or access it from `post.user.name` if available. */}
          <span className="font-semibold">
            {post.user?.name || "Reactive Accelerator"}
          </span>{" "}
          {/* Assuming 'Reactive Accelerator' is a placeholder or default */}{" "}
          {/* Add a space between username and caption */}
          <span className="caption-text">{post.caption}</span>
          {/* Only show "more" if the caption is long. You can adjust the character limit (e.g., 100) as needed. */}
          {post.caption && post.caption.length > 100 && (
            <>
              <span className="text-gray-500">... </span>
              <Link to="/post-details" className="text-gray-500 text-sm">more</Link>
            </>
          )}
        </p>
      </div>
    </>
  );
}
