import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box } from '@mui/material';

const EventDisplayer = ({ events }) => {
    const defaultEvents = [
        {
            id: 1,
            title: "Book Fair 2025",
            date: "April 15, 2025",
            description: "Annual book fair featuring authors from around the world",
            image: "https://source.unsplash.com/random/300×200/?books"
        },
        {
            id: 2,
            title: "Poetry Reading",
            date: "April 20, 2025",
            description: "Evening of poetry readings from acclaimed poets",
            image: "https://source.unsplash.com/random/300×200/?poetry"
        },
        {
            id: 3,
            title: "Author Meet & Greet",
            date: "May 5, 2025",
            description: "Meet your favorite authors and get your books signed",
            image: "https://source.unsplash.com/random/300×200/?author"
        }
    ];

    const displayEvents = events || defaultEvents;

    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Grid container spacing={4}>
                {displayEvents.map((event) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id}>
                        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={event.image}
                                alt={event.title}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {event.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {event.date}
                                </Typography>
                                <Typography variant="body2" color="text.primary">
                                    {event.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default EventDisplayer;