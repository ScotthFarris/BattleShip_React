import React, { Component } from 'react';
import Square from './square.js'

const EMPTY = 0
const SHIP = 1
const MISS = "Miss"
const HIT = "Hit"

class gameBoard extends Component {
    constructor(props){
        super(props)

        this.state = {
            board: this.setupBoard()
        }
    }

    componentWillMount(){
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
    }

    // creates a row on the grid and ties state of the board to the view of the page
    createRow(rowNumber){
      var row = []
            for(let i = 0; i < 10; i++){
                var theId = i + "_" + rowNumber
                var status = ""
                if(this.state.board[i][rowNumber] === HIT ){
                    status = "shipHit"
                }

                else if(this.state.board[i][rowNumber] === MISS){
                    status = "miss"
                } else {
                    status = "square"
                }

                row.push(
                    <Square id={theId} key={theId} status={status}                                clickHandler={this.clickHandler.bind(this, i ,rowNumber)} value={this.state.board[i][rowNumber]}
                    />

                );
            }
                return row
        }



//does the same as the createRow() funcion, only 10 times.
    createRows(i){
        var rows = []
        for(let i = 0; i < 10; i++){
            rows.push(<tr key={i}>{this.createRow(i)}</tr>);
        }
        return rows
    }

    placeShip() {
        const board = this.state.board
        var row = Math.floor(Math.random()*10)
        var col = Math.floor(Math.random()*10)

        if(board[row][col] === SHIP){
            this.placeShip()
        } else if(board[row][col] === EMPTY){
            board[row][col] = SHIP
        }

        console.log(this.state.board)

        this.setState({
            board: board
        })
    }

    //this is where we left off you stupid fucks
    clickHandler(row, col) {

        const newBoard = this.state.board

        this.setState({
            board: newBoard
        })

        if(newBoard[row][col] === SHIP) {
            newBoard[row][col] = HIT
            // alert("Hit!")
        } else if(newBoard[row][col] === EMPTY) {
            newBoard[row][col] = MISS
            // alert('Miss!')
        // } else if(newBoard[row][col] === MISS) {
        //     alert("Already missed")
        // } else if (newBoard[row][col] === HIT){
            // newBoard[row][col] = HIT
            // alert("Already hit")
        }
        // console.log(newBoard[row][col])
        // switch(newBoard[row][col]){
        //     case 0:
        //         console.log("I'm a miss!")
        //         break;
        //     case "Miss":
        //         console.log("hit")
        //         break;
        //     default:
        //     console.log("I broke");
        // }
    };

        // let newBoard = this.state.board

    render() {
        return (
            <div>
                <table>
                        <tbody>
                            {this.createRows()}
                        </tbody>
                </table>
            </div>
        )
    }
}


export default gameBoard;
