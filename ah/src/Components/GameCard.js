import React from 'react';

function GameCard(props){
    return (
        <div class="card" style={{width: `18rem`}}>
            <img src="https://www.residentevil.com/village/assets/images/common/share.png" class="card-img-top" alt="..."></img>
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="Card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default GameCard;