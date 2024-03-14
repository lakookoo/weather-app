import React, { useState, useEffect } from 'react';
import { Modal, Button, Typography, Box } from '@mui/material';

const LocationModal = ({ isOpen, onRequestClose, onLocationChange }) => {
  const [permissionDenied, setPermissionDenied] = useState(false);
  
  const handleLocationPermission = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("latitude, longitude", latitude, longitude);
        onLocationChange({ latitude, longitude });
        onRequestClose();
      },
      (error) => {
        if (error.code === error.PERMISSION_DENIED) {
          setPermissionDenied(true);
        } else {
          console.error('Error getting location:', error);
        }
      }
    );
  };

  const handleRandomLocation = () => {
    const randomLatitude = Math.random() * 180 - 90;
    const randomLongitude = Math.random() * 360 - 180;
    onLocationChange({ latitude: randomLatitude, longitude: randomLongitude });
    onRequestClose();
  };

  return (
    <Modal
      open={isOpen && !permissionDenied}
      onClose={onRequestClose}
      aria-labelledby="location-modal-title"
      aria-describedby="location-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'white',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h4" id="location-modal-title" sx={{ mb: 2 }}>
          Allow access to your location?
        </Typography>
        <Button variant="contained" onClick={handleLocationPermission} sx={{ mr: 2 }}>
          Yes
        </Button>
        <Button variant="contained" onClick={handleRandomLocation}>
          No, show random location
        </Button>
        {permissionDenied && (
          <Typography variant="body2" id="location-modal-description" sx={{ mt: 2 }}>
            Permission to access location was denied. Showing random location.
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default LocationModal;
