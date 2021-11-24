import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { DUMMY_DATA } from '../constants/dummy_data';
import DetailsTable from '../components/DetailsTable/DetailsTable';
import MaterialsTable from '../components/DetailsTable/MaterialsTable';

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
  centerColGrid: {},
  detailsTitleGrid: {
    marginBottom: theme.spacing(3),
  },
  h3: {},
  leftColGrid: {
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
  rightColGrid: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2),
    // backgroundColor: 'red',
  },
  buttonGrid: {
    // backgroundColor: '#999',
    // marginBottom: theme.spacing(5),
  },
  button: {
    marginBottom: '0.5rem',
    // margin: '0 auto',
    // width: '40%',
  },
  deleteButton: {
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.secondary.main,
    },
  },
  materialsGrid: {
    // margin: '0 auto',
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
        xs={12}
        // xs={9}
        // xs={8}
        justifyContent="center"
        className={classes.contentgrid}
      >
        <Grid
          xs={4}
          container
          item
          justifyContent="center"
          className={classes.leftColGrid}
        >
          <Grid xs={4} className={classes.imageGrid}>
            <Paper className={classes.imagePaper}>
              <InsertPhotoIcon className={classes.imageIcon} />
            </Paper>
          </Grid>
        </Grid>
        <Grid
          xs={4}
          // container
          item
          justifyContent="center"
          className={classes.centerColGrid}
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
          <Grid xs={12}>
            <DetailsTable params={params.projectName} />
          </Grid>
        </Grid>
        <Grid
          xs={4}
          // item
          container
          // alignItems="flex-start"
          justifyContent="center"
          className={classes.rightColGrid}
        >
          <Grid
            xs={8}
            // item
            container
            direction="column"
            className={classes.buttonGrid}
          >
            <Button
              // fullWidth
              variant="outlined"
              color="secondary"
              className={classes.button}
              startIcon={<EditIcon />}
              // onClick={handleOpen}
            >
              Edit
            </Button>
            <Button
              // fullWidth
              variant="outlined"
              color="secondary"
              className={classes.button}
              startIcon={<AddToPhotosIcon />}
              // onClick={handleOpen}
            >
              Add Photos
            </Button>
            <Button
              // fullWidth
              variant="text"
              color="secondary"
              className={`${classes.button} ${classes.deleteButton}`}
              startIcon={<DeleteIcon />}
              // onClick={handleOpen}
            >
              Delete
            </Button>
          </Grid>
          <Grid xs={8} className="materialsGrid">
            <MaterialsTable params={params.projectName} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectDetails;
