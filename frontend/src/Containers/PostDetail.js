import PostDetail from '../Components/PostDetail';
import { connect } from 'react-redux';
// import {
//   editPost,
//   removePost,
//   addComment,
//   removeComment,
//   getOnePostFromApi,
//   updatePostFromApi, 
//   deletePostFromApi, 
//   getCommentsFromApi, 
//   addCommentToApi, 
//   deleteCommentFromApi, 
//   sendVoteToAPI
// } from "../actions";
import {
  getPostFromApi,
  updatePostFromApi,
  deletePostFromApi
} from '../actions';

function mapStateToProps(state) {
    return {
      post: state.posts
    }
  }

const mapDispatchToProps = {
  getPostFromApi,
  updatePostFromApi,
  deletePostFromApi
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);