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

      // if post doesn't exist or payload postId doesn't match the id of the post, 
      // return state
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

    case REMOVECOMMENT:
      return {
        ...state,
        post: {
          ...state.post, comments: state.post.comments.filter(
            comment => comment.id !== action.payload.commentId
          )
        }
      }

    default:
      return state;
  }
}