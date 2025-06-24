import { useProfile } from "../../hooks/useProfile";
import {Link} from 'react-router-dom'

export default function MyPosts() {
  const { state } = useProfile();

  return (
    <div className="grid grid-cols-3 gap-1">
      {state?.posts &&
        state?.posts.map((post) => {
          const url = `${import.meta.env.VITE_SERVER_BASE_URL}/${post?.image}`;
          console.log(url)
          return (
            <Link to="./post-details">
              <div className="relative">
                <img
                  src={url}
                  alt="Grid image"
                  className="w-full grid-image"
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
}
