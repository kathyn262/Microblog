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

function sortByVote(posts) {
  return posts.sort((a, b) => b.votes - a.votes);
}
export default function rootReducer(state = [], action) {
  switch (action.type) {

    case LOADTITLES:
      return sortByVote([...action.titles]);

    case ADDPOST:
      return sortByVote([...state, makeTitleFromPost(action.post)]);

    case EDITPOST:
      return state.map(
        title => title.id === action.payload.id ?
        makeTitleFromPost(action.payload.post) : title);

    case REMOVEPOST:
      return state.filter(title => title.id !== action.id);

    case VOTE:
      return sortByVote(state.map(
        title => title.id === action.payload.postId ?
          { ...title, votes: action.payload.votes } : title));

    default:
      return state;
  }
}