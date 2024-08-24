import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div">
                        Generative AI Platform
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container sx={{ flexGrow: 1, mt: 4 }}>
                {children}
            </Container>
        </Box>
    );
};

export default Layout;
