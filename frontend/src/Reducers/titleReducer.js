import {
  ADDPOST,
  REMOVEPOST,
  EDITPOST,
  VOTE,
  LOADTITLES
} from "../actionTypes";

function makeTitleFromPost({ id, title, description }) {
  return { id, title, description };
}

export default function rootReducer(state = [], action) {
  switch (action.type) {

    case LOADTITLES:
      return [...action.titles];

    case ADDPOST:
      return [...state, makeTitleFromPost(action.post)];

    default:
      return state;
  }
}