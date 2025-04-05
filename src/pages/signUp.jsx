import React, { useState } from 'react';
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,
    Grid,
    Link,
    Checkbox,
    FormControlLabel,
    InputAdornment,
    IconButton
} from '@mui/material';
import {
    Visibility,
    VisibilityOff
} from '@mui/icons-material';

const SignUp = () => {
    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        terms: false
    });
    const [errors, setErrors] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!formValues.username) newErrors.username = 'First name is required';
        if (!formValues.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            newErrors.email = 'Invalid email';
        }
        if (!formValues.password) {
            newErrors.password = 'Password is required';
        } else if (formValues.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }
        if (!formValues.terms) newErrors.terms = 'You must accept the terms';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted:', formValues);
            try {
                const response = await fetch("http://localhost:8181/api/users/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formValues)
                });

                if (response.ok) {
                    console.log('Registration successful');
                } else {
                    console.error('Registration failed');
                }
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{
                mt: 8,
                p: 4,
                boxShadow: 3,
                borderRadius: 2,
                backgroundColor: 'background.paper'
            }}>
                <Typography variant="h4" align="center" gutterBottom>
                    Create an Account
                </Typography>

                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="username"
                                name="username"
                                value={formValues.username}
                                onChange={handleChange}
                                error={!!errors.username}
                                helperText={errors.username}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formValues.email}
                                onChange={handleChange}
                                error={!!errors.email}
                                helperText={errors.email}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                type={showPassword ? 'text' : 'password'}
                                value={formValues.password}
                                onChange={handleChange}
                                error={!!errors.password}
                                helperText={errors.password}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        name="terms"
                                        checked={formValues.terms}
                                        onChange={handleChange}
                                        color="primary"
                                    />
                                }
                                label={
                                    <Typography variant="body2">
                                        I agree to the <Link href="#">Terms and Conditions</Link>
                                    </Typography>
                                }
                            />
                            {errors.terms && (
                                <Typography color="error" variant="body2">
                                    {errors.terms}
                                </Typography>
                            )}
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, py: 1.5 }}
                        disabled={Object.keys(errors).length > 0}
                    >
                        Sign Up
                    </Button>

                    <Typography align="center">
                        Already have an account? <Link href="/login">Sign In</Link>
                    </Typography>
                </form>
            </Box>
        </Container>
    );
};

export default SignUp;