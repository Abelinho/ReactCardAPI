import React, { Component } from 'react';
import axios from 'axios';
import Card from './Card';
import "./Card.css";
import "./Deck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

class Deck extends Component {

    constructor(props) {
        super(props)
        this.state = {
            deck : null, 
            drawn : []
                     };
            this.getCard = this.getCard.bind(this)   
        } 
    
       async componentDidMount() {
            let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`);//find out more on async,await,and call back
            this.setState({deck :deck.data});
            console.log("inside component did mount");
            console.log(deck.data);
        }

        async getCard(){
            let id = this.state.deck.deck_id;

            try {
                let cardurl = `${API_BASE_URL}/${id}/draw/`;
                let cardRes = await axios.get(cardurl);

                if(!cardRes.data.success){
                  throw new Error("No new cards remaining!")  
                }
                let card = cardRes.data.cards[0];
                console.log(cardRes.data);
                this.setState(st=>({
                    drawn : [
                        ...st.drawn,
                        {
                            id: card.code, 
                            image: card.image,
                            name: `${card.value} of ${card.suit} `
                        }
                    ] 
                    }));
            }
             catch(err){
                 alert(err);
             }
            
            
            
            
          //make request using deck id
         //axios.get(`${API_BASE_URL}/new/shuffle/
          //setState using new card info from api  
        }

        render(){
                const cards = this.state.drawn.map(c=>(
                    <Card key={c.id} name={c.name} image={c.image}/>
                    
                ));
            return(
                <div className='Deck'>
                    <h1 className='Deck-title'>card dealer</h1>
                    <h2 className='Deck-title subtitle' >A little demo made with React</h2>
                    <button onClick={this.getCard} >GetCard!</button>
                    <div className='Deck-cardarea'S>{cards}</div>  
                    </div> //this renders the result of the map call above
            
                  
            );
        }

    }
    export default Deck;