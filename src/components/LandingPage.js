import React from 'react';
import { Typography, Button } from '@mui/material';
import '../styles.css'; // Assuming you have the styles in a separate CSS file

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="text-section">
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
          Your AI-powered Skin Health Companion
        </Typography>
        <p>
          Our AI-powered assistant provides real-time skin analysis to help you detect early signs of dermatological conditions.
          Leverage cutting-edge computer vision and machine learning technologies to assess your skin's health and get personalized recommendations.
        </p>
        <div className="button-group">
        <Button
            variant="contained"
            sx={{
            backgroundColor: '#22DD8F',
            color: '#000',
            fontWeight: 'bold', 
            fontSize: '20px',  
            textTransform: 'none',
            padding: '10px 20px',
            marginLeft: '0', // Align left
            }}
            className="button-left"
        >
            Register
        </Button>
        
        <Button
            variant="contained"
            sx={{
            backgroundColor: '#EDDA46',
            color: '#000', 
            fontWeight: 'bold', 
            fontSize: '20px', 
            textTransform: 'none',
            padding: '10px 20px',
            marginRight: '0', // Align right
            }}
            className="button-right"
        >
            Start Your Free Trial
        </Button>    
        </div>
      </div>
      <div className="image-section">
        <img
          src={require('../images/rect-1-image.png')} // Path to the image in the images folder
          alt="Skin Analysis"
          className="right-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;

