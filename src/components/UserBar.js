import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';

const MyAppBar = () => {
  return (
    <Container maxWidth="false">
      <IconButton edge="start" color="inherit" aria-label="projects">
        <AppsIcon />
      </IconButton>
    </Container>
  );
};

export default MyAppBar;
