import { Box, Button, Chip, Container, Grid, IconButton, Paper, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Data_BoyLoveNovel, Data_GirlLoveNovel, Data_LoveNovel, GridData, ReviewNotification, notiReader } from '../common/share';
import Footer from '../component/Footer';
import { RxAvatar } from "react-icons/rx";
import { FaRobot } from 'react-icons/fa';
import { BsPeopleFill } from 'react-icons/bs';
import Icon_robotHuman from '../component/Icon_robotHuman';
import { Tag as TagIcon } from '@mui/icons-material'; // Example tag icon
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ReadingDetail = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');
    const id = queryParams.get('id')
    const [data, setdata] = useState<GridData>()
    const [dataNoti, setdataNoti] = useState<ReviewNotification | undefined>()
    const ranNum = Math.floor(Math.random() * 6) + 1;
    const noti = notiReader.find((item) => item.id === ranNum)
    const icon_size = 50
    const tags = ["โรแมนติก", "มาเฟีย", "18+", "รักต่างวัย", "นิยายรัก", "น่ารัก", "พระเอกกินเด็ก", "พระเอกสายเปย์", "พระเอกปากร้าย"];

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
        // random noti

        setdataNoti(noti)

    }, [])
    return (

        <Box>
            <Box>
                <Container maxWidth="lg" sx={{ mt: 0 }}>
                    <Grid container spacing={2} sx={{ height: 'auto' }}>
                        {/* Left Half: Image */}
                        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start', height: "500px", width: "100%", }}>
                                <img
                                    src={data?.image}
                                    alt={data?.title}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
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
                            md={8}
                            sx={{

                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                padding: 4,
                                backgroundColor: '#000', // Optional: Background color for the right half
                                color: '#fff', // Text color
                            }}
                        >
                            <Grid container spacing={2}>
                                <Grid item xs={6} md={8}>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', gap: 1 }}>
                                        <Typography variant="h6" >
                                            {name}
                                        </Typography>
                                        <Chip label={`${data?.episode} ตอน`} sx={{ color: 'white', bgcolor: 'gray' }} size='small' />
                                    </Box>

                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', gap: 1, my: 1 }}>
                                        <Chip label={"จบ"} size='small' sx={{ color: 'white', bgcolor: "#21c3bb", px: 0.5 }} />
                                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                            {data?.title}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', textAlign: 'center', gap: 1 }}>
                                        <RxAvatar size={20} />
                                        <Typography>
                                            {data?.writer}
                                        </Typography>
                                        <Chip label={"ติดตาม"} size='small' sx={{ px: 0.5, color: 'white', border: '1px solid ' }} />
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: "center", bgcolor: "#21c3bb", p: 1, mt: 1 }}>
                                        <Box sx={{ m: 1 }}>
                                            {[1, 4].includes((ranNum)) && <FaRobot size={icon_size} color="black" />}
                                            {[2, 5].includes((ranNum)) && <BsPeopleFill size={icon_size} color="black" />}
                                            {[3, 6].includes((ranNum)) && <Icon_robotHuman _height={icon_size} _width={icon_size} />}
                                        </Box>
                                        <Typography sx={{ fontSize: '12px' }}>
                                            {dataNoti && dataNoti.type.trim()}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={6} md={4}>

                                    {dataNoti && dataNoti.content?.map((item) => (
                                        <Box sx={{ bgcolor: "#21c3bb" }}>
                                            <Typography sx={{ fontSize: '8px', px: 1, py: 1 }}>
                                                {item.title}
                                                {item.description}
                                            </Typography>
                                        </Box>

                                    ))}


                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Container>
            </Box>


            {/* story */}
            <Box>
                <Container maxWidth="lg" >
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1, p: 2 }}>
                        {/* Highlighted Chip */}
                        <Chip
                            label="โรแมนติก"
                            sx={{ fontWeight: 'bold', border: '1px solid #21c3bb' }}
                        />

                        {/* Tag Icon */}
                        <IconButton size="small">
                            <TagIcon />
                        </IconButton>

                        {/* Dynamic Chips */}
                        {tags.slice(1).map((tag, index) => (
                            <Chip
                                key={index}
                                label={tag}
                                variant="outlined"
                                sx={{ fontSize: '14px', borderRadius: '16px' }}
                            />
                        ))}

                        {/* Expand Icon */}
                        <IconButton size="small">
                            <ExpandMoreIcon />
                        </IconButton>
                    </Box>
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