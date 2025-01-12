import { Box, Typography, ImageList, ImageListItem, Chip, Divider } from '@mui/material';
import StatusIcon from './StatusIcon';
import { GridData } from '../common/share';
import { useNavigate } from 'react-router-dom';
type Props = {
    data: GridData[],
    name: string
}


const ImageGridReading = (props: Props) => {
    const navigate = useNavigate();
    return (
        <Box>
            {/* Section Title */}
            <Box mb={3}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    ใหม่มาแรง
                </Typography>
            </Box>
            <Divider />
            {/* Image List Content */}
            <ImageList cols={2} sx={{ justifyContent: 'space-around' }}> {/* Single-column layout for flex row */}
                {props.data.map((item, index) => (
                    <ImageListItem
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            padding: 1,
                            //border: '1px solid #e0e0e0', // Optional border for clarity
                        }}
                    >
                        <Box
                            sx={{
                                flexShrink: 0, // Prevent the image from shrinking
                                width: '180px',
                                height: '180px',
                                overflow: 'hidden',
                                borderRadius: 2,
                            }}
                        >
                            <Box>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                    }}
                                />
                            </Box>
                            {item.tag &&
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 15, // Position from the top
                                        right: 243, // Position from the right
                                        backgroundColor: '#21c3bb', // Button color
                                        color: 'white',
                                        padding: '4px 12px', // Adjust padding for oval shape
                                        borderRadius: '16px', // High value for a pill/oval shape
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        zIndex: 1, // Ensure it stays above the image
                                        display: 'inline-block', // Ensure proper layout
                                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    {"จัดการ"}
                                </Box>
                            }


                        </Box>


                        {/* Text Content Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, ml: 1 }}>
                            {/* Title and Author */}
                            <Box sx={{ justifyContent: 'flex-start', pt: 1 }}>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        mb: 0.5,
                                        textDecoration: 'none', // Remove underline for the link
                                        cursor: item.id === 1 || item.id === 2 ? 'pointer' : 'default', // Pointer only for id 1 and 2
                                        color: item.id === 1 || item.id === 2 ? 'inherit' : 'gray', // Different color for non-clickable items
                                        '&:hover': {
                                            color: item.id === 1 || item.id === 2 ? '#21c3bb' : 'inherit', // Hover effect only for id 1 and 2
                                        },
                                    }}
                                    onClick={() => {
                                        if (item.id === 1 || item.id === 2) {
                                            navigate(`/reading/detail?name=${props.name}&id=${item.id}&story=${item.category}`); // Navigate programmatically
                                        }
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    // flex: '0 1 auto',
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    flexDirection: 'column',

                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: 'text.secondary',
                                    }}
                                >
                                    {item.writer}
                                </Typography>

                                <StatusIcon
                                    keep={item.status.keep}
                                    see={item.status.see}
                                    love={item.status.love}
                                />

                                {/* Tags Section */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {item.tags && item.tags.map((tag, i) => (
                                        <Chip
                                            key={i}
                                            label={tag}
                                            size="small"
                                            sx={{ fontSize: '0.75rem' }}
                                        />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </ImageListItem>
                ))}
            </ImageList>
        </Box >
    );
};

export default ImageGridReading;
