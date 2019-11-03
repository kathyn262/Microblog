import {
  ADDPOST,
  EDITPOST,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOST,
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


    // don't need to ...state for comments and votes
    // because state is just the singular post
    // (below is pseudo code for state)
    // {post: {id, title, comments, description, votes }}

    case ADDCOMMENT:
      const { postId } = action.payload;

      // if post doesn't exist or payload postId doesn't match the id of the post, 
      // return state
      if (!state.post || +postId !== state.post.id) return state;

      let post = { ...state.post };

      // spread out post.comments to not overwrite old comments 
      // with new comment
      post.comments = [
        ...post.comments,
        { ...action.payload.comment }
      ];

      return {
        post
      };

    case REMOVECOMMENT:
      return {
        post: {
          ...state.post, comments: state.post.comments.filter(
            comment => comment.id !== action.payload.commentId
          )
        }
      }

    case VOTE:
      return {
        ...state,
        post: {
          ...state.post, votes: action.payload.votes
        }
      }

    default:
      return state;
  }
}