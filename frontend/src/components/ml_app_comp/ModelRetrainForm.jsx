import React, { useState } from 'react';
import api from '../../api';
import '../../styles/ModelRetrainForm.css';

function ModelRetrainForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!file) {
            alert('Please upload a file.'); // Popup alert for no file uploaded
            return;
        }

        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await api.post('/ml_apps/retrain/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setSuccess(true);
            setError('');
            alert('Model retrained successfully!'); // Popup alert for success
        } catch (error) {
            setError('Failed to retrain model: ' + (error.response ? error.response.data.error : error.message));
            alert('Failed to retrain model: ' + (error.response ? error.response.data.error : error.message)); // Popup alert for error
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Retrain Model</h2>
            {error && <div className="alert-box">{error}</div>}
            {success && <div className="success-box">Model retrained successfully!</div>}
            <div>
                <label>Upload Dataset:</label>
                <input type="file" accept=".csv, .xlsx" onChange={handleFileChange} />
            </div>
            <button type="submit">Retrain Model</button>
        </form>
    );
}

export default ModelRetrainForm;
