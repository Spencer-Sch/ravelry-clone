import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { Grid, Paper, Slide } from '@material-ui/core';

import StepOneContent from './StepOneContent';
import StepTwoContent from './StepTwoContent';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2, 4, 3),
  },
}));

const NewProjectModal = (props) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={props.onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Slide direction="up" in={props.open}>
          <Paper variant="elevation" elevation={5} className={classes.paper}>
            <Grid container justifyContent="center">
              {pageNum === 1 && <StepOneContent onNext={handleNextPage} />}
              {pageNum === 2 && (
                <StepTwoContent onSaveChanges={handleModalClose} />
              )}
            </Grid>
          </Paper>
        </Slide>
      </Modal>
    </>
  );
};

export default NewProjectModal;
