import React, { useState } from 'react';
import { usePost } from "../hooks/usePost";

const BuyTicker = ({ ticker, price, initialQuantity = 1, onBuy }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const { postData, loading, error } = usePost();

    const add = () => {
        setQuantity(prev => prev + 1);
    };

    const subtract = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleBuy = async () => {
        try {
            const response = await postData("http://localhost:8181/api/authbuy-ticket", { ticker, price, quantity });
            console.log(response);
            alert(`Buying ${quantity} of ${ticker} at $${price}`);
            if (onBuy) onBuy(ticker, price, quantity);
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };

    return (
        <div>
            <h2>{ticker}</h2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={subtract}>-</button>
                <p style={{ margin: '0 10px' }}>Quantity: {quantity}</p>
                <button onClick={add}>+</button>
            </div>
            <p>Price: ${price}</p>
            <button onClick={handleBuy} disabled={loading}>
                {loading ? 'Processing...' : 'Buy'}
            </button>
            {error && <p style={{ color: 'red' }}>{error.message}</p>}
        </div>
    );
}

export default BuyTicker;