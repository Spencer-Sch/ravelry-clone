import React from 'react';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@material-ui/core';

import { DUMMY_DATA } from '../../constants/dummy_data';

const useStyles = makeStyles((theme) => ({}));

const DetailsTable = (props) => {
  const classes = useStyles();

  const project = DUMMY_DATA.find((project) => project.name === props.params);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="details table">
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Name
            </TableCell>
            <TableCell>{project.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Type
            </TableCell>
            <TableCell>{project.details.type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Made for
            </TableCell>
            <TableCell>{project.details.madeFor}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Started on
            </TableCell>
            <TableCell>{project.details.currentDate}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Finish by
            </TableCell>
            <TableCell>{project.details.finishBy}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Size made
            </TableCell>
            <TableCell>{project.details.sizeMade}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Tools used
            </TableCell>
            <TableCell>
              {project.details.toolsData.map((tool) => `${tool.tool}, `)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Materials used
            </TableCell>
            <TableCell>
              {project.details.materialsData.map(
                (material) => `${material.material}, `
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Pattern name
            </TableCell>
            <TableCell>{project.details.patternData.patternName}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Pattern link
            </TableCell>
            <TableCell>
              <a
                href={project.details.patternData.patternLink}
                target="_blank"
                rel="noreferrer"
              >
                {project.details.patternData.patternLink}
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Pattern author
            </TableCell>
            <TableCell>{project.details.patternData.patternAuthor}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Notes
            </TableCell>
            <TableCell>
              {project.details.projectNotes.map((note) => note.note)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailsTable;
