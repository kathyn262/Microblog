import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOSTS,
  LOADONEPOST,
  ERROR,
  LOADCOMMENTS,
  VOTE
} from "../actionTypes";

export default function rootReducer(state = {}, action) {

  switch (action.type) {

    case LOADPOSTS:
      return { ...state, [action.post.id]: action.post };

    case ADDPOST:
      return { ...state, [action.post.id]: { ...action.post, comments: [] } };

    default:
      return state;
  }
}