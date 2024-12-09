import React, { useEffect, useState } from 'react'

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
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true, // Enables auto sliding
        autoplaySpeed: 3000, // Sets the auto sliding speed (3 seconds)
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return isMounted ? (
        <Box sx={{ width: '100%', p: 2, mb: 1 }}>
            <Slider {...settings}>
                {imageData.map((item, index) => (
                    <Box key={index} sx={{ textAlign: 'center' }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px', border: '5px solid white', }}
                        />

                    </Box>
                ))
                }
            </Slider >
        </Box >
    ) : null
}

export default ImageSlidView