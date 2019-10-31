import { connect } from 'react-redux';
// import {getPostsFromApi, sendVoteToAPI} from '../actions';

import React from 'react';

class TitleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        return (
          "title list container"
        )
    }
} 

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

// const matchDispatchToProps = { getPostsFromApi, sendVoteToAPI }

export default connect(mapStateToProps)(TitleList);