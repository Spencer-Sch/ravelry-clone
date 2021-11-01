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

const Project = () => {
  const classes = useStyles();
  return (
    <Grid item xs={3}>
      <Card elevation={5}>
        <CardActionArea>
          <CardHeader title="Test 1" subheader="Sep 5, 2020" />
          <CardMedia
            className={classes.cardMedia}
            image="https://images.pexels.com/photos/2070676/pexels-photo-2070676.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            title="placeholder"
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
