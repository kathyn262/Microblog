import { connect } from 'react-redux';
import React from 'react';
import PostForm from '../Components/PostForm';
import { addPost, addPostToApi } from "../actions";
import uuid from 'uuid/v4';

class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  add(postData) {
    this.props.addPostToApi(postData, uuid());
    this.props.history.push('/');
  }

  cancel() {
    this.props.history.push('/');
  }

  render() {
    return (
      <PostForm 
        addPost={this.add}
        cancel={this.cancel}
      />
    )
  }
}

export default connect(null, { addPost, addPostToApi })(NewPost);