import React from 'react';
//import PropTypes from 'prop-types';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import Header from '../components/header';
import { UseTheme } from '../utils/useTheme';
import { ThemeProvider } from '@mui/material/styles';

function DashboardContent() {
    const userEvents = [
        { id: 1, name: "Book Fair 2025", registered: "Yes", date: "April 15, 2025" },
        { id: 2, name: "Poetry Reading", registered: "No", date: "April 20, 2025" },
        { id: 3, name: "Author Meet & Greet", registered: "Yes", date: "May 5, 2025" }
    ];

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Header />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography component="h1" variant="h4" color="primary" gutterBottom>
                                Dashboard
                            </Typography>
                            <Typography component="p" variant="body1">
                                Welcome to your BookFest dashboard. Here you can manage your event registrations.
                            </Typography>
                        </Paper>
                    </Grid>

                    {/* User events */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2 }}>
                            <Typography component="h2" variant="h6" color="primary" gutterBottom>
                                Your Events
                            </Typography>
                            <Box sx={{ width: '100%', overflow: 'auto' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                                    <thead>
                                    <tr>
                                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Event Name</th>
                                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Date</th>
                                        <th style={{ textAlign: 'left', padding: '8px', borderBottom: '1px solid #ddd' }}>Registered</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {userEvents.map((event) => (
                                        <tr key={event.id}>
                                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{event.name}</td>
                                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{event.date}</td>
                                            <td style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>{event.registered}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

function Dashboard() {
    return (
        <ThemeProvider theme={UseTheme}>
            <DashboardContent />
        </ThemeProvider>
    );
}

export default Dashboard;