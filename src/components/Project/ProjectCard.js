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

const useStyles = makeStyles({
  cardMedia: {
    height: '9rem',
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
});

const Project = (props) => {
  console.log('this is the props coming in!', props);
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Card elevation={5}>
        <CardActionArea>
          <CardHeader
            title={props.name}
            subheader={props.details.currentDate}
          />
          <CardMedia
            className={classes.cardMedia}
            image={props.images[0].url}
            title={props.images[0].caption}
          />
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

export default Project;
