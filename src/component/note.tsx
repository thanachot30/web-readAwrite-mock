// import { Box, Button, Container, Grid, Typography } from '@mui/material'
// import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
// import { Data_BoyLoveNovel, Data_GirlLoveNovel, Data_LoveNovel, GridData } from '../common/share';

// type Props = {}

// const ReadingDetail = (props: Props) => {
//     const location = useLocation();
//     const queryParams = new URLSearchParams(location.search);
//     const name = queryParams.get('name');
//     const id = queryParams.get('id')
//     const [data, setdata] = useState<GridData>()
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to top
//         console.log('name', name, id);
//         switch (name) {
//             case "LoveNovel":
//                 const _data = Data_LoveNovel.find((item) => item.id === Number(id))
//                 setdata(_data)
//                 break;
//             case "BoyLoveNovel":
//                 const _dataBoy = Data_BoyLoveNovel.find((item) => item.id === Number(id))
//                 setdata(_dataBoy)
//                 break;
//             case "GirlLoveNovel":
//                 const _dataGirl = Data_GirlLoveNovel.find((item) => item.id === Number(id))
//                 setdata(_dataGirl)
//                 break
//         }

//     }, [])
//     return (

//         <Box>


//             <Box
//             // sx={{
//             //     backgroundColor: '#000', // Black background for the entire container
//             //     minHeight: '100%', // Full viewport height
//             //     display: 'flex',
//             //     justifyContent: 'center',
//             //     alignItems: 'center',
//             // }}
//             >
//                 <Container maxWidth="lg" sx={{ mt: 3 }}>
//                     <Grid container sx={{ height: 'auto' }}>
//                         {/* Left Half: Image */}
//                         <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
//                             <Box sx={{ display: 'flex', justifyContent: 'flex-end', height: "50vh", width: "100%", }}>
//                                 <img
//                                     src={data?.image}
//                                     alt={data?.title}
//                                     loading="lazy"
//                                     style={{
//                                         width: '100%',
//                                         height: '100%',
//                                         // borderRadius: `${2}px`,
//                                     }}
//                                 />
//                             </Box>

//                             {/* Gradient Divider */}
//                             <Box
//                                 sx={{
//                                     position: 'absolute',
//                                     top: 0,
//                                     right: 0,
//                                     width: '100px', // Adjust thickness of gradient
//                                     height: '100%',
//                                     background: 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)',
//                                 }}
//                             />
//                         </Grid>

//                         {/* Right Half: Details */}
//                         <Grid
//                             item
//                             xs={12}
//                             md={6}
//                             sx={{
//                                 display: 'flex',
//                                 flexDirection: 'column',
//                                 justifyContent: 'center',
//                                 padding: 4,
//                                 backgroundColor: '#000', // Optional: Background color for the right half
//                                 color: '#fff', // Text color
//                             }}
//                         >
//                             <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
//                                 สยบพันธะร้าย มาเฟียเพื่อนสนิท
//                             </Typography>
//                             <Typography variant="body1" sx={{ mb: 4 }}>
//                                 แม้จะรู้จักกันมานาน แต่สำหรับเขา...ผู้ชายกับผู้หญิงก็เป็น ‘เพื่อน’ กันไม่ได้อยู่ดี
//                             </Typography>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                                 <Typography variant="body2">นิยายรัก (18+)</Typography>
//                                 <Typography variant="body2">4 ตอน</Typography>
//                             </Box>
//                             <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
//                                 <Typography variant="body2">❤️ 1.88K คนเลิฟเรื่องนี้</Typography>
//                                 <Typography variant="body2">👁️ 77.28K</Typography>
//                                 <Typography variant="body2">💬 2.4K</Typography>
//                                 <Typography variant="body2">📚 9.2K</Typography>
//                             </Box>
//                             <Box sx={{ display: 'flex', gap: 2 }}>
//                                 <Button variant="contained" color="primary">
//                                     อ่านเลย
//                                 </Button>
//                                 <Button variant="outlined" color="secondary">
//                                     เพิ่มเข้าชั้น
//                                 </Button>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Container>
//             </Box>

//             {/* story */}
//             <Box>
//                 <Container maxWidth="lg" >

//                 </Container>
//             </Box>
//         </Box>
//     )
// }

// export default ReadingDetail