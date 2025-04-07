import { useState } from 'react';

export function usePost() {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getToken = () => localStorage.getItem('bookfest_token');
    const setToken = (token) => localStorage.setItem('bookfest_token', token);

    const postData = async (url, data) => {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const token = getToken();
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
                setToken(result.token);
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

export default usePost;
