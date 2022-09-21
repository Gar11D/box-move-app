import React from 'react';
import './BoxMove.css';

class BoxMove extends React.Component {
    constructor (props) {
        super(props);
        this.handleBoxChange=this.handleBoxChange.bind(this);
    }

    handleBoxChange() {
        this.props.onBoxChange();
    }

    render () {
        return(
            <button onClick={this.handleBoxChange}>Click me</button>
        )
    }
}

export default BoxMove;