import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import FileUploader from './FileUploader';

const ImageToSound = () => {
    const [imageFile, setImageFile] = useState(null);
    const [sound, setSound] = useState(null);

    const handleGenerate = async () => {
        const formData = new FormData();
        formData.append('image', imageFile);

        const response = await fetch('http://localhost:8000/upload-image/', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setSound(data.sound_output);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Image to Sound
            </Typography>
            <FileUploader onFileSelect={(file) => setImageFile(file)} />
            <Button
                variant="contained"
                onClick={handleGenerate}
                sx={{ mt: 2 }}
                disabled={!imageFile}
            >
                Generate Sound
            </Button>
            {sound && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Generated Sound:</Typography>
                    <audio controls src={`http://localhost:8000/download-output/?file_name=${sound}`} />
                </Box>
            )}
        </Box>
    );
};

export default ImageToSound;
