import { useState } from "react";
import ThreeDot from "../../assets/icons/3dots.svg";
import DeleteIcon from "../../assets/icons/delete.svg";
import EditIcon from "../../assets/icons/edit.svg";
import TimeIcon from "../../assets/icons/time.svg";
import { useAvatar } from "../../hooks/useAvatar";
import { getDateDifference } from "../../utils";

export default function PostHeader({ post }) {
  const [showAction, setShowAction] = useState(false);
  const avatar = useAvatar(post).avatar;
  return (
    <header class="flex items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img
          class="max-w-10 max-h-10 rounded-full lg:max-h-[58px] lg:max-w-[58px]"
          src={avatar}
          alt="avatar"
        />
        <div>
          <h6 class="text-lg lg:text-xl">{post?.author?.name}</h6>
          <div class="flex items-center gap-1.5">
            <img src={TimeIcon} alt="time" />
            <span class="text-sm text-gray-400 lg:text-base">
              {getDateDifference(post?.createAt)} ago
            </span>
          </div>
        </div>
      </div>

      <div class="relative">
        <button onClick={() => setShowAction(!showAction)}>
          <img src={ThreeDot} alt="3dots of Action" />
        </button>

        {showAction && (
          <div class="action-modal-container">
            <button class="action-menu-item hover:text-lwsGreen">
              <img src={EditIcon} alt="Edit" />
              Edit
            </button>
            <button class="action-menu-item hover:text-red-500">
              <img src={DeleteIcon} alt="Delete" />
              Delete
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
