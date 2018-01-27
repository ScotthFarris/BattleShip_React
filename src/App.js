import React, { Component } from 'react';
import './App.css';
import  Board  from './components/gameBoard.js';


class App extends Component {
    constructor(props){
        super(props)
}





render() {
        return (
          <div className="container">
                
                    <h1 className="App-title">Welcome to Battleship</h1>

            <Board ships={5} shots={50} />
          </div>
        );
      }
    }


export default App;
