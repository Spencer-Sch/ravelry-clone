import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import { DUMMY_DATA } from '../constants/dummy_data';

const useStyles = makeStyles((theme) => ({
  containerGrid: {
    padding: '1.5rem',
  },
  h2Grid: {
    marginBottom: '3rem',
  },
  h2: {
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
  detailsItemGrid: {
    borderBottom: 'solid 1px #ddd',
    marginBottom: '1rem',
  },
  detailsItemLabel: {
    fontWeight: 'bold',
    marginRight: '1rem',
    textTransform: 'uppercase',
  },
  detailsItem: {},
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
    <Grid
      container
      xs={12}
      justifyContent="center"
      className={classes.containerGrid}
    >
      <Grid item xs={12} justifyContent="center" className={classes.h2Grid}>
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
          {/* //////////////////////////////////////////////// */}
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItemLabel}>
              Type
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItem}>
              {project.details.type}
            </Typography>
          </Grid>
          {/* //////////////////////////////////////////////// */}
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItemLabel}>
              Made for
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItem}>
              {project.details.madeFor}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItemLabel}>
              Started date
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItem}>
              {project.details.currentDate}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItemLabel}>
              Goal finish date
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItem}>
              {project.details.finishBy}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItemLabel}>
              Size made
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItem}>
              {project.details.sizeMade}
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItemLabel}>
              Tools used
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            {project.details.toolsData.map((tool) => (
              <Typography variant="body1" className={classes.detailsItem}>
                {tool.tool}
              </Typography>
            ))}
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            <Typography variant="body1" className={classes.detailsItemLabel}>
              Materials used
            </Typography>
          </Grid>
          <Grid
            container
            item
            xs={6}
            // justifyContent="center"
            className={classes.detailsItemGrid}
          >
            {project.details.materialsData.map((material) => (
              <Typography variant="body1" className={classes.detailsItem}>
                {material.material}
              </Typography>
            ))}
          </Grid>
        </Grid>
        <Grid
          xs={2}
          item
          justifyContent="center"
          className={classes.actionsGrid}
        >
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
