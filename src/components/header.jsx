import BlurOnIcon from '@mui/icons-material/BlurOn';

const Header = () => {
return(
<Box sx={{ flexGrow: 1 , color : "#76199b"}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="BlurOn"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BookFest
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>);
};

export default Header;