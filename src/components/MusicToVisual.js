import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import FileUploader from './FileUploader';

const MusicToVisual = () => {
    const [musicFile, setMusicFile] = useState(null);
    const [visual, setVisual] = useState(null);

    const handleGenerate = async () => {
        const formData = new FormData();
        formData.append('music', musicFile);

        const response = await fetch('http://localhost:8000/upload-music/', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();
        setVisual(data.visual_output);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Music to Visual
            </Typography>
            <FileUploader onFileSelect={(file) => setMusicFile(file)} />
            <Button
                variant="contained"
                onClick={handleGenerate}
                sx={{ mt: 2 }}
                disabled={!musicFile}
            >
                Generate Visual
            </Button>
            {visual && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Generated Visual:</Typography>
                    <img src={`http://localhost:8000/download-output/?file_name=${visual}`} alt="Generated Visual" style={{ maxWidth: '100%' }} />
                </Box>
            )}
        </Box>
    );
};

export default MusicToVisual;
