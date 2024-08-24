import React from 'react';
import { Box, Typography } from '@mui/material';

const Results = ({ output, type }) => {
    const renderOutput = () => {
        if (type === 'image') {
            return <img src={output} alt="Generated Output" style={{ maxWidth: '100%' }} />;
        }
        if (type === 'sound') {
            return <audio controls src={output} />;
        }
        if (type === 'visual') {
            return <img src={output} alt="Generated Visual" style={{ maxWidth: '100%' }} />;
        }
        return null;
    };

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">Generated {type.charAt(0).toUpperCase() + type.slice(1)}:</Typography>
            {renderOutput()}
        </Box>
    );
};

export default Results;
