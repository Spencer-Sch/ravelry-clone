import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import AppsIcon from '@material-ui/icons/Apps';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
  container: {
    background: grey[300],
  },
  link: {
    color: 'black',
    textDecoration: 'none',
    // fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  active: {
    color: 'black',
    textDecoration: 'none',
    borderBottom: 'solid black 2px',
    // fontWeight: 'bold',
    fontSize: '1.2rem',
  },
});

const MyAppBar = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="false" className={classes.container}>
      <Grid container justifyContent="center">
        <NavLink
          className={classes.link}
          activeClassName={classes.active}
          to="/projects"
        >
          <IconButton edge="start" color="inherit" aria-label="projects">
            <AppsIcon />
            <Typography className={classes.link} variant="p">
              Projects
            </Typography>
          </IconButton>
        </NavLink>
      </Grid>
    </Container>
  );
};

export default MyAppBar;
