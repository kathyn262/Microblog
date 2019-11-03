import React from 'react';
import { Link } from "react-router-dom";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }

  handleVote(id, direction) {
    this.props.handleVote(id, direction);
  }

  render() {
    return (
      <div className='card w-50 title-card' key={this.props.post.id}>
        <div className='card-body'>
          <h5 className='card-title'>
            <Link to={`/${this.props.post.id}`}>{this.props.post.title}</Link>
          </h5>
          <p className='card-text'>{this.props.post.description}</p>
        </div>
        <div className="card-footer">
          {this.props.post.votes} votes
            <i className='fas fa-thumbs-up'
            style={{ color: 'green', marginLeft: '10px' }}
            onClick={() => this.handleVote(this.props.post.id, 'up')}
          ></i>
          <i className='fas fa-thumbs-down' style={{ color: 'red', marginLeft: '10px' }}
            onClick={() => this.handleVote(this.props.post.id, 'down')}></i>
        </div>
      </div>
    )
  }
}

export default Title;