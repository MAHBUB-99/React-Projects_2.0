import { useEffect } from "react";
import { actions } from "../actions";
import MyPosts from "../components/profile/MyPosts";
import ProfileInfo from "../components/profile/ProfileInfo";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import useProfile from "../hooks/useProfile";

export default function ProfilePage() {
  const { state, dispatch } = useProfile();
  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    dispatch({ type: actions.profile.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        if (response.status === 200) {
          const { user, posts } = response.data;
          dispatch({
            type: actions.profile.DATA_FETCHED,
            data: { user, posts },
          });
        }
      } catch (error) {
        dispatch({
          type: actions.profile.DATA_FETCH_ERROR,
          error: error.message,
        });
        console.error("Error fetching profile data:", error);
      }
    };
    fetchProfile();
  }, []);

  if (state?.loading) return <div>Fetching your profile data...</div>;

  return (
    <>
      <ProfileInfo />
      <MyPosts />
    </>
  );
}
