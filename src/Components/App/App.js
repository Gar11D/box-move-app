import React from 'react';
import './App.css';
import BoxMove from '../BoxMove/BoxMove';
import ArrayMove from '../ArrayMove/ArrayMove';

class App extends React.Component {
  
  constructor (props) {
    super (props);
    
    this.state = {
      box1 : 'Item 1',
      box2 : '',
      fruitArray: ['apples', ' bananas', ' oranges', ' pears'],
      myArray: []
    };

    this.updateBox1andBox2 = this.updateBox1andBox2.bind(this);
    this.arrayMoveRight = this.arrayMoveRight.bind(this);

  }

  updateBox1andBox2() {
    let value1; let value2;
    return (this.state.box1 === 'Item 1' 
    ?
    (value1 = '', value2 = 'Item 1', this.setState({box1: value1}), this.setState({box2: value2}))
    : 
    (value1 = 'Item 1', value2 = '', this.setState({box1: value1}), this.setState({box2: value2}))
    )
  }

  // arrayMoveLeft() {

  // }

  //arrayMoveRight changes the array but does not render change to page
  arrayMoveRight () {
    return ( this.state.fruitArray[0]
      ? (this.state.myArray.push(this.state.fruitArray[this.state.fruitArray.length -1]), 
        this.state.fruitArray.splice(this.state.fruitArray.length -1, 1)
        // this.setState({myArray}),
        // this.setState({fruitArray})
        )
      : alert("Array 1 is empty.")
    );
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
                  <span>{this.state.box1}</span>
              </div>
          </div>
          <div className='box' id="button-box">
              <p>Click on the button below to move the item between boxes</p>
              <BoxMove onBoxChange={this.updateBox1andBox2}/>
          </div>
          <div className="box">
              <h3>Box 2</h3>
              <div className="item-box">
                  <span>{this.state.box2}</span>
              </div>
          </div>
      </div>
      <div class="box-container2">
        <div class="box">
            <h3>Array 1</h3>
            <div id="array-box1">{this.state.fruitArray}</div>
        </div>
        <ArrayMove  onArrayMoveRight={this.arrayMoveRight}/>
        <div class="box">
            <h3>Array 2</h3>
            <div id="array-box2">{this.state.myArray}</div>
        </div>
    </div>
    </div>
    )
  }

}

export default App;

