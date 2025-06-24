import { useEffect } from "react";
import { actions } from "../actions";
import MyPosts from "../components/profile/MyPosts";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import { useAxios } from "../hooks/useAxios";
import { useProfile } from "../hooks/useProfile";
import "../index.css";

export default function Profile() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/posts/user/${
            auth?.user?._id
          }`
        );
        if (response.status === 200) {
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: response.data,
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }

  return (
    <div className="main-container">
      {/* <!-- Profile Header --> */}
      <ProfileInfo />
      <section>
        <h3 className="font-semibold text-lg mb-4">Posts</h3>
        {/* <!-- Photo Grid --> */}
        <MyPosts />
      </section>
    </div>
  );
}
