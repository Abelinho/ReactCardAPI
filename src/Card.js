import React, { Component } from 'react';
import "./Card.css";
import "./Deck.css";

class Card extends Component{
    constructor(props){
        super(props);

        //transform : translate(10px, 20px) rotate(20deg);
        //placing the random variables in the constructor ensures that each card is
        //randomly positioned only once so that only the new card is seen to be moving per time
        //placing them in render() would have made all the cards to be changing with each api call
        //...since render() is called several times unlike the constuctor
        let angle = Math.random() * 90-45;
        let xPos =  Math.random() * 40-20;
        let yPos =  Math.random() * 40-20;

         this._transform = `translate(${xPos}px,${yPos}px) rotate(${angle}deg)`;
         //this randomness ensures that no two cards are on top of each other
        //thus giving a feel of cards stacking
    }
    render(){
       
        return(
            <img style={{transform:this._transform}} className='Card' src={this.props.image} alt={this.props.name}></img>
        )
    }

}
export default Card;