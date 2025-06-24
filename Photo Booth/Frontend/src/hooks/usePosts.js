// hooks/usePosts.js
import { useCallback, useEffect, useReducer, useRef } from "react";
import { actions } from "../actions";
import { postsReducer } from "../reducers/PostReducer";
import { useAxios } from "./useAxios";

const initialState = {
  posts: [],
  page: 1,
  loading: false,
  error: "",
  hasMore: true,
};

export const usePosts = () => {
  const [state, dispatch] = useReducer(postsReducer, initialState);
  const { api } = useAxios();

  const observer = useRef();
  const lastPostElementRef = useCallback(
    (node) => {
      if (state.loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && state.hasMore) {
          dispatch({ type: actions.posts.INCREMENT_PAGE });
        }
      });
      if (node) observer.current.observe(node);
    },
    [state.loading, state.hasMore]
  );

  useEffect(() => {
    const fetchPosts = async () => {
      dispatch({ type: actions.posts.DATA_FETCHING });
      try {
        const response = await api.get(
          `${import.meta.env.VITE_SERVER_BASE_URL}/api/posts/?page=${
            state.page
          }&limit=10`
        );

        if (response.data && response.data.length > 0) {
          if (state.page === 1) {
            dispatch({ type: actions.posts.DATA_FETCHED, data: response.data });
          } else {
            dispatch({ type: actions.posts.DATA_APPEND, data: response.data });
          }

          if (response.data.length < 10) {
            dispatch({ type: actions.posts.NO_MORE_DATA });
          }
        } else {
          dispatch({ type: actions.posts.NO_MORE_DATA });
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        dispatch({
          type: actions.posts.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    if (state.hasMore && !state.loading) {
      fetchPosts();
    }
  }, [state.page, state.hasMore, api]);

  return {
    posts: state.posts,
    loading: state.loading,
    error: state.error,
    hasMore: state.hasMore,
    lastPostElementRef,
  };
};