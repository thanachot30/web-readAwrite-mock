import { Box, Typography, Link, Container } from '@mui/material';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#e0e0e0', // Dark background
                // color: 'black', // White text
                py: 5, // Padding on top and bottom
                mt: 'auto', // Push footer to the bottom of the page
                width: '100%', // Full width
                position: 'relative',
                bottom: 0,
            }}
        >
            <Container maxWidth="lg">
                <Typography variant="body2" sx={{ textAlign: 'center', mb: 1 }}>
                    © 2025 Your Company Name. All rights reserved.
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                    <Link href="/about" underline="none" color="inherit">
                        About Us
                    </Link>
                    <Link href="/terms" underline="none" color="inherit">
                        Terms of Service
                    </Link>
                    <Link href="/privacy" underline="none" color="inherit">
                        Privacy Policy
                    </Link>
                    <Link href="/contact" underline="none" color="inherit">
                        Contact
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
