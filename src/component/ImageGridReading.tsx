import { Box, Typography, ImageList, ImageListItem, Chip } from '@mui/material';


const mockData = [
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        author: 'LEOI',
        stats: { keep: '9', views: '84K', love: '785' },
        tags: ['ย้อนเวลา', 'ทักษิณ', 'หย่า'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        author: 'คนหลังเขา',
        stats: { keep: '13', views: '112K', love: '769' },
        tags: ['รักต่างวัย', 'ดราม่า', 'คู่หมั้น'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        author: 'LEOI',
        stats: { keep: '9', views: '84K', love: '785' },
        tags: ['ย้อนเวลา', 'ทักษิณ', 'หย่า'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        author: 'คนหลังเขา',
        stats: { keep: '13', views: '112K', love: '769' },
        tags: ['รักต่างวัย', 'ดราม่า', 'คู่หมั้น'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        author: 'LEOI',
        stats: { keep: '9', views: '84K', love: '785' },
        tags: ['ย้อนเวลา', 'ทักษิณ', 'หย่า'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        author: 'คนหลังเขา',
        stats: { keep: '13', views: '112K', love: '769' },
        tags: ['รักต่างวัย', 'ดราม่า', 'คู่หมั้น'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        author: 'LEOI',
        stats: { keep: '9', views: '84K', love: '785' },
        tags: ['ย้อนเวลา', 'ทักษิณ', 'หย่า'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        author: 'คนหลังเขา',
        stats: { keep: '13', views: '112K', love: '769' },
        tags: ['รักต่างวัย', 'ดราม่า', 'คู่หมั้น'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        author: 'LEOI',
        stats: { keep: '9', views: '84K', love: '785' },
        tags: ['ย้อนเวลา', 'ทักษิณ', 'หย่า'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        author: 'คนหลังเขา',
        stats: { keep: '13', views: '112K', love: '769' },
        tags: ['รักต่างวัย', 'ดราม่า', 'คู่หมั้น'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'ย้อนเวลามาเซ็นใบหย่า',
        author: 'LEOI',
        stats: { keep: '9', views: '84K', love: '785' },
        tags: ['ย้อนเวลา', 'ทักษิณ', 'หย่า'],
    },
    {
        image: 'https://via.placeholder.com/150',
        title: 'คู่หมั้นที่เขาไม่รัก',
        author: 'คนหลังเขา',
        stats: { keep: '13', views: '112K', love: '769' },
        tags: ['รักต่างวัย', 'ดราม่า', 'คู่หมั้น'],
    },
    // Add more items as needed
];

const ImageGridReading = () => {
    return (
        <Box>
            {/* Section Title */}
            <Box mb={3}>
                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                    ใหม่มาแรง
                </Typography>
            </Box>

            {/* Image List Content */}
            <ImageList cols={2} gap={16}> {/* Single-column layout for flex row */}
                {mockData.map((item, index) => (
                    <ImageListItem
                        key={index}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'flex-start',
                            gap: 2,
                            borderRadius: 1,
                            overflow: 'hidden',
                            padding: 1,
                            border: '1px solid #e0e0e0', // Optional border for clarity
                        }}
                    >
                        {/* Image Section */}
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: '120px',
                                height: '120px',
                                objectFit: 'cover',
                                borderRadius: '8px',
                            }}
                        />

                        {/* Text Content Section */}
                        <Box sx={{ flex: 1 }}>
                            {/* Title and Author */}
                            <Typography
                                sx={{
                                    fontSize: '1rem',
                                    fontWeight: 'bold',
                                    mb: 0.5,
                                }}
                            >
                                {item.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: '0.85rem',
                                    color: 'text.secondary',
                                    mb: 1,
                                }}
                            >
                                {item.author}
                            </Typography>

                            {/* Stats Section */}
                            <Box sx={{ display: 'flex', gap: 2, mb: 1 }}>
                                <Typography sx={{ fontSize: '0.85rem' }}>{item.stats.keep} Keep</Typography>
                                <Typography sx={{ fontSize: '0.85rem' }}>{item.stats.views} Views</Typography>
                                <Typography sx={{ fontSize: '0.85rem' }}>{item.stats.love} Loves</Typography>
                            </Box>

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
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
};

export default ImageGridReading;
