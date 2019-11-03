import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOST,
  LOADONEPOST,
  ERROR,
  LOADCOMMENTS,
  VOTE
} from "../actionTypes";

export default function rootReducer(state = {}, action) {

  switch (action.type) {

    case LOADPOST:
      return { ...state, post: action.post };

    case ADDPOST:
      return { ...state, [action.id]: { ...action.post, comments: [] } };

    case EDITPOST:
      return { ...state, [action.payload.id]: action.payload.post };

    case ADDCOMMENT:
      const { postId } = action.payload;
      if (!state.post || +postId !== state.post.id) return state;

      let post = { ...state.post };

      post.comments = [
        ...post.comments,
        { ...action.payload.comment }
      ];
      return {
        ...state,
        post
      };

    default:
      return state;
  }
}