import { actions } from "../actions";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        // error: null,
      };
    case actions.profile.DATA_FETCHED:
      return {
        ...state,
        user: action.data.user,
        posts: action.data.posts,
        loading: false,
      };
    case actions.profile.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // case actions.profile.USER_DATA_EDITED:
    //     return {
    //         ...state,
    //         user: { ...state.user, ...action.payload.updatedData },
    //     };
    // case actions.profile.IMAGE_UPDATED:
    //     return {
    //         ...state,
    //         user: { ...state.user, image: action.payload.image },
    //     };
    default:
      return state;
  }
};

export { initialState, profileReducer };
