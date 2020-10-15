import { connect } from 'react-redux';
import React from 'react';
import { getTitlesFromAPI, sendVoteToAPI } from '../actions';
import Title from '../Components/Title';
import './TitleList.css';

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
          <Title key={post.id} post={post} handleVote={this.handleVote} />
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