import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const TextToVisual = () => {
    const [text, setText] = useState('');
    const [image, setImage] = useState(null);

    const handleGenerate = async () => {
        // Implement API call here
        const response = await fetch('http://localhost:8000/upload-text/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text }),
        });
        const data = await response.json();
        setImage(data.visual_output);
    };

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Text to Visual
            </Typography>
            <TextField
                fullWidth
                label="Enter Text"
                variant="outlined"
                value={text}
                onChange={(e) => setText(e.target.value)}
                sx={{ mb: 2 }}
            />
            <Button variant="contained" onClick={handleGenerate}>
                Generate Visual
            </Button>
            {image && (
                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6">Generated Visual:</Typography>
                    <img src={`http://localhost:8000/download-output/?file_name=${image}`} alt="Generated Visual" style={{ maxWidth: '100%' }} />
                </Box>
            )}
        </Box>
    );
};

export default TextToVisual;
