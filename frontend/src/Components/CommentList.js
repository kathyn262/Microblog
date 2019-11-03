import React from 'react';
import Comment from './Comment';

class CommentList extends React.Component {
  render() {
    const { currentPost } = this.props;
    
    let commentArray = [];
    for (let comment of currentPost.comments) {
      commentArray.push(
        <Comment key={`${currentPost.id}-${comment.id}`}
          postId={currentPost.id}
          comment={comment}
          deleteCommentFromApi={this.props.deleteCommentFromApi}
        />
      );
    }

    return <ul style={{ listStyleType: "none" }}>{commentArray}</ul>;
  }
}

export default CommentList;