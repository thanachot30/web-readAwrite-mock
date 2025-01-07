import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Data_BoyLoveNovel, Data_GirlLoveNovel, Data_LoveNovel, GridData } from '../common/share';
import Footer from '../component/Footer';



const ReadingDetail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const id = queryParams.get('id')
    const [data, setdata] = useState<GridData>()
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top
        console.log('name', name, id);
        switch (name) {
            case "LoveNovel":
                const _data = Data_LoveNovel.find((item) => item.id === Number(id))
                setdata(_data)
                break;
            case "BoyLoveNovel":
                const _dataBoy = Data_BoyLoveNovel.find((item) => item.id === Number(id))
                setdata(_dataBoy)
                break;
            case "GirlLoveNovel":
                const _dataGirl = Data_GirlLoveNovel.find((item) => item.id === Number(id))
                setdata(_dataGirl)
                break
        }

    }, [])
    return (

        <Box>
            <Box
            // sx={{
            //     backgroundColor: '#000', // Black background for the entire container
            //     minHeight: '100%', // Full viewport height
            //     display: 'flex',
            //     justifyContent: 'center',
            //     alignItems: 'center',
            // }}
            >
                <Container maxWidth="lg" sx={{ mt: 3 }}>
                    <Grid container sx={{ height: 'auto' }}>
                        {/* Left Half: Image */}
                        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', height: "500px", width: "100%", }}>
                                <img
                                    src={data?.image}
                                    alt={data?.title}
                                    loading="lazy"
                                    style={{
                                        width: '80%',
                                        // height: '100%',
                                        // borderRadius: `${2}px`,
                                    }}
                                />
                            </Box>

                            {/* Gradient Divider */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    right: 0,
                                    width: '100px', // Adjust thickness of gradient
                                    height: '100%',
                                    background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
                                }}
                            />
                        </Grid>

                        {/* Right Half: Details */}
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: 4,
                                backgroundColor: '#000', // Optional: Background color for the right half
                                color: '#fff', // Text color
                            }}
                        >
                            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                                สยบพันธะร้าย มาเฟียเพื่อนสนิท
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4 }}>
                                แม้จะรู้จักกันมานาน แต่สำหรับเขา...ผู้ชายกับผู้หญิงก็เป็น ‘เพื่อน’ กันไม่ได้อยู่ดี
                            </Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Typography variant="body2">นิยายรัก (18+)</Typography>
                                <Typography variant="body2">4 ตอน</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                                <Typography variant="body2">❤️ 1.88K คนเลิฟเรื่องนี้</Typography>
                                <Typography variant="body2">👁️ 77.28K</Typography>
                                <Typography variant="body2">💬 2.4K</Typography>
                                <Typography variant="body2">📚 9.2K</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', gap: 2 }}>
                                <Button variant="contained" color="primary">
                                    อ่านเลย
                                </Button>
                                <Button variant="outlined" color="secondary">
                                    เพิ่มเข้าชั้น
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* story */}
            <Box>
                <Container maxWidth="lg" >
                    <Paper
                        elevation={2}
                        sx={{
                            p: 4,
                            backgroundColor: '#ffffff', // Light paper-like background

                        }}
                    >
                        {/* Title */}
                        <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center', color: '#333' }}>
                            Evil Miss You คุณคนน่ามอง
                        </Typography>

                        {/* Metadata */}
                        <Typography variant="body1" sx={{ mb: 3, color: '#555' }}>
                            หมวด: นิยายรัก | จำนวนตอน: 15 ตอน | นักเขียน: Lta Luktarn
                        </Typography>

                        {/* Content */}
                        <Box sx={{ mb: 4 }}>
                            {/* <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#444' }}>
                                คุณคนน่ามอง ภาค 1
                            </Typography> */}
                            {data && data?.story?.split('\n').map((line, index) => (
                                <Typography key={index} variant="body1" sx={{ mb: 1, lineHeight: 1.8, color: '#666' }}>
                                    {line}
                                </Typography>
                            ))}

                        </Box>


                    </Paper>

                    <Box sx={{ m: 2 }}>
                        <Button size='large' variant="contained">
                            go to form
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Box>
                <Footer />
            </Box>
        </Box>
    )
}

export default ReadingDetail