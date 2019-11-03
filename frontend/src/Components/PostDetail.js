import React from 'react';
import PostForm from './PostForm';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class PostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: true
    }
    this.toggleEditForm = this.toggleEditForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleCancelEdit = this.handleCancelEdit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  async componentDidMount() {
    await this.props.getPostFromApi(this.props.match.params.postid);
  }

  renderLoading() {
    return <p>Loading...</p>;
  }

  toggleEditForm() {
    this.setState({ visibility: !this.state.visibility });
  }

  async handleEdit(id, post) {
    await this.props.updatePostFromApi(id, post);
    this.props.history.push('/');
  }

  handleCancelEdit() {
    this.props.history.push('/')
  }

  async handleRemove(id) {
    await this.props.deletePostFromApi(id);
    this.props.history.push('/');
  }

  render() {
    let currentPost = this.props.post.post;
    if (!currentPost) { return this.renderLoading(); }
    let visibility = this.state.visibility ? "hidden" : "visible";

    
    return (
      <React.Fragment>
        <div className='col-10' style={{ margin: "0 auto" }}>
          <div className='jumbotron'>
            <div className='d-flex justify-content-end'>
              <i
                style={{ marginRight: "6px", color: "blue" }}
                className='flex-end fas fa-edit'
                onClick={this.toggleEditForm}></i>
              <i style={{ color: "red" }} className='fas fa-times'
                onClick={() => this.handleRemove(currentPost.id)}></i>
            </div>

            <div className='d-flex justify-content-end' style={{ marginTop: '10px' }}>
              {currentPost.votes} votes:
              <i className='fas fa-thumbs-up'
                style={{ color: 'green', marginLeft: '10px' }}
                onClick={() => this.handleUpVote(currentPost.id, 'up')}
              ></i>
              <i className='fas fa-thumbs-down'
                style={{ color: 'red', marginLeft: '10px' }}
                onClick={() => this.handleDownVote(currentPost.id, 'down')}
              ></i>
            </div>

            <h1 className='display-6'>{currentPost.title}</h1>
            <p className='lead'>{currentPost.description}</p>
            <p>{currentPost.body}</p>
            <hr className='my-4' />
            <h1 className='display-6'>Comments</h1>
            <CommentList currentPost={currentPost} 
            deleteCommentFromApi={this.props.deleteCommentFromApi} />
            <CommentForm addComment={this.props.addCommentToApi} postId={currentPost.id} />
          </div>
        </div>
        <div style={{ visibility }} className="form-div">
          <PostForm
            updatePost={this.handleEdit}
            isEditing={true}
            currentPost={currentPost}
            cancel={this.handleCancelEdit}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default PostDetail;