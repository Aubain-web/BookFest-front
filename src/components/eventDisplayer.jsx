import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Box, CircularProgress } from '@mui/material';
import useFetch from "../hooks/useFetch";
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog, { ModalDialogProps } from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';

const EventDisplayer = () => {
    const { data, loading, error } = useFetch("http://localhost:8282/api/events/allevents");

    const defaultEvents = [
        {
            id: 1,
            name: "Book Fair 2025",
            date: "April 15, 2025",
            time: "10:00 AM",
            location: "City Library",
            price: "Free Entry",
            description: "Annual book fair featuring authors from around the world",
            imageUrl: "https://source.unsplash.com/random/300×200/?books"
        },
        {
            id: 2,
            name: "Poetry Reading",
            date: "April 20, 2025",
            time: "7:00 PM",
            location: "Arts Center",
            price: "$5",
            description: "Evening of poetry readings from acclaimed poets",
            imageUrl: "https://source.unsplash.com/random/300×200/?poetry"
        },
        {
            id: 3,
            name: "Author Meet & Greet",
            date: "May 5, 2025",
            time: "2:00 PM",
            location: "Bookstore Downtown",
            price: "$10",
            description: "Meet your favorite authors and get your books signed",
            imageUrl: "https://source.unsplash.com/random/300×200/?author"
        }
    ];

    const displayEvents = (data && data.length > 0) ? data : defaultEvents;

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
                <CircularProgress />
            </Box>
        );
    }

    if (error) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 5 }}>
                <Typography color="error">Failed to load events. Showing default events.</Typography>
            </Box>
        );
    }

    return (
        <Box sx={{ flexGrow: 1, padding: 3 }}>
            <Button
                variant="outlined"
                color="neutral"
                onClick={() => {
                    setVariant('outlined');
                }}
            >
            <Grid container spacing={4}>
                {displayEvents.map((event, index) => (
                    <Grid item xs={12} sm={6} md={4} key={event.id || index}>
                        <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={event.imageUrl}
                                alt={event.name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {event.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {event.time} - {event.location}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {event.price} $
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {event.date}
                                </Typography>
                                <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
                                    {event.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            </Button>
        </Box>
    );
};

export default EventDisplayer;