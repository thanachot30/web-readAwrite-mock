import React, { useEffect, useState } from 'react';
import { Box, Container, Typography, Tabs, Tab, Stack, Chip } from '@mui/material';
import ImageGridReading from '../component/ImageGridReading';
import { useLocation } from 'react-router-dom';
import { GridData } from '../common/share';
import { Data_BoyLoveNovel, Data_GirlLoveNovel, Data_LoveNovel } from '../common/share';

const Reading = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const title = queryParams.get('title')
    const [value, setValue] = React.useState(0);
    const [data, setdata] = useState<GridData[]>()

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
        console.log('name', name, title);
        switch (name) {
            case "LoveNovel":
                setdata(Data_LoveNovel)
                break;
            case "BoyLoveNovel":
                setdata(Data_BoyLoveNovel)
                break;
            case "GirlLoveNovel":
                setdata(Data_GirlLoveNovel)
                break
        }

    }, [])

    return (
        <Container maxWidth="md" sx={{ mt: 3 }}>
            {/* Title */}
            <Typography variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                {title}
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
            {data && name && <ImageGridReading data={data} name={name} />}


        </Container>
    );
};

export default Reading;
