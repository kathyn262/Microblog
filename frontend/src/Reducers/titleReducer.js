import {
  ADDPOST,
  REMOVEPOST,
  EDITPOST,
  VOTE,
  LOADTITLES
} from "../actionTypes";

// need this fn to avoid passing in all details about post
// into title
// passing all details into title would be wasteful 

function makeTitleFromPost(post) {
  return {
    id: post.id,
    title: post.title,
    description: post.description,
    votes: post.votes
  };
}

export default function rootReducer(state = [], action) {
  switch (action.type) {

    case LOADTITLES:
      return [...action.titles];

    case ADDPOST:
      return [...state, makeTitleFromPost(action.post)];

    case EDITPOST:
      return state.map(
        title => title.id === action.payload.id ?
        action.payload.post : title);

    case REMOVEPOST:
      return state.filter(title => title.id !== action.id);

    case VOTE:
      return state.map(
        title => title.id === action.payload.postId ?
          { ...title, votes: action.payload.votes } : title);

    default:
      return state;
  }
}