import React from 'react';
import { Typography, Grid, Card, CardContent, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4" gutterBottom>
                    Welcome to the Generative AI Platform for Synthetic Synesthesia
                </Typography>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Text to Visual
                        </Typography>
                        <Button component={Link} to="/text-to-visual" variant="contained">
                            Try Now
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Image to Sound
                        </Typography>
                        <Button component={Link} to="/image-to-sound" variant="contained">
                            Try Now
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Music to Visual
                        </Typography>
                        <Button component={Link} to="/music-to-visual" variant="contained">
                            Try Now
                        </Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
};

export default Home;
