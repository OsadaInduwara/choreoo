import React, { useState, useEffect } from "react";
import api from "../api";
import Layout from "../components/Layout";
import { Button } from "@mui/material"; // Import Button from Material-UI

function ProfilePage() {
    const [username, setUsername] = useState("");

    useEffect(() => {
        // Fetch the user profile data
        api.get("/api/user/profile/")  // Update the endpoint here
            .then(response => {
                setUsername(response.data.username);
            })
            .catch(error => {
                console.error("Error fetching user profile:", error);
            });
    }, []);

    const handleLogout = () => {
        console.log("Logout button clicked");
        localStorage.clear();
        window.location.href = "/logout"; // Redirect to the logout page
    };

    return (
        <Layout>
            <div className="home-container">
                <div className="content">
                    <h2>Welcome to Profile</h2>
                    <p>Username: {username}</p>
                    <Button variant="contained" onClick={handleLogout}>Logout</Button> {/* Add the logout button */}
                </div>
            </div>
        </Layout>
    );
}

export default ProfilePage;
