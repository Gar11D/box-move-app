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
    this.arrayMoveLeft = this.arrayMoveLeft.bind(this);
    this.fruitArrayListify = this.fruitArrayListify.bind(this);

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

  arrayMoveRight () {
    let fruitArrayNew = this.state.fruitArray;
    let myArrayNew = this.state.myArray;
    return ( fruitArrayNew[0]
      ? (myArrayNew.push(fruitArrayNew[fruitArrayNew.length -1]), 
        fruitArrayNew.splice(fruitArrayNew.length -1, 1),
        this.setState({myArray: myArrayNew}),
        this.setState({fruitArray: fruitArrayNew})
        )
      : alert("Array 1 is empty.")
    );
  }

  arrayMoveLeft () {
    let fruitArrayNew = this.state.fruitArray;
    let myArrayNew = this.state.myArray;
    return ( myArrayNew[0]
      ? (fruitArrayNew.push(myArrayNew[myArrayNew.length -1]), 
        myArrayNew.splice(myArrayNew.length -1, 1),
        this.setState({myArray: myArrayNew}),
        this.setState({fruitArray: fruitArrayNew})
        )
      : alert("Array 2 is empty.")
    );
  }
  
  fruitArrayListify () {
    let fruitArrayList = this.state.fruitArray;
    let newFruitArrayList = [];
    for (let i =0; i <= fruitArrayList.length -2; i++) {
      newFruitArrayList.push(`${fruitArrayList[i]}, `);
    }
    for (let i= fruitArrayList.length - 1; i <= fruitArrayList.length -1; i++ ){
      newFruitArrayList.push(`${fruitArrayList[i]}.`)
    }
    if (!fruitArrayList[0]) {
      return ''
    } else {
      return newFruitArrayList;
    }
  }

  myArrayListify () {
    let myArrayList = this.state.myArray;
    let newMyArrayList = [];
    for (let i =0; i <= myArrayList.length -2; i++) {
      newMyArrayList.push(`${myArrayList[i]}, `);
    }
    for (let i= myArrayList.length - 1; i <= myArrayList.length -1; i++ ){
      newMyArrayList.push(`${myArrayList[i]}.`)
    }
    if (!myArrayList[0]) {
      return ''
    } else {
      return newMyArrayList;
    }
  }

  render () { 

    const fruitArrayList = this.fruitArrayListify();
    const myArrayList = this.myArrayListify();

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
      <div className="box-container2">
        <div className="box">
            <h3>Array 1</h3>
            <div id="array-box1">
              {fruitArrayList}
            </div>
        </div>
        <ArrayMove  onArrayMoveRight={this.arrayMoveRight}
                    onArrayMoveLeft={this.arrayMoveLeft}
        />
        <div className="box">
            <h3>Array 2</h3>
            <div id="array-box2">{myArrayList}</div>
        </div>
    </div>
    </div>
    )
  }

}

export default App;

