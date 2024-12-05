import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Outlet } from 'react-router-dom';



type Props = {}

const AppLayout = (props: Props) => {
    return (
        <Box>
            <AppBar position="static" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
                <Container maxWidth="md"> {/* Container to control width */}
                    <Toolbar sx={{ justifyContent: 'space-between', p: 0 }}>
                        {/* Left Section */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Typography variant="h6" color="textPrimary" sx={{ cursor: 'pointer' }}>
                                นิยาย
                            </Typography>
                            <Typography variant="h6" color="textPrimary" sx={{ cursor: 'pointer' }}>
                                แฟนฟิค
                            </Typography>
                            <Typography variant="h6" color="textPrimary" sx={{ cursor: 'pointer' }}>
                                การ์ตูน
                            </Typography>
                        </Box>

                        {/* Center Section */}
                        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#00C8FF' }}>
                            READAWRITE
                        </Typography>

                        {/* Right Section */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <IconButton>
                                <NotificationsIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <AccountCircleIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="main" >
                <Outlet />
            </Box>
        </Box>

    );
}

export default AppLayout