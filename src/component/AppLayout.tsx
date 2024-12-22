
import { AppBar, Toolbar, Typography, IconButton, Box, Container, MenuItem, Menu, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import GlobalModal from '../modal/GlobalModal';
import { useContext, useEffect, useState } from 'react';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { ModalContext } from '../modal/ModalEnd';

const AppLayout = () => {
    // const notifications = [
    //     { id: 1, message: 'New comment on your post' },
    //     { id: 2, message: 'Your order has been shipped' },
    //     { id: 3, message: 'You have a new follower' },
    // ];
    const { isNoti, openNoti, closeNoti } = useContext(ModalContext);
    const [anchorEl, setAnchorEl] = useState<Element | null>(null); // State for the menu anchor
    const [tabValue, setTabValue] = useState(0);
    // const open = Boolean(anchorEl);

    const handleOpenMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
        openNoti()
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        closeNoti()
    };
    const handleTabChange = (_event: any, newValue: any) => {
        setTabValue(newValue);
    };
    const navigate = useNavigate();

    useEffect(() => {
        // Select the button element by its class name or any other unique selector
        const buttonElement = document.querySelector('.MuiButtonBase-root');
        setAnchorEl(buttonElement);
    }, []); // Only run this effect once on mount

    return (
        <Box>
            <AppBar position="fixed" color="default" elevation={0} sx={{ borderBottom: '1px solid #e0e0e0' }}>
                <Container maxWidth="md"> {/* Container to control width */}
                    <Toolbar sx={{ justifyContent: 'space-between', }}>
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
                        <Typography
                            component={Link} // Use Link for navigation
                            to="/" // Navigate to '/'
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                color: '#00C8FF',
                                textDecoration: 'none', // Remove underline for the link
                                cursor: 'pointer',
                            }}>
                            READAWRITE
                        </Typography>

                        {/* Right Section */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                            <Box>
                                <IconButton onClick={handleOpenMenu} className="MuiButtonBase-root MuiIconButton-root">
                                    <NotificationsIcon />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={isNoti}
                                    onClose={handleCloseMenu}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                >

                                    <Tabs
                                        value={tabValue}
                                        onChange={handleTabChange}
                                        variant="fullWidth"
                                        TabIndicatorProps={{
                                            style: {
                                                backgroundColor: '#00C8FF', // Custom tab indicator color
                                                height: '3px', // Indicator height
                                            },
                                        }}

                                    >
                                        <Tab
                                            icon={<NotificationsIcon sx={{
                                                color: tabValue === 0 ? '#00C8FF' : 'gray', fontSize: '20px'
                                            }} />}
                                            disableRipple
                                        // sx={{
                                        //     minWidth: '40px', // Reduce the width of each tab
                                        // }}
                                        />
                                        <Tab
                                            icon={<MailOutlineIcon sx={{ color: tabValue === 1 ? '#00C8FF' : 'gray', fontSize: '20px' }} />}
                                            disableRipple
                                            disabled
                                        // sx={{
                                        //     minWidth: '40px', // Reduce the width of each tab
                                        // }}
                                        />
                                        <Tab
                                            icon={<ChatBubbleOutlineIcon sx={{ color: tabValue === 2 ? '#00C8FF' : 'gray', fontSize: '20px' }} />}
                                            disableRipple
                                            disabled
                                        // sx={{
                                        //     minWidth: '40px', // Reduce the width of each tab
                                        // }}
                                        />
                                        <Tab
                                            icon={<VolumeUpIcon sx={{ color: tabValue === 3 ? '#00C8FF' : 'gray', fontSize: '20px' }} />}
                                            disableRipple
                                            disabled
                                        // sx={{
                                        //     minWidth: '40px', // Reduce the width of each tab
                                        // }}
                                        />
                                    </Tabs>
                                    <Box sx={{ p: 2 }}>
                                        {tabValue === 0 && <Typography variant="body2">Notifications Tab Content</Typography>}
                                        {tabValue === 1 && <Typography variant="body2">Messages Tab Content</Typography>}
                                        {tabValue === 2 && <Typography variant="body2">Chats Tab Content</Typography>}
                                        {tabValue === 3 && <Typography variant="body2">Sounds Tab Content</Typography>}
                                    </Box>
                                </Menu>
                            </Box>

                            <IconButton onClick={() => navigate('/writing')}>
                                <EditIcon />
                            </IconButton>
                            <IconButton>
                                <AccountCircleIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="main" sx={{ pt: 6 }}>
                <Outlet />
                {/* <GlobalModal /> */}
            </Box>

        </Box>

    );
}

export default AppLayout