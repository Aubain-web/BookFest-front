import React from 'react';
import usePost from "../hooks/usePost";

const BuyTicker = ({ ticker, price, quantity, onBuy }) => {
    const handleBuy = () => {
        try{
            const response = usePost("http://localhost:8282/api/buy", { ticker, price, quantity });
            console.log(response);
        }
        alert(`Buying ${quantity} of ${ticker} at $${price}`);
        onBuy(ticker, price, quantity);
    };

    return (
        <div>
            <h2>{ticker}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: ${price}</p>
            <button onClick={handleBuy}>Buy</button>
        </div>
    );
}

export default BuyTicker