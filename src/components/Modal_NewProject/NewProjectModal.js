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
    width: '40rem',
    backgroundColor: theme.palette.background.paper,
    border: `2px solid ${theme.palette.primary.main}`,
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
    maxHeight: '90vh',
  },
}));

const NewProjectModal = (props) => {
  const classes = useStyles();

  const [pageNum, setPageNum] = useState(1);

  const handleNextPage = () => {
    setPageNum(2);
  };

  const handleModalClose = () => {
    props.onClose();
    setTimeout(() => {
      setPageNum(1);
    }, 100);
  };

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.open}
        onClose={handleModalClose}
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
