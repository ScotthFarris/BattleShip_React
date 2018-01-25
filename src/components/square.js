import React, { Component } from 'react';
import '../App.css';

class Square extends Component {


    render() {

        const { status } = this.props

            return (
                <td id={this.props.id} className={status} onClick={this.props.clickHandler}>
                {this.props.value}
                </td>
        );
    }
}

export default Square;
