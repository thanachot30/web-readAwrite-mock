import React from 'react'

import { Box, Typography, Card, CardMedia, CardContent, IconButton, Container } from '@mui/material';
import Grid from '@mui/material/Grid2';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
type Props = {}
const gridData = [
    {
        image: 'https://via.placeholder.com/150', // Replace with actual image URL
        title: 'ทะลุมิติไปเป็นนางร้ายเมียพระเอก',
        subtitle: 'นางร้ายที่รัก17',
        views: '24',
        likes: '178K',
        favorites: '701',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'เมื่อฉันต้องเลี้ยงนางร้าย (มี E-book)',
        subtitle: 'อาทิตย์ชมดาว',
        views: '16',
        likes: '132K',
        favorites: '732',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ยอมหย่าให้แล้วนะคุณสามี',
        subtitle: 'ธีรันจันทรา',
        views: '11',
        likes: '28K',
        favorites: '136',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        subtitle: 'คนหลังเขา',
        views: '11',
        likes: '60K',
        favorites: '546',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'แค่สามีไม่รัก',
        subtitle: 'อาธิชา',
        views: '14',
        likes: '54K',
        favorites: '307',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        subtitle: 'LEOI',
        views: '6',
        likes: '22K',
        favorites: '277',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'เมียลับคุณหมอเจษ',
        subtitle: 'หมอเจษ10',
        views: '19',
        likes: '90K',
        favorites: '880',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'กลลวงร้ายเดิมพันรัก',
        subtitle: 'นลินธารา',
        views: '22',
        likes: '120K',
        favorites: '600',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'แม่มาว่าไม่รัก (มีอีบุ๊ก)',
        subtitle: 'ขุนแผน',
        views: '8',
        likes: '75K',
        favorites: '400',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'รักข้ามภพ',
        subtitle: 'เทพรักนิรันดร์',
        views: '12',
        likes: '48K',
        favorites: '250',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'สะดุดรักนักธุรกิจหนุ่ม',
        subtitle: 'มธุรสวาจา',
        views: '14',
        likes: '67K',
        favorites: '300',
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'พายุรักซ่อนเงา',
        subtitle: 'สายลมหวาน',
        views: '20',
        likes: '110K',
        favorites: '580',
    },
];



const ImageGrid = (props: Props) => {
    return (
        <Box>

            {/* Grid Section */}
            <Grid container spacing={3}>
                {gridData.map((item, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
                        <Card sx={{ boxShadow: 0, textAlign: 'center' }}>
                            {/* Image Section */}
                            <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                    width: 45,
                                    height: 45,
                                    borderRadius: '8px',
                                    mr: 2, // Margin to the right of the image
                                }}
                            />

                            {/* Content */}
                            <CardContent>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 'bold',
                                        fontSize: '0.5rem',
                                        mb: 0.5,
                                        lineHeight: 1.2,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    sx={{ fontSize: '0.8rem', mb: 1 }}
                                >
                                    {item.subtitle}
                                </Typography>
                                {/* Stats */}
                                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <VisibilityIcon fontSize="small" />
                                        <Typography variant="caption">{item.views}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <FavoriteBorderIcon fontSize="small" />
                                        <Typography variant="caption">{item.likes}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                        <FavoriteBorderIcon fontSize="small" />
                                        <Typography variant="caption">{item.favorites}</Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ImageGrid