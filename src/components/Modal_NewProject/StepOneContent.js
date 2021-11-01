import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
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
  selectGrid: {
    marginBottom: theme.spacing(5),
  },
  nameGrid: {
    marginBottom: theme.spacing(5),
  },
  patternGrid: {
    marginBottom: theme.spacing(5),
  },
  patternNameInput: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    width: '100%',
  },
}));

const StepOneContent = (props) => {
  const classes = useStyles();
  const [craft, setCraft] = useState('');
  const [patternUsed, setPatternUsed] = useState(false);

  const handleSelectChange = (event) => {
    setCraft(event.target.value);
  };

  const handleRadioChange = (event) => {
    event.target.value === 'pattern-true'
      ? setPatternUsed(true)
      : setPatternUsed(false);
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
          id="transition-modal-title"
        >
          Add New Project
        </Typography>
        <Typography variant="subtitle2" id="transition-modal-description">
          Fill out the form to add a new project
        </Typography>
      </Grid>
      <Grid container item xs={8} alignItems="center" direction="column">
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container item xs={12} className={classes.selectGrid}>
            <TextField
              select
              color="primary"
              variant="standard"
              label="Which craft?"
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
          <Grid container item xs={12} className={classes.nameGrid}>
            <TextField
              color="primary"
              variant="standard"
              label="Project Name"
              id="project-name"
              fullWidth
              required
              className={classes.textField}
            />
          </Grid>
          <Grid container item xs={12} className={classes.patternGrid}>
            <FormControl className={classes.formControl}>
              <RadioGroup onChange={handleRadioChange}>
                <FormControlLabel
                  value="pattern-true"
                  control={<Radio />}
                  label="I used a pattern"
                  className={classes.patternTrueRadio}
                />
                <TextField
                  color="primary"
                  variant="standard"
                  label="Enter the pattern name"
                  id="pattern-name"
                  fullWidth
                  disabled={!patternUsed}
                  className={classes.patternNameInput}
                />
                <TextField
                  color="primary"
                  variant="standard"
                  label="Enter link to the pattern"
                  id="pattern-link"
                  fullWidth
                  disabled={!patternUsed}
                  className={classes.patternNameInput}
                />
                <FormControlLabel
                  value="pattern-false"
                  control={<Radio />}
                  label="I didn't use a pattern"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid container item xs={12} justifyContent="flex-end">
            <Button
              color="secondary"
              variant="contained"
              onClick={props.onNext}
            >
              next
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
};

export default StepOneContent;
