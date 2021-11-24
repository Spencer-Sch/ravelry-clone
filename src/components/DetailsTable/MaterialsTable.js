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

const useStyles = makeStyles((theme) => ({
  tableHeader: {
    backgroundColor: '#ddd',
    fontWeight: 'bold',
  },
  noteCell: {
    paddingLeft: 0,
  },
}));

const MaterialsTable = (props) => {
  const classes = useStyles();

  const project = DUMMY_DATA.find((project) => project.name === props.params);

  return (
    <TableContainer
      elevation={3}
      component={Paper}
      className={classes.tableContainer}
    >
      <Table aria-label="details table">
        <TableBody>
          <TableRow>
            <TableCell className={classes.tableHeader}>Materials</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {project.details.toolsData.map((tool) => `${tool.tool}, `)}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              {project.details.materialsData.map(
                (material) => `${material.material}, `
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>filler text</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>filler text</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>filler text</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>filler text</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MaterialsTable;
