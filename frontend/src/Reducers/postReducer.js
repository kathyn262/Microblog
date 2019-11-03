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

    default:
      return state;
  }
}