import {
  AppBar,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyle = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  h1: {
    textTransform: 'uppercase',
    fontSize: '3rem',
    padding: '0.5rem',
  },
  buttonDiv: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const NavBar = () => {
  const classes = useStyle();

  return (
    <AppBar color="primary" position="static">
      <Toolbar className={classes.toolbar}>
        <Grid container item xs={11}>
          <Typography variant="h1" className={classes.h1}>
            Skein Queen
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={1}
          justifyContent="space-evenly"
          className={classes.buttonGrid}
        >
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon fontSize="large" />
          </IconButton>
          <IconButton edge="end" color="inherit" aria-label="menu">
            <AccountCircleIcon fontSize="large" />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
