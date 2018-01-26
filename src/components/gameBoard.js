import React, { Component } from 'react';
import Square from './square.js'
import Scoreboard from './scoreboard.js'

const EMPTY = 0
const SHIP = 1
const MISS = "Miss"
const HIT = "Hit"

class gameBoard extends Component {
    constructor(props){
        super(props)

        const { ships, shots } = this.props

        this.state = {
            board: this.setupBoard(),
            shots: shots,
            ships: ships,
        }
    }
    //mounts placeShip() function before rendering the page
    componentWillMount(){
        for(let i = 0; i < 5; i++){
            this.placeShip()
        }
    };

    placeShips(){
        for(let i = 0; i < 5; i++){
            this.placeShip()
        }
    }

    // pushes 10 empty arrays into the state of "board"
    setupBoard() {
        let board = []

        for(let row=0;row<10;row++){
            board[row] = []

            for(let col=0; col<10; col++){
                board[row][col] = EMPTY
            }
        }
        console.log(board);
        return board
    };

    // creates a row on the grid and ties state of the board to the view of the page
    createRow(rowNumber){
      var row = []
            for(let i = 0; i < 10; i++){
                var theId = i + "_" + rowNumber
                var status = ""

                if(this.state.board[i][rowNumber] === HIT ){
                    status = "shipHit"
                } else if(this.state.board[i][rowNumber] === MISS){
                    status = "miss"
                } else{
                    status = "square"
                }

                row.push( //square component is called and assigned proper values
                    <Square id={theId} key={theId} status={status}                             clickHandler={this.clickHandler.bind(this, i ,rowNumber)}  value={this.state.board[i][rowNumber]}
                    />
                    //clickHandler() function is bound above with .bind
                );

            }
                return row
        };

//does the same as the createRow() funcion, only 10 times.
    createRows(i){
        var rows = []
        for(let i = 0; i < 10; i++){
            rows.push(<tr key={i}>{this.createRow(i)}</tr>);
        }
        return rows
    };

    shipPos(){
        var row = Math.floor(Math.random()*10);
        var col = Math.floor(Math.random()*10);
        return([row] ,[col])
    console.log([row])
}



//tries to place a ship vertically(col) on the board
    placeShipVert([row , col]){
        const board = this.state.board
        var row = Math.floor(Math.random()*10);
        var col = Math.floor(Math.random()*10);

        if(board[row][col]=== SHIP){
            this.placeShipVert()
        } //else if()

    }

    placeShip() {
        const board = this.state.board
        var row = Math.floor(Math.random()*10)//chooses random location on the board(horizontal)
        var col = Math.floor(Math.random()*10)//vertical

        if(board[row][col] === SHIP){//checks if there is a ship in that spot
            this.placeShip()
        } else if(board[row][col] === EMPTY){//checks if spot is empty
            board[row][col] = SHIP
        }

        console.log(this.state.board)

        this.setState({
            board: board
        })
    };

    //function runs on click of board
    clickHandler(row, col) {
        let { board, shots, ships } = this.state

        if(board[row][col] === EMPTY) { //determines if it is a miss
            board[row][col] = MISS

            shots--
        } else if(board[row][col] === SHIP) {//determines if it is a hit
            board[row][col] = HIT

            ships--
            shots--
        }

        if(ships === 0) {
            alert("You have destroyed all ships!")
            this.gameRestart()
            return
        }

        if(shots === 0) {
            alert("You lost, press OK to play again")
            this.gameRestart()
            return
        }

        this.setState({board, shots, ships})
    }

    gameRestart() {
        const { ships, shots } = this.props
        this.setState({
            board: this.setupBoard(),
            shots: shots,
            ships: ships,
        })

    }

    render() {
        return (
            <div id="div">
                <Scoreboard torpedoes={this.state.shots} boats={this.state.ships}  />
                <table>
                        <tbody>
                            {this.createRows()}
                        </tbody>
                </table>
            </div>
        )
    }
};



export default gameBoard;
