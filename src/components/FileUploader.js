import React from 'react';
import { Button } from '@mui/material';

const FileUploader = ({ onFileSelect }) => {
    const handleFileInput = (e) => {
        onFileSelect(e.target.files[0]);
    };

    return (
        <Button
            variant="contained"
            component="label"
            sx={{ mt: 2 }}
        >
            Upload File
            <input
                type="file"
                hidden
                onChange={handleFileInput}
            />
        </Button>
    );
};

export default FileUploader;
