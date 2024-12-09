import React, { useRef } from 'react';
import { Box, Typography, IconButton, ImageList, ImageListItem } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import InfoImageGrid from './InfoImageGrid';

type Props = {};
const gridData = [
    {
        image: 'https://via.placeholder.com/150',
        title: 'ทะลุมิติไปเป็นนางร้ายเมียพระเอก',
        writer: 'Ammara Writes',
        status: {
            love: '252',
            see: '57K',
            keep: '12',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'เมื่อฉันต้องเลี้ยงนางร้าย (มี E-book)',
        writer: 'Sukanya Novels',
        status: {
            love: '185',
            see: '45K',
            keep: '8',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ยอมหย่าให้แล้วนะคุณสามี',
        writer: 'Narisa Tales',
        status: {
            love: '300',
            see: '60K',
            keep: '15',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        writer: 'Pimdao Fiction',
        status: {
            love: '400',
            see: '72K',
            keep: '20',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'แค่สามีไม่รัก',
        writer: 'Tanya Writes',
        status: {
            love: '210',
            see: '50K',
            keep: '10',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        writer: 'Kamol Fiction',
        status: {
            love: '320',
            see: '65K',
            keep: '18',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'เพิ่มอีกหนึ่ง',
        writer: 'Chalita Tales',
        status: {
            love: '100',
            see: '25K',
            keep: '5',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        writer: 'Pimdao Fiction',
        status: {
            love: '410',
            see: '70K',
            keep: '22',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'แค่สามีไม่รัก',
        writer: 'Tanya Writes',
        status: {
            love: '250',
            see: '55K',
            keep: '14',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        writer: 'Kamol Fiction',
        status: {
            love: '350',
            see: '68K',
            keep: '16',
        },
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'เพิ่มอีกหนึ่ง',
        writer: 'Chalita Tales',
        status: {
            love: '120',
            see: '28K',
            keep: '7',
        },
    },
];



const iconSize = 8

const ImageGrid = (props: Props) => {
    const scrollContainerRef = useRef<HTMLUListElement | null>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300; // Adjust scroll amount
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', mx: 6 }}>
                <Typography>
                    นิยายรัก
                </Typography>

                <Typography
                    component={Link} // Use Link for navigation
                    to="/reading" // Navigate to '/'
                    sx={{
                        fontSize: '12px', fontWeight: 'bold', color: '#21c3bb', textDecoration: 'none', // Remove underline for the link
                        cursor: 'pointer',
                    }}>
                    ดูทั้งหมด
                </Typography>
            </Box>
            {/* Scrollable Section with Buttons */}
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%', border: 0, m: 0, p: 0 }}>
                {/* Left Scroll Button */}
                <IconButton
                    onClick={() => scroll('left')}
                    sx={{
                        position: 'absolute',
                        left: 0,
                        ml: 5,
                        zIndex: 1,
                        background: '#fff',
                        boxShadow: 3,
                        '&:hover': { background: '#eee' },
                    }}
                >
                    <ArrowBackIosIcon sx={{
                        fontSize: '8px', // Set the icon size explicitly
                    }} />
                </IconButton>

                {/* Image List */}
                <ImageList
                    ref={scrollContainerRef}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        overflowX: 'auto',
                        scrollBehavior: 'smooth',
                        // gap: 2,
                        mt: 0,
                        // padding: 2,
                        mx: 5, // Space for scroll buttons
                    }}
                    cols={5} // Show up to 6 images at a time
                //rowHeight={150} // Row height for consistent layout
                >
                    {gridData.map((item, index) => (
                        <Box sx={{ display: 'flex', flexDirection: 'column', mx: 1 }}>
                            <ImageListItem key={index} sx={{
                                flex: '0 0 auto', // Prevent shrinking
                                width: 120, // Set width
                                height: 120, // Set height
                                overflow: 'hidden', // Ensure content doesn't overflow
                                borderRadius: 2, // Optional: Rounded corners
                            }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: `${iconSize}px`,
                                    }}
                                />

                            </ImageListItem>
                            <InfoImageGrid status={item.status} title={item.title} writer={item.writer} />
                        </Box>


                    ))}
                </ImageList>

                {/* Right Scroll Button */}
                <IconButton
                    onClick={() => scroll('right')}
                    sx={{
                        position: 'absolute',
                        right: 0,
                        zIndex: 1,
                        background: '#fff',
                        boxShadow: 3,
                        '&:hover': { background: '#eee' },
                    }}
                >
                    <ArrowForwardIosIcon sx={{ fontSize: '8px' }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ImageGrid;
