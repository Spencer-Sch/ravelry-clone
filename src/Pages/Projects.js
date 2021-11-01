import React, { useState } from 'react';

import { Button, Grid, makeStyles, Typography } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import ProjectCard from '../components/Project/ProjectCard';
import NewProjectModal from '../components/Modal_NewProject/NewProjectModal';
import { DUMMY_DATA } from '../constants/dummy_data';

const useStyles = makeStyles({
  gridContainer: {
    padding: '1.5rem',
  },
  gridH2: {
    marginBottom: '3rem',
  },
  h2: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderBottom: 'solid black 1px',
  },
});

const Projects = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <NewProjectModal open={open} onClose={handleClose} />
      <Grid container className={classes.gridContainer}>
        <Grid item xs={12} className={classes.gridH2}>
          <Typography variant="h2" className={classes.h2}>
            My Projects
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddCircleOutlineIcon />}
            onClick={handleOpen}
          >
            new project
          </Button>
        </Grid>
        <Grid container item xs={10} spacing={4}>
          {DUMMY_DATA.map((project) => (
            <ProjectCard
              name={project.name}
              currentDate={project.details.currentDate}
              imageUrl={project.images[0].url}
              imageCaption={project.images[0].caption}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Projects;
