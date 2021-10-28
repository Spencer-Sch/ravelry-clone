import {
  Container,
  Grid,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import AppsIcon from '@material-ui/icons/Apps';

const useStyles = makeStyles({
  container: {
    background: grey[300],
  },
});

const MyAppBar = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="false" className={classes.container}>
      <Grid container justifyContent="center">
        <IconButton edge="start" color="inherit" aria-label="projects">
          <AppsIcon />
          <Typography>Projects</Typography>
        </IconButton>
      </Grid>
    </Container>
  );
};

export default MyAppBar;
