import React from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';
type Props = {}
const imageData = [
    {
        image: 'https://via.placeholder.com/300x150', // Replace with actual image URL
        title: 'ลำนำจักรวาล',
        subtitle: 'นวนิยาย โดย Moonscape',
    },
    {
        image: 'https://via.placeholder.com/300x150', // Replace with actual image URL
        title: 'เทศกาลนิยายการ์ตูน',
        subtitle: 'ลดสูงสุด 80%',
    },
    {
        image: 'https://via.placeholder.com/300x150', // Replace with actual image URL
        title: 'ส่งของอร่อยให้หนักเขียน',
        subtitle: 'Food Support',
    },
];
const ImageSlidView = (props: Props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Box sx={{ width: '100%', p: 2, mb: 1 }}>
            <Slider {...settings}>
                {imageData.map((item, index) => (
                    <Box key={index} sx={{ px: 1, textAlign: 'center' }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                        />
                        {/* <Typography variant="h6" sx={{ mt: 1 }}>
                            {item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {item.subtitle}
                        </Typography> */}
                    </Box>
                ))}
            </Slider>
        </Box>
    );
}

export default ImageSlidView