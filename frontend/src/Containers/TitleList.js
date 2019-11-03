import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React from 'react';
import { getTitlesFromAPI, sendVoteToAPI } from '../actions';

class TitleList extends React.Component {
  constructor(props) {
    super(props);
    this.handleVote = this.handleVote.bind(this);
  }
  componentDidMount() {
    if (this.props.titles.length === 0) {
      this.props.getTitlesFromAPI();
    }
  }

  handleVote(id, direction) {
    this.props.sendVoteToAPI(id, direction);
  }

  render() {
    if (this.props.titles.length === 0) return <b>Loading</b>;

    return (
      <div className="row">
        {this.props.titles.map(post =>
          <div className='card w-50' key={post.id}>
            <div className='card-body'>
              <h5 className='card-title'>
                <Link to={`/${post.id}`}>{post.title}</Link>
              </h5>
              <p className='card-text'>{post.description}</p>
            </div>
            <div className="card-footer">
              {post.votes} votes
            <i className='fas fa-thumbs-up'
                style={{ color: 'green', marginLeft: '10px' }}
                onClick={() => this.handleVote(post.id, 'up')}
              ></i>
              <i className='fas fa-thumbs-down' style={{ color: 'red', marginLeft: '10px' }}
                onClick={() => this.handleVote(post.id, 'down')}></i>
            </div>
          </div>
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles
  }
}

const mapDispatchToProps = {
  getTitlesFromAPI,
  sendVoteToAPI
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleList);