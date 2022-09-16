import React from 'react';
import './App.css';
import BoxMove from '../BoxMove/BoxMove';

class App extends React.Component {
  
  constructor (props) {
    super (props);
    
    this.state = {
      Box1 : ['Item 1'],
      Box2 : []
    };

  }

  // this.state.Box1[0] ? is correct for verifying if there is anything in the array
  
  // updateBoxes() {
  //   const update = () => {
  //   this.state.Box1[0] ? 
  //   this.setState({Box2: this.state.Box1 }):
  //   this.setState({Box1: this.state.Box2})
  //   };
  //   update();
  // }

  render () { 
    return(
    <div>
      <h1>Box Move Practice</h1>
      <br/>
      <div class="box-container">
          <div class="box">
              <h3>Box 1</h3>
              <div class="item-box">
                  <span>{this.state.Box1}</span>
              </div>
          </div>
          <div class ="box" id="button-box">
              <p>Click on the button below to move the item between boxes</p>
              {/* <BoxMove /> */}
          </div>
          <div class="box">
              <h3>Box 2</h3>
              <div class="item-box">
                  <span>{this.state.Box2}</span>
              </div>
          </div>
      </div>
    </div>
    )
  }

}

export default App;

