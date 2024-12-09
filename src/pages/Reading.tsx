import React from 'react';
import { Box, Container, Typography, Tabs, Tab, Stack, Chip } from '@mui/material';
import ImageGridReading from '../component/ImageGridReading';



const Reading = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth="md" sx={{ mt: 3 }}>
            {/* Title */}
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                นิยายรัก
            </Typography>

            {/* Navigation Tabs */}
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={{
                        borderBottom: '1px solid #e0e0e0',
                        '.MuiTab-root': { textTransform: 'none' },
                    }}
                >
                    <Tab label="ใหม่มาแรง" sx={{ color: value === 0 ? '#21c3bb' : 'inherit' }} />
                    <Tab label="เรื่องฮิต" disabled={true} />
                    <Tab label="ขายดี" disabled={true} />
                    <Tab label="มาใหม่" disabled={true} />
                    <Tab label="อัปเดต" disabled={true} />
                    <Tab label="จบล่าสุด" disabled={true} />
                    <Tab label="ท็อปชาร์ต" disabled={true} />
                </Tabs>
            </Box>

            <Stack direction="row" spacing={1} sx={{ mt: 2, mb: 5 }}>
                <Chip
                    label="หมวดรอง"
                    size="small"
                    sx={{
                        textTransform: 'none',
                        color: 'text.secondary',
                        borderColor: '#e0e0e0',
                        '&:hover': { borderColor: '#ccc' },
                    }}
                    variant="outlined"
                />
                <Chip
                    label="แท็ก Q"
                    size="small"
                    sx={{
                        textTransform: 'none',
                        color: 'text.secondary',
                        borderColor: '#e0e0e0',
                        '&:hover': { borderColor: '#ccc' },
                    }}
                    variant="outlined"
                />
                <Chip
                    label="จบแล้ว"
                    size="small"
                    sx={{
                        textTransform: 'none',
                        color: 'text.secondary',
                        borderColor: '#e0e0e0',
                        '&:hover': { borderColor: '#ccc' },
                    }}
                    variant="outlined"
                />
            </Stack>

            <Box>
                <ImageGridReading />
            </Box>
        </Container>
    );
};

export default Reading;
