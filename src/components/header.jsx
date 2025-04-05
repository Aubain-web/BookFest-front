import { AppBar, Box, Toolbar, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BlurOnIcon from '@mui/icons-material/BlurOn';

const Header = () => {
    return (
        <Box sx={{ flexGrow: 1, color: "#76199b" }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="BlurOn"
                        sx={{ mr: 2 }}
                    >
                        <BlurOnIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        BookFest
                    </Typography>
                    <Button color="inherit" href="/login">Login</Button>
                    <Button color="inherit" href="/signUp">Sign Up</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;