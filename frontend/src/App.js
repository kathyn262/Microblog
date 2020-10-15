import React from 'react';
import axios from 'axios';
import './App.css';
import NavBox from './Components/NavBox';
import Routes from './Components/Routes';

const BASE_URL = "https://microblogbackend.herokuapp.com";
class App extends React.Component {

  async componentDidMount() {
    let wake = await axios.get(`${BASE_URL}/ping`);
    console.log(wake.data);
  }
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
