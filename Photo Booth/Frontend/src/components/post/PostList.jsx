import { usePosts } from "../../hooks/usePosts";
import PostCard from "./PostCard";

export default function PostList() {
  const { posts, loading, error, hasMore, lastPostElementRef } = usePosts();

  if (loading && posts.length === 0) {
    return <div className="text-center py-10">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-600">Error in fetching posts...: {error}</div>;
  }

  return (
    <div className="max-w-6xl mx-auto w-full py-10">
      <div>
        {posts.length > 0 ? (
          posts.map((post, index) => {
            if (posts.length === index + 1) {
              return (
                <div ref={lastPostElementRef} key={post._id || post.id}>
                  <PostCard post={post} />
                </div>
              );
            }
            return <PostCard key={post._id || post.id} post={post} />;
          })
        ) : (
          !loading && !hasMore && <p className="text-center text-gray-600">No posts to display.</p>
        )}
        {loading && posts.length > 0 && (
          <p className="text-center text-gray-600 mt-4">Loading more posts...</p>
        )}
        {!hasMore && !loading && posts.length > 0 && (
          <p className="text-center text-gray-600 mt-4">You've reached the end of the posts!</p>
        )}
      </div>
    </div>
  );
}