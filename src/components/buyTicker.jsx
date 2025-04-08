import React, { useState } from 'react';
import { usePost } from "../hooks/usePost";

const BuyTicker = ({ ticker,eventID, price, initialQuantity = 1, onBuy }) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const { postData, loading, error } = usePost();
    const [buyStatus, setBuyStatus] = useState({ success: false, message: null });
    const buyerEmail = localStorage.getItem('bookfest_user').email;

    const add = () => {
        setQuantity(prev => prev + 1);
    };

    const subtract = () => {
        setQuantity(prev => Math.max(1, prev - 1));
    };

    const handleBuy = async () => {
        try {
            setBuyStatus({ success: false, message: null });


            setTimeout(() => {
                console.log(`Simulating purchase of ${quantity} ${ticker} at $${price}`);
                setBuyStatus({
                    success: true,
                    message: `Successfully purchased ${quantity} tickets for ${ticker}!`
                });
                if (onBuy) onBuy(ticker, price, quantity);
            }, 1000);


            const response = await postData("http://localhost:8181/api/authbuy-ticket", {
                ticker,
                price,
                quantity
            });
            console.log(response);
            setBuyStatus({
                success: true,
                message: `Successfully purchased ${quantity} tickets for ${ticker}!`
            });
            if (onBuy) onBuy(ticker, price, quantity);

        } catch (err) {
            console.error("Purchase error:", err);
            setBuyStatus({
                success: false,
                message: `Error: ${err.message || 'Failed to complete purchase. Please try again.'}`
            });
        }
    };

    return (
        <div style={{
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            padding: '16px',
            marginTop: '16px',
            backgroundColor: '#f9f9f9'
        }}>
            <h3 style={{ marginTop: 0 }}>Purchase Tickets</h3>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                <button
                    onClick={subtract}
                    style={{
                        padding: '4px 12px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: 'black',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                >-</button>
                <p style={{ margin: '0 16px', fontSize: '16px' }}>Quantity: {quantity}</p>
                <button
                    onClick={add}
                    style={{
                        padding: '4px 12px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        backgroundColor: 'black',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                >+</button>
            </div>
            <p style={{ fontSize: '16px', marginBottom: '16px' }}>Total: ${(price * quantity).toFixed(2)}</p>
            <button
                onClick={handleBuy}
                disabled={loading || buyStatus.success}
                style={{
                    padding: '8px 16px',
                    fontSize: '16px',
                    cursor: loading || buyStatus.success ? 'default' : 'pointer',
                    backgroundColor: buyStatus.success ? '#4caf50' : '#1976d2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    width: '100%',
                    opacity: loading || buyStatus.success ? 0.7 : 1
                }}
            >
                {loading ? 'Processing...' : buyStatus.success ? 'Purchased!' : 'Buy Now'}
            </button>

            {buyStatus.message && (
                <div style={{
                    marginTop: '12px',
                    padding: '8px',
                    borderRadius: '4px',
                    backgroundColor: buyStatus.success ? '#e8f5e9' : '#ffebee',
                    color: buyStatus.success ? '#2e7d32' : '#c62828'
                }}>
                    {buyStatus.message}
                </div>
            )}

            {error && !buyStatus.message && (
                <div style={{
                    marginTop: '12px',
                    padding: '8px',
                    borderRadius: '4px',
                    backgroundColor: '#ffebee',
                    color: '#c62828'
                }}>
                    {error.message}
                </div>
            )}
        </div>
    );
}

export default BuyTicker;