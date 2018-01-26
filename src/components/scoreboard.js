import React, { Component } from 'react';
import '../App.css';

class Scoreboard extends Component {


    render() {

        return(
            <div>
                <header>
                    <h3 className="torp">Torpedoes: {this.props.torpedoes} </h3>
                        <div className="ship">
                            <h3>Ships Remaining: {this.props.boats}</h3>
                        </div>
                </header>
            </div>


        )}
    }

export default Scoreboard;
