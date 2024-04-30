import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, Typography, Button } from "@mui/material"; // Import Material-UI components

function ProjectCard({ project }) {
  return (
    <Card style={{ width: '80%', margin: 'auto', marginBottom: '20px' }}> {/* Inline styles */}
      <CardContent>
        <Typography variant="h5">{project.title}</Typography>
        <Typography variant="body2">{project.description}</Typography>
        <Link to={`/projects/${project.id}`} style={{ textDecoration: 'none' }}> {/* Inline styles for link */}
          <Button variant="contained" color="primary">Try</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;
