import React from "react";
import Layout from "../components/Layout";
import ImageSlider from "../components/ImageSlider";
import { Typography, Grid, Link, Box } from "@mui/material"; // Using Material-UI components for styling
import "../styles/Home.css";

function Home() {
  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box p={2} bgcolor="#f0f0f0">
          <Typography variant="h3">Welcome to my professional portfolio!</Typography>
          <Typography variant="h4">Osada Induwara</Typography>
          <Typography variant="h6">Data Scientist & Software Engineer</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} bgcolor="#f9f9f9">
            <Typography variant="h4">About Me</Typography>
            <Typography>
              With over 1.5 years of experience in Software Engineering and Business Intelligence, I've been involved in creating dashboard web applications and building machine learning models to solve real-world problems. I am passionate about AI and always eager to learn about the newest technologies.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box p={2} bgcolor="#f9f9f9">
            <Typography variant="h4">Skills</Typography>
            <ul>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Data Analysis</li>
              <li>Natural Language Processing (NLP)</li>
              <li>Web Development (Django, React)</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2} bgcolor="#f9f9f9">
            <Typography variant="h4">Projects</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <ProjectItem title="Dashboard Web Application" description="A Django backend with a Bootstrap frontend and MySQL database. It's a career guidance system powered by machine learning." />
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectItem title="Energy Usage Forecasting" description="Developed regression models for electricity usage forecasting of signal towers using AI techniques." />
              </Grid>
              <Grid item xs={12} md={4}>
                <ProjectItem title="Geo Data Visualization" description="Designed and developed interactive data visualizations using Apache Superset to showcase geographic data." />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2} bgcolor="#f9f9f9">
            <Typography variant="h4">Education</Typography>
            <ul>
              <li>Bachelor of Science in Computer Science (Software Engineering) - Wolverhampton University (2023)</li>
              <li>National Diploma Technology in Information Technology (NDT) - Institute of Technology University of Moratuwa (2019 - 2022)</li>
              <li>GCE Advanced Level (Physical Science Stream) - Dutugemunu College Buttala (2017)</li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2} bgcolor="#f9f9f9">
            <Typography variant="h4">Contact Me</Typography>
            <Typography>Feel free to contact me for any inquiries or collaboration opportunities.</Typography>
            <Typography>Email: <Link href="mailto:ingallaba@gmail.com">ingallaba@gmail.com</Link></Typography>
            <Typography>Phone: +94 77 25 65 240</Typography>
            <Typography>LinkedIn: <Link href="https://www.linkedin.com/in/osadainduwara" target="_blank" rel="noopener noreferrer">Osada Induwara</Link></Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box p={2}>
            <ImageSlider />
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

const ProjectItem = ({ title, description }) => (
  <Box p={2} bgcolor="#f9f9f9">
    <Typography variant="h5">{title}</Typography>
    <Typography>{description}</Typography>
  </Box>
);

export default Home;
