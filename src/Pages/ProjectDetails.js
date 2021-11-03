import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { DUMMY_DATA } from '../constants/dummy_data';
import DetailsTable from '../components/DetailsTable/DetailsTable';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    padding: '1.5rem',
  },
  h2Grid: {
    marginBottom: '3rem',
  },
  h2: {
    width: '100%',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderBottom: 'solid black 1px',
  },
  contentgrid: {},
  detailsGrid: {},
  detailsTitleGrid: {
    marginBottom: theme.spacing(3),
  },
  h3: {},
  imageContainerGrid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
  },
  imageGrid: {
    width: '100%',
  },
  imagePaper: {
    border: 'solid 2px black',
    height: '10rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  imageIcon: {
    fontSize: '3rem',
  },
  actionsGrid: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
  },
  button: {
    marginBottom: '0.5rem',
  },
  deleteButton: {
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.secondary.main,
    },
  },
}));

const ProjectDetails = () => {
  const params = useParams();
  const classes = useStyles();

  const project = DUMMY_DATA.find(
    (project) => project.name === params.projectName
  );

  return (
    <Grid container justifyContent="center" className={classes.containerGrid}>
      <Grid
        item
        container
        xs={12}
        justifyContent="center"
        className={classes.h2Grid}
      >
        <Typography variant="h2" className={classes.h2}>
          {project.name}
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={8}
        justifyContent="center"
        className={classes.contentgrid}
      >
        <Grid
          xs={2}
          container
          item
          justifyContent="center"
          className={classes.imageContainerGrid}
        >
          <Grid className={classes.imageGrid}>
            <Paper className={classes.imagePaper}>
              <InsertPhotoIcon className={classes.imageIcon} />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          xs={6}
          container
          item
          justifyContent="center"
          className={classes.detailsGrid}
        >
          <Grid
            container
            item
            xs={12}
            justifyContent="center"
            className={classes.detailsTitleGrid}
          >
            <Typography variant="h3" className={classes.h3}>
              Details
            </Typography>
          </Grid>
          <DetailsTable params={params.projectName} />
        </Grid>
        <Grid xs={2} item className={classes.actionsGrid}>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<EditIcon />}
            // onClick={handleOpen}
          >
            Edit
          </Button>
          <Button
            fullWidth
            variant="outlined"
            color="secondary"
            className={classes.button}
            startIcon={<AddToPhotosIcon />}
            // onClick={handleOpen}
          >
            Add Photos
          </Button>
          <Button
            fullWidth
            variant="text"
            color="secondary"
            className={`${classes.button} ${classes.deleteButton}`}
            startIcon={<DeleteIcon />}
            // onClick={handleOpen}
          >
            Delete
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
