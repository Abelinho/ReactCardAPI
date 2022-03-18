import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import * as serviceWorker from './serviceWorker';
/*function getNum() {
    return Math.floor(Math.random()*10)+1;
}

class Car extends React.Component {
    render() {
        const num = getNum();
      return( <div>
          <h1>Your number is: {num}</h1>
      <p>{(num===7) ? 'congrats Jonathan Ilok!': 'unlucky'}</p>
      {num===7 ?
          <img src="extractedfromsrc/logo.svg"/> 
          : null}
      </div>)
    }
  }*/





/*class Car extends React.Component {
    constructor(props){
        super();
    }
    render() {
     // return <h2>I want a {this.props.brand.name} {this.props.brand.model}!</h2>;
      return <h2>I want a {this.props.model} </h2>
    }
  }
  
  /*class Garage extends React.Component {
    render() {
        var carInfo = {name:"Ford",model:"Mustang"}; //{name:"Range Rover",model: "SUV"};
      return (
        <div>
        <h1>What birthday gift do you want?</h1>
        <Car brand={carInfo}/>  

        </div>
      );
    }
  }
  favcol="yellow"
  */
  class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 1000)
    }
    render() {
      return (
       <div> 
         
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        
        </div> 
      );
    }
  }

  
  
  

  
  ReactDOM.render(<App />, document.getElementById('root'));
  //ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
