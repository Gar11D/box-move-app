import React from 'react';
import './ArrayMove.css';

class ArrayMove extends React.Component {
    constructor (props) {
        super(props);

        this.handleArrayMoveRight = this.handleArrayMoveRight.bind(this);
    }

    // handleArrayMoveLeft () => {
    //     this.props.
    // }

    handleArrayMoveRight () {
        this.props.onArrayMoveRight();
    }

    render () {
        return(
            <div className ="box" id="button-box2">
                <p>Click on the buttons below to move the array values between boxes</p>
                <div className="button-box-container">
                    <button id="left-arrow" >Move left</button>
                    <div id="arrow-box"> Click on the arrows to move the items </div>
                    <button id="right-arrow" onClick={this.handleArrayMoveRight}> Move right</button>
                </div>
            </div>
        )
    }
}

export default ArrayMove;