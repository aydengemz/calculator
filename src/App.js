import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Calculator extends Component {
  render() {
    return (
      <div className="Calculator">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
       
          
               <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
      </div>
    );
  }
}
class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={()=> this.props.onClick( this.props.value) }>
       {this.props.value}
       
      </button>
    );
  }
  numClick(n){
  var currentValue = document.getElementById("label").innerHTML;
  document.getElementById("label").innerHTML = currentValue + n;
  }
}

class Clear extends React.Component
{
   render() {
    return (
        <button className="clear" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}


class Board extends React.Component {

  constructor() {
    super();
    this.state = {
      entered: [],

    };
  }

  handleClick(n) {
   var currentValue = document.getElementById("label").innerHTML;
  document.getElementById("label").innerHTML = currentValue + n;
  this.state.entered.push(n);
  console.log(this.state.entered);
  if(n === "="){
     console.log("equal");
     var eq = this.state.entered.indexOf("=");

     var asmd;
     if (this.state.entered.indexOf("-")!= -1){
        asmd = this.state.entered.indexOf("-");
     }
      if (this.state.entered.indexOf("+")!= -1){
        asmd = this.state.entered.indexOf("+");
     }
      if (this.state.entered.indexOf("x")!= -1){
        asmd = this.state.entered.indexOf("x");
     }
      if (this.state.entered.indexOf("/")!= -1){
        asmd = this.state.entered.indexOf("/");
     }
     

      
     console.log("index of = is: " +eq);
     console.log("index of op is: " + asmd); 

     var firstOp = this.state.entered.slice(0, asmd);
     console.log("first array: " + firstOp);
       var lastOp = this.state.entered.slice(asmd + 1, eq);
     console.log("second array: " +lastOp);

     var firstNumber = this.makeNumber(firstOp);
     var lastNumber = this.makeNumber(lastOp);
     console.log("first number: " + firstNumber);
     console.log("second number: "+ lastNumber);

    var finalAnswer;
   var opReturn = this.state.entered[asmd];
  console.log(opReturn);
     switch(opReturn){
       case '+':
          finalAnswer = firstNumber + lastNumber;
          break;
       case'-':
         finalAnswer = firstNumber - lastNumber;
          break;
       case 'x':
         finalAnswer = firstNumber * lastNumber;
          break;
       case'/':
         finalAnswer = firstNumber / lastNumber;
          break;
     }
     




console.log("answer: " + finalAnswer);
document.getElementById("label").innerHTML = finalAnswer;


  }
}

  makeNumber(n){
    var numDigits = n.length;
    var number = 0;
    for(var i = 0; i<numDigits; i++){
       var num = n.shift();
       console.log(num);
       number = number + num * Math.pow(10, (numDigits-1-i));
    }
console.log("final number: " +number);
   return number;

     }

  handleClearClick(n) {
  document.getElementById("label").innerHTML = '';
  this.setState({entered: []});
  console.log("cleared");
}

  renderSquare(i) {
    return <Square 
             value={i} 
              onClick={() => this.handleClick(i)}
             />;
    
  }
   renderClear(i) {
    return <Clear value={i} 
    onClick={() => this.handleClearClick(i)}
    />;
  }

  render() {
    const status = '';

    return (
      <div>
        <div className="status">{status}</div>
        <h1>Please enter your number: </h1>
        <div id = "label"></div>
        <div className="board-row">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
           {this.renderSquare('+')}
        </div>
        <div className="board-row">
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare('-')}
        </div>
        <div className="board-row">
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          {this.renderSquare(9)}
          {this.renderSquare('=')}
        </div>
         <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare('/')}
          {this.renderSquare('x')}
          {this.renderClear('C')}
        </div>
      </div>
    );
  }
}


export default Calculator;
