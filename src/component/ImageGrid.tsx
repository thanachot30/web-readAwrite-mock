import { useRef } from 'react';
import { Box, Typography, IconButton, ImageList, ImageListItem } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import InfoImageGrid from './InfoImageGrid';
import { GridData } from '../common/share';



const iconSize = 8

type Props = {
    data: GridData[],
    title: string,
    name: string
}


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
                <Typography variant='h5'>
                    {props.title}
                </Typography>

                <Typography
                    component={Link} // Use Link for navigation
                    to={`/reading?name=${props.name}&title=${props.title}`} // Navigate to '/'
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
                    {props.data.map((item, index) => (
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <ImageListItem key={index} sx={{
                                flex: '0 0 auto', // Prevent shrinking
                                width: 180, // Set width
                                height: 180, // Set height
                                overflow: 'hidden', // Ensure content doesn't overflow
                                borderRadius: 2, // Optional: Rounded corners
                            }}>
                                <Box sx={{ m: 0.5 }}>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        style={{
                                            width: '160px',
                                            height: '160px',
                                            objectFit: 'cover',
                                            borderRadius: `${iconSize}px`,
                                        }}
                                    />
                                </Box>

                                <Box>
                                    <InfoImageGrid status={item.status} title={item.title} writer={item.writer} />
                                </Box>


                            </ImageListItem>

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
