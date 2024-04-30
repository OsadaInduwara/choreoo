import React from "react";
import { Typography, Paper } from "@mui/material";
import resumePDF from "../assets/resume.pdf"; // Import resume PDF
import Layout from "../components/Layout";

function Resume() {
  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Paper style={{ width: "100%", maxWidth: "1600px", padding: "20px", display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <Typography variant="h4" align="center" gutterBottom>
              My Resume
            </Typography>
            <iframe
              src={resumePDF + "#page=1"}
              title="Resume PDF"
              width="50%"
              height="800"
              style={{ border: "none", borderRadius: "5px", marginRight: "20px" }}
            />
         
          </div>
        </Paper>
      </div>
    </Layout>
  );
}

export default Resume;
