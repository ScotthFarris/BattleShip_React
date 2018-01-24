import React, { Component } from 'react';
import '../App.css';

class Square extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { status } = this.props

        return (
                <td id={this.props.id} className={this.props.className} onClick={this.props.clickHandler}>
                {this.props.value}
                </td>
        );
    }
}

export default Square;
