import React from 'react';
import { usePost } from "../hooks/usePost";

const BuyTicker = ({ ticker, price, quantity, onBuy }) => {
    const { postData, loading, error } = usePost();

    const handleBuy = async () => {
        try {
            const response = await postData("http://localhost:8181/api/authbuy-ticket", { ticker, price, quantity });
            console.log(response);
            alert(`Buying ${quantity} of ${ticker} at $${price}`);
            onBuy(ticker, price, quantity);
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <h2>{ticker}</h2>
            <button onclick={add}>+</button><p>Quantity: {quantity}</p><button><button onclick={subtract}>-</button>
            <p>Price: ${price}</p>
            <button onClick={handleBuy} disabled={loading}>
                {loading ? 'Processing...' : 'Buy'}
            </button>
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
    );
}

export default BuyTicker;