import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <Typography variant="h4">RAVELRY</Typography>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
