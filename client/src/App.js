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


//Self study questions:

//1. You might use class components because you work at a company whose whole codebase is in class components and they don't want to refactor.

//2. Life cycle methods and their purpose:
// 2a. Birth/Mountin phase: Phase when the component is being built from the ground up
// 2b. Growth/Updating phase: You're updating component data in this phase
// 2c. Death/Unmounting phase: component is removed from screen

//3. Purpose of custom hook: The purpose is to build hooks that you can re use throughout your components.  Things you could use them for include handling controlled inputs, managing event listeners, or watching for key presses.

//4. Why is it important to test our apps?: It's important because we're human and will make mistakes.  Testing provides a safety net against those mistakes.
