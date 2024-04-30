import React from "react";
import Layout from "../components/Layout";
import { Container, Typography, Grid } from "@mui/material"; // Import Material-UI components
import ProjectCard from "../components/PeojectCard"
// Dummy projects data for demonstration
const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of Project 1",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Description of Project 2",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Description of Project 3",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Description of Project 4",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Description of Project 5",
  },
  {
    id: 6,
    title: "Project 6",
    description: "Description of Project 6",
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <Layout>
      <div className="projects-container">
        <h1>Welcome to Projects</h1>
        <Grid container spacing={2}> {/* Container for the grid with spacing */}
          {projectsData.map((project) => (
            <Grid item xs={6} key={project.id}> {/* Each item takes 6 out of 12 (i.e., 50%) space on extra small screens */}
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}

export default Projects;
