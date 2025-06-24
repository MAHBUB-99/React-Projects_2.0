import CommentsIcon from "../../svgIcons/CommentsIcon";
import HeartIcon from "../../svgIcons/HeartIcon";
import ShareIcon from "../../svgIcons/ShareIcon";

export default function PostActions() {
  return (
    <div className="flex justify-between p-3">
      <div className="flex space-x-4">
        <button className="like-button">
          <HeartIcon />
        </button>
        <button>
          <CommentsIcon />
        </button>
      </div>
      <button>
        <ShareIcon />
      </button>
    </div>
  );
}
