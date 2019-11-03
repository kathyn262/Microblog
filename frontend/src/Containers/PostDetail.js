import PostDetail from '../Components/PostDetail';
import { connect } from 'react-redux';
import {
  getPostFromApi,
  updatePostFromApi,
  deletePostFromApi, 
  addCommentToApi, 
  deleteCommentFromApi,
  sendVoteToAPI
} from '../actions';

function mapStateToProps(state) {
    return {
      post: state.posts
    }
  }

const mapDispatchToProps = {
  getPostFromApi,
  updatePostFromApi,
  deletePostFromApi, 
  addCommentToApi,
  deleteCommentFromApi,
  sendVoteToAPI
};

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);