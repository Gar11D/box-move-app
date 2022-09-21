import React from 'react';
import './App.css';
import BoxMove from '../BoxMove/BoxMove';
import ArrayMove from '../ArrayMove/ArrayMove';

class App extends React.Component {
  
  constructor (props) {
    super (props);
    
    this.state = {
      Box1 : 'Item 1',
      Box2 : ''
    };

    this.updateBox1andBox2 = this.updateBox1andBox2.bind(this);

  }

  updateBox1andBox2() {
    let value1;
    let value2;
    return (this.state.Box1 === 'Item 1' 
    ?
    (value1 = '', value2 = 'Item 1', this.setState({Box1: value1}), this.setState({Box2: value2}))
    : 
    (value1 = 'Item 1', value2 = '', this.setState({Box1: value1}), this.setState({Box2: value2}))
    )
  }

  render () { 
    return(
    <div>
      <h1>Box Move Practice</h1>
      <br/>
      <div className='box-container'>
          <div className='box'>
              <h3>Box 1</h3>
              <div className='item-box'>
                  <span>{this.state.Box1}</span>
              </div>
          </div>
          <div className='box' id="button-box">
              <p>Click on the button below to move the item between boxes</p>
              <BoxMove onBoxChange={this.updateBox1andBox2}/>
          </div>
          <div className="box">
              <h3>Box 2</h3>
              <div className="item-box">
                  <span>{this.state.Box2}</span>
              </div>
          </div>
      </div>
      <div class="box-container2">
        <div class="box">
            <h3>Array 1</h3>
            <div id="array-box1"> </div>
        </div>
        <div class ="box" id="button-box2">
            <p>Click on the button below to move the array values between boxes</p>
            <div class="button-box-container">
                <button id="left-arrow" onclick="arrayMoveLeft()">Move left</button>
                <div id="arrow-box"> Click on the arrows to move the items </div>
                <button id="right-arrow" onclick="arrayMoveRight()"> Move right</button>
            </div>
        </div>
        <div class="box">
            <h3>Array 2</h3>
            <div id="array-box2"> </div>
        </div>
    </div>
    </div>
    )
  }

}

export default App;

