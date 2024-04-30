// src/pages/App1.jsx

import React from 'react';
import Layout from "../../components/Layout";
import PredictionForm from '../../components/ml_app_comp/PredictionForm';
import ModelRetrainForm from '../../components/ml_app_comp/ModelRetrainForm'; // Import the ModelRetrainForm component

function App1() {
    return (
        <Layout>
            <div className="home-container">
                <div className="content">
                    <h2>Welcome to App1</h2>
                    <p>This is the landing page of the application.</p>
                    {/* Prediction Form component added below */}
                    <PredictionForm />
                    {/* Model Retrain Form component added below */}
                    <ModelRetrainForm />
                </div>
            </div>
        </Layout>
    );
}

export default App1;
