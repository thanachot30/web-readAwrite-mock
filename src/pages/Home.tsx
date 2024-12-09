
import { Box, Typography, Container } from '@mui/material';
import ImageSlidView from '../component/ImageSlidView';
import Divider from '@mui/material/Divider';
import ImageGrid from '../component/ImageGrid';


const Home = () => {
    return (
        <Box>
            <Divider />
            < ImageSlidView />
            <Divider />

            <Container maxWidth="md"
            // sx={{
            //     display: 'flex',
            //     flexDirection: 'column',
            //     alignItems: 'center',
            //     textAlign: 'center', // Center text content if applicable
            // }}
            >
                <Box sx={{ ml: 6 }}>
                    <Typography variant="h5" gutterBottom >
                        Love Novel
                    </Typography>
                </Box>
                <ImageGrid />
                <ImageGrid />
                <ImageGrid />
            </Container>
        </Box>

    )
}

export default Home