import Layout from "../components/Layout";

function About() {
  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Box p={2} bgcolor="#f0f0f0">
          <Typography variant="h3">about me</Typography>
          <Typography variant="h6">I wanted to integrate more machine learning application to this app, But I couldnt add all of them.</Typography>
          </Box>
        </Grid>       

      </Grid>
    </Layout>
    );
}

export default About;
