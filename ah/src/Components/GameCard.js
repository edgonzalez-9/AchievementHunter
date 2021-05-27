import React from 'react';

function GameCard(props){

  let gameData = props.gameData
    return (
        <div class="card" style={{width: `18rem`}}>
            <img src={gameData.image} class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">{gameData.title}</h5>
                <p class="Card-text">{gameData.platforms}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default GameCard;