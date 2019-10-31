import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NewPost from '../Containers/NewPost';
import PostDetail from '../Containers/PostDetail';
import TitleList from '../Containers/TitleList';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/new" render={(rtProps) => <NewPost {...rtProps} />} />
        <Route exact path="/:postid" render={(rtProps) => <PostDetail
          {...rtProps} />} />
        <Route exact path="/" render={() => <TitleList />} />
        <Redirect to="/" />
      </Switch>
    )
  }
}

export default Routes;