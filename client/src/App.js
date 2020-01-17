import React from 'react';
import axios from 'axios';
import PlayerCardList2 from './Components/PlayerCardList2';
import Navbar2 from './Components/Navbar2';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      playerData: []
    };
  };

  componentDidMount() {
    //axios call for my data
    axios.get('http://localhost:5000/api/players')
    .then(response => {
      console.log('soccer ladies', response);
      this.setState({playerData: response.data})
    })
  }
  

  

  render() {
    // console.log("Look here", this.state.followerData)
    return (
      
      <div>
        <Navbar2/>
        <PlayerCardList2
        playerData = {this.state.playerData}/>
      </div>

    );

  }
}

export default App;
