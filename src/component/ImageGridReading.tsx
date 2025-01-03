import { Box, Typography, ImageList, ImageListItem, Chip, Divider } from '@mui/material';
import StatusIcon from './StatusIcon';
import { mockData_Reading } from '../common/share';




const ImageGridReading = () => {
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
                {mockData_Reading.map((item, index) => (
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
                                width: '120px',
                                height: '120px',
                                overflow: 'hidden',
                                borderRadius: 1,
                            }}
                        >
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

                        {/* Text Content Section */}
                        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, ml: 1 }}>
                            {/* Title and Author */}
                            <Box sx={{ justifyContent: 'flex-start', pt: 1 }}>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        fontWeight: 'bold',
                                        mb: 0.5,
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    // flex: '0 1 auto',
                                    display: 'flex',
                                    justifyContent: 'end',
                                    flexDirection: 'column',

                                }}>
                                <Typography
                                    sx={{
                                        fontSize: '12px',
                                        color: 'text.secondary',
                                    }}
                                >
                                    {item.author}
                                </Typography>

                                <StatusIcon
                                    keep={item.status.keep}
                                    see={item.status.views}
                                    love={item.status.love}
                                />

                                {/* Tags Section */}
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {item.tags.map((tag, i) => (
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
