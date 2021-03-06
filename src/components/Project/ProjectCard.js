import React from 'react';

import {
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  makeStyles,
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  card: {
    // transition: 'boxShadow 0.05s linear, transform 0.05s linear',
    // '&:hover': {
    //   transform: 'translateY(-7px)',
    //   boxShadow: theme.shadows[14],
    // },
    transition: 'boxShadow 0.05s linear, transform 0.05s linear',
    '&:hover': {
      boxShadow: theme.shadows[15],
      transform: 'scale(1.004)',
    },
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
  cardMedia: {
    height: '9rem',
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Card elevation={5} className={classes.card}>
        <CardActionArea>
          <Link to={`/projects/${props.name}`} className={classes.link}>
            <CardHeader title={props.name} subheader={props.currentDate} />
            <CardMedia
              className={classes.cardMedia}
              image={props.imageUrl}
              title={props.imageCaption}
            />
          </Link>
        </CardActionArea>
        <CardActions className={classes.cardActions} disableSpacing>
          <IconButton aria-label="more options">
            <MoreVertIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProjectCard;
