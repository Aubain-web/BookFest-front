

export default function usePost(url, data) {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const postData = async () => {
            try {
                const res = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await res.json();
                setResponse(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        postData();
    }, [url, data]);

    return { response, loading, error };
}