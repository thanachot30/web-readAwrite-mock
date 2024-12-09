// import { Box, Typography, ImageList, ImageListItem, ImageListItemBar, Chip } from '@mui/material';
// import React from 'react';

// type Props = {}

// const mockData = [
//     {
//         image: 'https://via.placeholder.com/150',
//         title: 'ย้อนเวลามาเซ็นใบหย่า',
//         author: 'LEOI',
//         stats: { keep: '9', views: '84K', love: '785' },
//         tags: ['ย้อนเวลา', 'ทักษิณ', 'หย่า'],
//     },
//     {
//         image: 'https://via.placeholder.com/150',
//         title: 'คู่หมั้นที่เขาไม่รัก',
//         author: 'คนหลังเขา',
//         stats: { keep: '13', views: '112K', love: '769' },
//         tags: ['รักต่างวัย', 'ดราม่า', 'คู่หมั้น'],
//     },
//     // Add more items as needed
// ];

// const ImageGridReading = (props: Props) => {
//     return (
//         <Box>
//             {/* Section Title */}
//             <Box mb={3}>
//                 <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
//                     ใหม่มาแรง
//                 </Typography>
//             </Box>

//             {/* Image List Content */}
//             <ImageList cols={2} gap={16}>
//                 {mockData.map((item, index) => (
//                     <ImageListItem key={index} sx={{ borderRadius: 1, overflow: 'hidden' }}>
//                         {/* Image Section */}
//                         <img
//                             src={item.image}
//                             alt={item.title}
//                             style={{
//                                 width: '150',
//                                 height: '150',
//                                 objectFit: 'cover',
//                                 borderRadius: '8px',
//                             }}
//                         />

//                         {/* Title and Author */}
//                         <ImageListItemBar
//                             title={<Typography sx={{ fontSize: '1rem', fontWeight: 'bold' }}>{item.title}</Typography>}
//                             subtitle={<Typography sx={{ fontSize: '0.85rem', color: 'text.secondary' }}>{item.author}</Typography>}
//                             position="below"
//                         />

//                         {/* Stats Section */}
//                         <Box sx={{ display: 'flex', gap: 2, mt: 1, justifyContent: 'flex-start' }}>
//                             <Typography sx={{ fontSize: '0.85rem' }}>{item.stats.keep} Keep</Typography>
//                             <Typography sx={{ fontSize: '0.85rem' }}>{item.stats.views} Views</Typography>
//                             <Typography sx={{ fontSize: '0.85rem' }}>{item.stats.love} Loves</Typography>
//                         </Box>

//                         {/* Tags Section */}
//                         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 1 }}>
//                             {item.tags.map((tag, i) => (
//                                 <Chip
//                                     key={i}
//                                     label={tag}
//                                     size="small"
//                                     sx={{ fontSize: '0.75rem' }}
//                                 />
//                             ))}
//                         </Box>
//                     </ImageListItem>
//                 ))}
//             </ImageList>
//         </Box>
//     )
// }

// export default ImageGridReading;
