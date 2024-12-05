import React from 'react';
import { Box, Grid, Typography, Button, Container } from '@mui/material';
import ImageSlidView from '../component/ImageSlidView';
import Divider from '@mui/material/Divider';
import ImageGrid from '../component/ImageGrid';

type Props = {}
const Home = (props: Props) => {
    return (
        <Box>
            <Divider />
            < ImageSlidView />
            <Divider />
            <Box >
                <Typography variant="h4" gutterBottom>
                    Love Novel
                </Typography>

                {/* Category Section */}
                <Typography variant="h5" gutterBottom>
                    นิยายรัก
                </Typography>
            </Box>
            {/* Header Section */}


            <Container maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center', // Center text content if applicable
                }}>
                <ImageGrid />
            </Container>
        </Box>

    )
}

export default Home