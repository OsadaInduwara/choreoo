import React, { useState, useEffect } from 'react';
import api from '../../api';
import '../../styles/PredictionForm.css';

function PredictionForm() {
    const [inputs, setInputs] = useState({
        Year: '',
        Present_Price: '',
        Kms_Driven: '',
        Owner: '0',
        Fuel_Type_Diesel: '0',
        Fuel_Type_Petrol: '1',
        Seller_Type_Individual: '0',
        Transmission_Manual: '1'
    });
    const [prediction, setPrediction] = useState('');
    const [error, setError] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (showAlert) {
            console.log("Showing alert");  // Debug: Check if this gets logged
            const timer = setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showAlert]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prev => ({ ...prev, [name]: value }));
    };

    const isValid = () => {
        return inputs.Year >= 2000 && inputs.Year <= 2024 &&
               inputs.Present_Price >= 2000 &&
               inputs.Year.trim() !== '' &&
               inputs.Present_Price.trim() !== '' &&
               inputs.Kms_Driven.trim() !== '';
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isValid()) {
            setError('Please fill in all fields correctly.');
            setShowAlert(true);
            return;
        }
        try {
            const response = await api.post('/ml_apps/predict/', inputs);
            setPrediction(`Predicted Price: ${response.data.prediction}`);
            setError(''); // Clear previous errors
            setShowAlert(false); // Ensure alert is not shown when not needed
        } catch (error) {
            setError('Failed to fetch prediction: ' + (error.response ? error.response.data : error.message));
            setShowAlert(true);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h2>Predict Car Price</h2>
            {showAlert && (
                <div className="alert-box">
                    {error}
                </div>
            )}
            <div><label>Year (2000-2024):</label><input type="number" name="Year" value={inputs.Year} min="2000" max="2024" onChange={handleChange} /></div>
            <div><label>Present Price (min 2000):</label><input type="number" name="Present_Price" step="0.01" min="2000" value={inputs.Present_Price} onChange={handleChange} /></div>
            <div><label>Kms Driven:</label><input type="number" name="Kms_Driven" value={inputs.Kms_Driven} onChange={handleChange} /></div>
            <div><label>Owner:</label><select name="Owner" value={inputs.Owner} onChange={handleChange}>{['0', '1'].map(o => <option key={o} value={o}>{o}</option>)}</select></div>
            <div><label>Fuel Type Diesel:</label><select name="Fuel_Type_Diesel" value={inputs.Fuel_Type_Diesel} onChange={handleChange}>{['0', '1'].map(f => <option key={f} value={f}>{f}</option>)}</select></div>
            <div><label>Fuel Type Petrol:</label><select name="Fuel_Type_Petrol" value={inputs.Fuel_Type_Petrol} onChange={handleChange}>{['0', '1'].map(f => <option key={f} value={f}>{f}</option>)}</select></div>
            <div><label>Seller Type Individual:</label><select name="Seller_Type_Individual" value={inputs.Seller_Type_Individual} onChange={handleChange}>{['0', '1'].map(s => <option key={s} value={s}>{s}</option>)}</select></div>
            <div><label>Transmission Manual:</label><select name="Transmission_Manual" value={inputs.Transmission_Manual} onChange={handleChange}>{['0', '1'].map(t => <option key={t} value={t}>{t}</option>)}</select></div>
            <button type="submit" disabled={!isValid()}>Predict</button>
            {prediction && <div>{prediction}</div>}
        </form>
    );
}

export default PredictionForm;
