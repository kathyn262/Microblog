import { connect } from 'react-redux';
import {fetchTitlesFromAPI} from '../actions';

import React from 'react';

class TitleList extends React.Component {
  componentDidMount() {
    if (this.props.titles.length === 0) {
      this.props.fetchTitlesFromAPI();
    }
  }

  render() {
    if (this.props.titles.length === 0) return <b>Loading</b>;

    return (
      this.props.titles.map( post =>
        <div>{post.title}</div>
      )
    )
  }
}

function mapStateToProps(state) {
  return {
    titles: state.titles
  }
}

export default connect(mapStateToProps, {fetchTitlesFromAPI})(TitleList);