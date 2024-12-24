import { useEffect, useState } from 'react'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';


const imageData = [
    {
        image: `https://storage.googleapis.com/readawritedemo/Banner%201.png`, // Replace with actual image URL
        title: 'ลำนำจักรวาล',
        subtitle: 'นวนิยาย โดย Moonscape',
    },
    {
        image: 'https://storage.googleapis.com/readawritedemo/Banner%202.png', // Replace with actual image URL
        title: 'เทศกาลนิยายการ์ตูน',
        subtitle: 'ลดสูงสุด 80%',
    },
    {
        image: 'https://storage.googleapis.com/readawritedemo/Banner%203.png', // Replace with actual image URL
        title: 'ส่งของอร่อยให้หนักเขียน',
        subtitle: 'Food Support',
    },
    {
        image: 'https://storage.googleapis.com/readawritedemo/Banner%204.png', // Replace with actual image URL
        title: 'ลำนำจักรวาล',
        subtitle: 'นวนิยาย โดย Moonscape',
    },
    {
        image: 'https://storage.googleapis.com/readawritedemo/Banner%205.png', // Replace with actual image URL
        title: 'เทศกาลนิยายการ์ตูน',
        subtitle: 'ลดสูงสุด 80%',
    },

];
const ImageSlidView = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        // centerMode: true, // Enables center mode
        //centerPadding: '10px', // Adjusts the padding for the slides on the sides
        slidesToScroll: 1,
        autoplay: true, // Enables auto sliding
        autoplaySpeed: 3000, // Sets the auto sliding speed (3 seconds)
        pauseOnHover: true,
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
    return isMounted ? (
        <Box sx={{ width: '100%', p: 3, mb: 1 }}>
            <Slider {...settings}>
                {imageData.map((item, index) => (
                    <Box key={index} sx={{

                        width: '600px', // Ensure the container matches the image width
                        height: '300px', // Ensure the container matches the image height
                        //overflow: 'hidden', // Prevent any overflow
                        //borderRadius: 'px', // Rounded corners
                        borderLeft: '10px solid white', // White border on the left
                        //borderRight: '20px solid white', // White border on the right
                    }}>
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover', // Ensures the image fills the container without distortion
                                borderRadius: 'inherit',
                            }}
                        //style={{ objectFit: 'cover', borderRadius: '10px', border: '5px solid white', }}

                        />

                    </Box>
                ))
                }
            </Slider >
        </Box >
    ) : null
}

export default ImageSlidView