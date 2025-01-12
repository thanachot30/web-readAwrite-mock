
import { AppBar, Toolbar, Typography, IconButton, Box, Container, Menu, Tabs, Tab } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EditIcon from '@mui/icons-material/Edit';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { ModalContext } from '../modal/ModalEnd';
import { notifications } from '../common/share';
import Badge from '@mui/material/Badge';
import { FaRobot } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import Icon_robotHuman from './Icon_robotHuman'
import GlobalModal from '../modal/GlobalModal';
import ReaderModalEnd from '../modal/ReaderModalEnd';
import WriterModalEnd from '../modal/WriterModalEnd';
import WriterModalShare from '../modal/WriterModalShare';
import EmailAuthModal from '../modal/EmailAuthModal';

const AppLayout = () => {
    const { isNoti, openNoti, closeNoti, noti, openWriteModal, isVisibleNoti, closeVisibleNoti } = useContext(ModalContext);
    const [anchorEl, setAnchorEl] = useState<Element | null>(null); // State for the menu anchor
    const [tabValue, setTabValue] = useState(0);
    const [notiMessage, setNotiMessage] = useState<string>()
    // const open = Boolean(anchorEl);
    const icon_size = 60

    const handleOpenMenu = (event: any) => {
        setAnchorEl(event.currentTarget);
        openNoti()
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
        closeNoti()
        if (notiMessage != "") {
            openWriteModal()//end modal
        }

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

    useEffect(() => {
        //console.log(selectedIds, data_random);
        if (noti !== "") {
            const find_mockData = notifications.find((e) => {
                //console.log(group);
                return e.id === parseInt(noti)
            })
            setNotiMessage(find_mockData?.type)
            //setinvisibleBadge(false)
        } else {
            setNotiMessage("")
            //setinvisibleBadge(true)
            closeVisibleNoti()
        }
    }, [noti])

    return (
        <Box>
            <AppBar position="fixed" color="default" elevation={0} sx={{
                borderBottom: '1px solid #e0e0e0', bgcolor: '#FFFFFF'

            }}>
                <Container maxWidth="lg"> {/* Container to control width */}
                    <Toolbar sx={{ justifyContent: 'space-between', paddingX: 2 }}>
                        {/* Left Section */}
                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Typography variant="h6" color="textPrimary" sx={{ cursor: 'pointer', color: '#4DD0E1' }}>
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
                                color: '#4DD0E1',
                                textDecoration: 'none', // Remove underline for the link
                                cursor: 'pointer',
                            }}>
                            READAWRITE
                        </Typography>

                        {/* Right Section */}
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <IconButton
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 45, // Diameter of the circle
                                    height: 45, // Diameter of the circle
                                    backgroundColor: '#e0e0e0', // Light gray background
                                    borderRadius: '50%', // Makes it a circle
                                }}
                            >
                                <SearchIcon sx={{ color: 'black', fontSize: 24 }} />
                            </IconButton>
                            <Box>
                                <IconButton onClick={handleOpenMenu} sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 45, // Diameter of the circle
                                    height: 45, // Diameter of the circle
                                    backgroundColor: '#e0e0e0', // Light gray background
                                    borderRadius: '50%', // Makes it a circle
                                }} className="MuiButtonBase-root MuiIconButton-root">

                                    <Badge badgeContent={1} color="error" invisible={!isVisibleNoti} >
                                        <NotificationsIcon sx={{ color: 'black', fontSize: 24 }} />
                                    </Badge>

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
                                        {tabValue === 0 && <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
                                            <Box sx={{ display: 'flex', alignItems: "center" }}>
                                                <Box sx={{ m: 1 }}>
                                                    {[1, 4, 7, 10].includes(parseInt(noti)) && <FaRobot size={icon_size} />}
                                                    {[2, 5, 8, 11].includes(parseInt(noti)) && <BsPeopleFill size={icon_size} />}
                                                    {[3, 6, 9, 12].includes(parseInt(noti)) && <Icon_robotHuman _width={icon_size} _height={icon_size} />}
                                                </Box>
                                                {notiMessage}
                                            </Box>
                                        </Typography>}

                                        {tabValue === 1 && <Typography variant="body2">Messages Tab Content</Typography>}
                                        {tabValue === 2 && <Typography variant="body2">Chats Tab Content</Typography>}
                                        {tabValue === 3 && <Typography variant="body2">Sounds Tab Content</Typography>}
                                    </Box>
                                </Menu>
                            </Box>

                            <IconButton onClick={() => navigate('/writing')}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 45, // Diameter of the circle
                                    height: 45, // Diameter of the circle
                                    backgroundColor: '#e0e0e0', // Light gray background
                                    borderRadius: '50%', // Makes it a circle
                                }}>

                                <EditIcon sx={{ color: 'black', fontSize: 24 }} />


                            </IconButton>
                            <IconButton
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    width: 45, // Diameter of the circle
                                    height: 45, // Diameter of the circle
                                    backgroundColor: '#e0e0e0', // Light gray background
                                    borderRadius: '50%', // Makes it a circle
                                }}
                            >
                                <AccountCircleIcon sx={{ color: 'black', fontSize: 24 }} />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box component="main" sx={{ pt: 6 }}>

                <Outlet />
                <GlobalModal />
                <ReaderModalEnd />
                <WriterModalEnd />
                <WriterModalShare />
                <EmailAuthModal />
            </Box>

        </Box>

    );
}

export default AppLayout