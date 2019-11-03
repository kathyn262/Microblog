import axios from "axios";
import {
  ADDPOST,
  EDITPOST,
  REMOVEPOST,
  LOADTITLES,
  ADDCOMMENT,
  REMOVECOMMENT,
  LOADPOST,
  LOADCOMMENTS,
  VOTE
} from "./actionTypes";

const BASE_URL = "http://localhost:5000";

function getTitles(titles) {
  return {
    type: LOADTITLES,
    titles,
  };
}

export function getTitlesFromAPI() {
  return async function (dispatch) {
    const response = await axios.get(`${BASE_URL}/api/posts`);
    return dispatch(getTitles(response.data));
  };
}

function handleError(error) {
  return {
    type: "ERROR",
    error
  };
}

export function addPost(post, id) {
  return {
    type: ADDPOST,
    post,
    id
  };
}

export function addPostToApi(data, id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.post(`${BASE_URL}/api/posts`, data);
      dispatch(addPost(response.data, id));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

function getPost(post) {
  return { type: LOADPOST, post };
}

export function getPostFromApi(id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.get(`${BASE_URL}/api/posts/${id}`);
      dispatch(getPost(response.data));
    } catch (error) {
      dispatch(handleError(error));
    }
  };
}

export function editPost(id, post) {
  return {
    type: EDITPOST,
    payload: {
      id,
      post
    }
  };
}

export function updatePostFromApi(id, postData) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.put(`${BASE_URL}/api/posts/${id}`, postData);
      dispatch(editPost(id, response.data))
    } catch (error) {
      dispatch(handleError(error));
    }
  }
}

export function removePost(id) {
  return {
    type: REMOVEPOST,
    id
  };
}


export function deletePostFromApi(id) {
  return async function thunk(dispatch) {
    try {
      let response = await axios.delete(`${BASE_URL}/api/posts/${id}`);
      dispatch(removePost(id));
    } catch (error) {
      dispatch(handleError(error));
    }
  }
}

// export function addComment(comment, postId) {
//   return {
//     type: ADDCOMMENT,
//     payload: {
//       comment,
//       postId
//     }
//   };
// }

// export function addCommentToApi(postId, comment) {
//   return async function thunk(dispatch) {
//     try {
//       let response = await axios.post(`${BASE_URL}/api/posts/${postId}/comments`, comment);
//       dispatch(addComment(response.data, postId));
//   } catch (error) {
//       dispatch(handleError(error));
//     }
//   }
// }

// function getComments(comments, postId) {
//   return { type: LOADCOMMENTS, comments, postId };
// }

// export function getCommentsFromApi(postId) {
//   return async function thunk(dispatch) {
//     try {
//       let response = await axios.get(`${BASE_URL}/api/posts/${postId}/comments`);
//       dispatch(getComments(response.data, postId));
//   } catch (error) {
//       dispatch(handleError(error));
//     }
//   }
// }

// export function removeComment(commentId, postId) {
//   return {
//     type: REMOVECOMMENT,
//     payload: {
//       commentId,
//       postId
//     }
//   };
// }

// export function deleteCommentFromApi(commentId, postId) {
//     console.log("api", commentId, postId)
//   return async function thunk(dispatch) {
//     try {
//       await axios.delete(`${BASE_URL}/api/posts/${postId}/comments/${commentId}`);
//       dispatch(removeComment(commentId, postId));
//   } catch (error) {
//       dispatch(handleError(error));
//       console.log("in error")
//     }
//   }
// }

// export function vote(postId, votes) {
//   return {
//     type: VOTE,
//     payload: {
//       postId, 
//       votes
//     }
//   };
// }


// export function sendVoteToAPI(postId, direction) {
//   return async function thunk(dispatch) {
//     try {
//       const response = await axios.post(`${BASE_URL}/api/posts/${postId}/vote/${direction}`);
//       dispatch(vote(postId, response.data.votes));
//     } catch (error) {
//       dispatch(handleError(error));
//       console.log("in error")
//     }
//   };
// }