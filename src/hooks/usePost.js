import { useState } from 'react';

export default function usePost() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (url, data) => {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const token = localStorage.getItem('bookfest_token');
            const headers = {
                'Content-Type': 'application/json',
                ...(token && { 'Authorization': `Bearer ${token}` })
            };

            const res = await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                throw new Error(errorData.message || 'Network response was not ok');
            }

            const result = await res.json();
            setResponse(result);

            if (result.token) {
                localStorage.setItem('bookfest_token', result.token);
            }

            return result;
        } catch (error) {
            setError(error);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return { postData, response, loading, error };
}