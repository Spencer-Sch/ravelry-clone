import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { DUMMY_DATA } from '../constants/dummy_data';

const ProjectDetails = () => {
  const params = useParams();

  const project = DUMMY_DATA.find(
    (project) => project.name === params.projectName
  );

  console.log(project);

  return (
    <>
      <Typography variant="h1">Project Details</Typography>
      <Typography variant="body1">{project.name}</Typography>
      <Typography variant="body1">{project.details.type}</Typography>
      <Typography variant="body1">{project.details.madeFor}</Typography>
      <Typography variant="body1">{project.details.currentDate}</Typography>
      <Typography variant="body1">{project.details.finishBy}</Typography>
      <Typography variant="body1">{project.details.sizeMade}</Typography>
      {project.details.toolsData.map((tool) => (
        <Typography variant="body1">{tool.tool}</Typography>
      ))}
      {project.details.materialsData.map((material) => (
        <Typography variant="body1">{material.material}</Typography>
      ))}
    </>
  );
};

export default ProjectDetails;
