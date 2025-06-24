// postsReducer.js
import { actions } from "../actions";

export const postsReducer = (state, action) => {
  switch (action.type) {
    case actions.posts.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        error: "",
      };
    case actions.posts.DATA_FETCHED:
      return {
        ...state,
        posts: action.data,
        loading: false,
        error: "",
        page: 1,
        hasMore: true,
      };
    case actions.posts.DATA_APPEND:
      return {
        ...state,
        posts: [...state.posts, ...action.data],
        loading: false,
        error: "",
      };
    case actions.posts.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        hasMore: false,
      };
    case actions.posts.INCREMENT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case actions.posts.NO_MORE_DATA:
      return {
        ...state,
        loading: false,
        hasMore: false,
      };
    default:
      return state;
  }
};