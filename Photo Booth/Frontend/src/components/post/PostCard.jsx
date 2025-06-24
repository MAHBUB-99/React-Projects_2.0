import PostActions from "./PostActions";
import PostComments from "./PostComments";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";
import PostLikesCaption from "./PostLikesCaption";

export default function PostCard({ post }) {
  console.log(post);
  return (
    <article className="border-b pb-4 mb-4 max-w-[560px] mx-auto border rounded-md">
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostActions post={post} />
      <PostLikesCaption post={post} />
      <PostComments post={post} />
    </article>
  );
}
