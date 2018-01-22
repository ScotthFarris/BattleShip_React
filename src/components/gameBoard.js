import React, { Component } from 'react';

const ship = 1
class gameBoard extends Component {
    constructor(props){
        super(props)
        this.state= {
            board: [],
            ship: 1
        }
        this.setupBoard()
        for(let i = 0; i < 5; i++){
            this.placeShip()
        }
    }

//pushes 10 empty arrays into the state of "board"
setupBoard(){
    for(let i=0;i<10;i++){
        this.state.board.push([])
    }
}

//creates a row on the grid and ties state of the board to the view of the page
createRow(rowNumber){
    var row = []
    for(let i = 0; i < 10; i++){
        var theId = i + "_" + rowNumber

        row.push(
            <td id={theId} key={theId}
                onClick={this.clickHandler.bind(this, i,rowNumber )}
            >
                {this.state.board[rowNumber][i]}
            </td>
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

 placeShip(){
    var x = Math.floor(Math.random()*10)
    var y = Math.floor(Math.random()*10)
    if(this.state.board[x][y] === ship){
        this.placeShip()
    } else {
        this.state.board[x][y] = ship
    }
}
//sets updated state of the board on the click event
clickHandler(x,y){
    let newBoard = this.state.board
    newBoard[y][x] = 5
    this.setState({
        board: newBoard
    })
}



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
