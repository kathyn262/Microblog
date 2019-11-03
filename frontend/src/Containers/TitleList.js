import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import React from 'react';
import { getTitlesFromAPI } from '../actions';

class TitleList extends React.Component {
  componentDidMount() {
    if (this.props.titles.length === 0) {
      this.props.getTitlesFromAPI();
    }
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
            style={{color: 'green', marginLeft: '10px'}}
            onClick={() => this.handleUpVote(post.id, 'up')}
            ></i>
            <i className='fas fa-thumbs-down' style={{color: 'red', marginLeft: '10px'}}
            onClick={() => this.handleUpVote(post.id, 'down')}></i>
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

export default connect(mapStateToProps, { getTitlesFromAPI })(TitleList);