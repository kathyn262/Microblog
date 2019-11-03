import React from 'react';
import './App.css';
import NavBox from './Components/NavBox';
import Routes from './Components/Routes';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBox />
        <Routes />
      </div>
    )
  }
}

export default App;
