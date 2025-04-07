import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import usePost from "../hooks/usePost";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { postData, loading } = usePost();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError('Please fill in all fields');
            return;
        }

        console.log('Request Payload:', { email, password });

        try {
            const result = await postData("http://localhost:8181/api/auth/login", { email, password });

            if (result && result.token) {
                navigate('/dashboard');
            } else {
                setError('Invalid login credentials');
            }
        } catch (err) {
            setError('Login failed. Please try again.');
            console.error('Login error:', err);
        }
    };


    return (
        <div>
            <Header />
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ mt: 8, p: 4 }}>
                    <Typography component="h1" variant="h4" align="center" sx={{ mb: 3 }}>
                        Login
                    </Typography>

                    {error && (
                        <Typography color="error" align="center" sx={{ mb: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            disabled={loading}
                            sx={{ mt: 3, mb: 2 }}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                        <Box textAlign="center">
                            <Typography variant="body2">
                                Don't have an account?{' '}
                                <Button href="/signin" sx={{ p: 0 }} color="primary">
                                    Sign Up
                                </Button>
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </Container>
        </div>
    );
};

export default Login;
