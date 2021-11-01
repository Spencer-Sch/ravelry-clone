import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
} from '@material-ui/core';

const crafts = [
  {
    value: 'CROCHET',
    label: 'Crochet',
  },
  {
    value: 'KNIT',
    label: 'Knit',
  },
  {
    value: 'SEW',
    label: 'Sew',
  },
  {
    value: 'QUILT',
    label: 'Quilt',
  },
  {
    value: 'SCRAP_BOOK',
    label: 'Scrap Book',
  },
  {
    value: 'GREETING_CARD',
    label: 'Greeting Card',
  },
];

const useStyles = makeStyles((theme) => ({
  h3: {
    fontSize: '2rem',
  },
  root: {
    width: '100%',
    '& .MuiTextField-root': {
      magin: theme.spacing(1),
    },
  },
  textField: {},
  typographyGrid: {
    marginBottom: theme.spacing(2),
  },
  detailsGrid: {
    marginBottom: theme.spacing(5),
  },
  selectGrid: {
    marginBottom: theme.spacing(5),
  },
  toolsGrid: {
    marginBottom: theme.spacing(5),
  },
  materialsGrid: {
    marginBottom: theme.spacing(5),
  },
  notesGrid: {
    marginBottom: theme.spacing(5),
  },
  categoryTypography: {
    fontSize: '1.5rem',
  },
}));

const StepTwoContent = (props) => {
  const classes = useStyles();
  const [craft, setCraft] = useState('');

  const handleSelectChange = (event) => {
    setCraft(event.target.value);
  };

  return (
    <>
      <Grid
        container
        item
        xs={12}
        alignItems="center"
        direction="column"
        className={classes.typographyGrid}
      >
        <Typography
          variant="h3"
          className={classes.h3}
          id="transition-modal-title2"
        >
          Project Details
        </Typography>
      </Grid>
      <Grid container item xs={8} alignItems="center" direction="column">
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container item xs={12} className={classes.detailsGrid}>
            <TextField
              color="primary"
              variant="standard"
              label="Name"
              id="project-name"
              fullWidth
              required
              className={classes.textField}
            />
            <TextField
              color="primary"
              variant="standard"
              label="Made for"
              id="project-name"
              fullWidth
              className={classes.textField}
            />
            <TextField
              color="primary"
              variant="standard"
              label="Finish by"
              id="project-name"
              fullWidth
              className={classes.textField}
            />
            <TextField
              color="primary"
              variant="standard"
              label="Size made"
              id="project-name"
              fullWidth
              className={classes.textField}
            />
            <TextField
              color="primary"
              variant="standard"
              label="Pattern from"
              id="project-name"
              fullWidth
              className={classes.textField}
            />
            <TextField
              color="primary"
              variant="standard"
              label="Pattern link"
              id="project-name"
              fullWidth
              className={classes.textField}
            />
            <TextField
              select
              color="primary"
              variant="standard"
              label="Craft"
              id="craft-type"
              value={craft}
              onChange={handleSelectChange}
              fullWidth
              required
              className={classes.textField}
            >
              {crafts.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid container item xs={12} className={classes.toolsGrid}>
            <Grid container item xs={12}>
              <Typography variant="h4" className={classes.categoryTypography}>
                Tools
              </Typography>
            </Grid>
            <Button variant="text" color="secondary">
              Add Tool
            </Button>
          </Grid>
          <Grid container item xs={12} className={classes.materialsGrid}>
            <Grid container item xs={12}>
              <Typography variant="h4" className={classes.categoryTypography}>
                Materials
              </Typography>
            </Grid>
            <Button variant="text" color="secondary">
              Add Materials
            </Button>
          </Grid>
          <Grid container item xs={12} className={classes.notesGrid}>
            <Grid container item xs={12}>
              <Typography variant="h4" className={classes.categoryTypography}>
                Project Notes
              </Typography>
            </Grid>
            <Button variant="text" color="secondary">
              Add Note
            </Button>
          </Grid>
          <Grid container item xs={12} justifyContent="flex-end">
            <Button
              color="secondary"
              variant="contained"
              onClick={props.onSaveChanges}
            >
              Save Changes
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default StepTwoContent;
