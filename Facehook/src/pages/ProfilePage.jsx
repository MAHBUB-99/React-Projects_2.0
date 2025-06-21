import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { api } = useAxios();
  const { auth } = useAuth();

  useEffect(() => {
    setLoading(true);
    const fetchProfile = async () => {
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`
        );
        setUser(response.data.user);
        setPosts(response.data.posts);
      } catch (error) {
        setError(error);
        console.error("Error fetching profile data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  if (loading) return <div>Fetching your profile data...</div>;

  return (
    <div>
      <p>
        Welcome {user?.firstName} {user?.lastName}{" "}
      </p>
      <p>You have currently {posts?.length} Posts</p>
    </div>
  );
}
