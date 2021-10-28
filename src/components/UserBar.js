import { Container, Grid, IconButton, Typography } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';

const MyAppBar = () => {
  return (
    <Container maxWidth="false">
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
