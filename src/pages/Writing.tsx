import React from 'react';
import {
    Box,
    Typography,
    Container,
    Button,
    MenuItem,
    Select,
    Avatar,
    Tabs,
    Tab,
    ListItem,
    List,
    Checkbox,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListIcon from '@mui/icons-material/List';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { LiaPenNibSolid } from "react-icons/lia";
import { MdEditNote } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import StatusIcon from '../component/StatusIcon';
const WritingPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const mockData = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'web',
            description: 'บรรยาย (ออริจินอล) | web999',
            stats: { list: 0, views: 1, loves: 0 },
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'story2',
            description: 'บรรยาย (ออริจินอล) | author2',
            stats: { list: 5, views: 15, loves: 7 },
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'story3',
            description: 'บรรยาย (ออริจินอล) | author3',
            stats: { list: 2, views: 12, loves: 4 },
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            title: 'story4',
            description: 'บรรยาย (ออริจินอล) | author4',
            stats: { list: 3, views: 10, loves: 6 },
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/150',
            title: 'story5',
            description: 'บรรยาย (ออริจินอล) | author5',
            stats: { list: 1, views: 5, loves: 2 },
        },
    ];
    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4" fontWeight="bold">
                    Writing
                    <KeyboardArrowDownIcon fontSize="small" />
                </Typography>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    <Tab
                        label="งานเขียน"
                        sx={{
                            textTransform: 'none',
                            fontWeight: value === 0 ? 'bold' : 'normal',
                            //borderBottom: value === 0 ? '2px solid #00C8FF' : 'none',
                        }}
                    />
                    <Tab
                        label="สถิติ"
                        sx={{
                            textTransform: 'none',
                            color: value === 1 ? 'text.primary' : 'GrayText',
                        }}
                        disabled={true}
                    />
                    <Tab
                        label="รายงาน"
                        sx={{
                            textTransform: 'none',
                            color: value === 2 ? 'text.primary' : 'GrayText',
                        }}
                        disabled={true}
                    />
                    <Tab
                        label="การจ่ายเงิน"
                        sx={{
                            textTransform: 'none',
                            color: value === 3 ? 'text.primary' : 'GrayText',
                        }}
                        disabled={true}
                    />
                    <Tab
                        label="My Pre-order"
                        sx={{
                            textTransform: 'none',
                            color: value === 4 ? 'text.primary' : 'GrayText',
                        }}
                        disabled={true}
                    />
                </Tabs>
            </Box>
            {/* <Divider sx={{ mb: 4 }} /> */}
            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                <Button variant="outlined" startIcon={<MdEditNote />}
                    sx={{
                        flexGrow: 1, // Makes this button expand to occupy available space
                        textTransform: 'none',
                        justifyContent: 'flex-start'
                    }}>
                    งานเขียน
                </Button>
                <Button variant="outlined" startIcon={<MdManageSearch />} sx={{
                    textTransform: 'none',
                    flexGrow: 1,
                    justifyContent: 'flex-start'
                }}>
                    ตรวจคำผิด
                </Button>
                <Button variant="outlined" startIcon={<LiaPenNibSolid />} sx={{
                    textTransform: 'none',
                    flexGrow: 1,
                    justifyContent: 'flex-start'
                }}>
                    นามปากกา
                </Button>
            </Box>
            {/* Writing Management Section */}
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
                จัดการงานเขียน
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid #e0e0e0', // กรอบสีเทา
                        borderRadius: '4px', // มุมโค้ง
                        height: '29px', // กำหนดความสูงให้เท่ากัน
                        width: 'auto', // ความกว้างแบบคงท
                    }}>
                        <Checkbox size='small' />
                    </Box>

                    <Select defaultValue="จัดการ" size="small" sx={{
                        minWidth: 100, // กำหนดความกว้าง

                        height: '30px', // ความสูงเท่ากับ Checkbox
                        fontSize: '14px',
                    }}>
                        <MenuItem value="จัดการ" sx={{ fontSize: '14px', }}>จัดการ</MenuItem>
                        {/* <MenuItem value="Edit">แก้ไข</MenuItem>
                        <MenuItem value="Delete">ลบ</MenuItem> */}
                    </Select>
                </Box>
                <Button variant="contained" sx={{
                    fontSize: '13px',
                    width: 170,
                    textTransform: 'none', // Prevent uppercase transformation
                    backgroundColor: '#4DD0E1', // Teal background color
                    color: '#FFFFFF', // White text color
                    borderRadius: '24px', // Fully rounded corners
                    padding: '8px 24px', // Padding for a balanced look
                    '&:hover': {
                        backgroundColor: '#26C6DA', // Darker teal on hover
                    },
                }}>
                    เพิ่มงานเขียน
                </Button>
            </Box>
            <List>
                {mockData.map((item) => (
                    <ListItem
                        key={item.id}
                        sx={{
                            p: 1,
                            mb: 1,
                            display: 'flex',
                            alignItems: 'center',
                            gap: 2,
                            border: '1px solid #e0e0e0',
                            borderRadius: '8px',
                        }}
                        disableGutters
                    >
                        {/* Checkbox */}
                        <Checkbox />

                        {/* Avatar */}
                        <ListItemAvatar>
                            <Avatar
                                src={item.image}
                                alt={item.title}
                                sx={{ width: 56, height: 56, borderRadius: 1 }}
                            />
                        </ListItemAvatar>

                        {/* Title and Description */}
                        <ListItemText
                            primary={
                                <Typography variant="subtitle1" fontWeight="bold">
                                    {item.title}
                                </Typography>
                            }
                            secondary={
                                <Box>
                                    <Typography variant="caption" color="GrayText">
                                        {item.description}
                                    </Typography>
                                    <StatusIcon
                                        keep={item.stats.list.toString()}
                                        see={item.stats.views.toString()}
                                        love={item.stats.loves.toString()}
                                    />
                                </Box>
                            }
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-end" }}>

                            <Typography variant="caption" color="GrayText" sx={{ display: 'flex', justifyContent: 'end' }}>
                                {"edit 08-12-2567 21:24"}
                            </Typography>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                <Button
                                    variant="outlined"
                                    size='small'
                                    startIcon={<VisibilityIcon />}
                                    sx={{
                                        height: '30px',
                                        textTransform: 'none', // Prevent uppercase text
                                        borderColor: '#e0e0e0',
                                        fontSize: '10px',
                                        color: 'black',
                                        '&:hover': { borderColor: '#ccc' },
                                        borderRadius: '8px', // Rounded edges
                                    }}
                                >
                                    <Typography sx={{ fontSize: "10px", }}>หน้าอ่าน</Typography>

                                </Button>
                                <Select
                                    // size='small'
                                    defaultValue="เผยแพร่"
                                    sx={{

                                        height: '30px',
                                        minWidth: 120,
                                        borderColor: '#e0e0e0',
                                        borderRadius: '8px',
                                        '& .MuiSelect-select': {
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 1,
                                        },
                                        '& .MuiOutlinedInput-notchedOutline': {
                                            borderColor: '#e0e0e0',
                                        },
                                    }}
                                >
                                    {/* Dropdown Item */}
                                    <MenuItem value="เผยแพร่">
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    backgroundColor: '#4DD0E1', // Teal dot
                                                    borderRadius: '50%',
                                                }}
                                            />
                                            <Typography sx={{ fontSize: "10px", }}>เผยแพร่</Typography>
                                        </Box>
                                    </MenuItem>
                                    <MenuItem value="Draft">
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <Box
                                                sx={{
                                                    width: 8,
                                                    height: 8,
                                                    backgroundColor: 'gray', // Gray dot
                                                    borderRadius: '50%',
                                                }}
                                            />
                                            <Typography sx={{ fontSize: "10px", }}>Draft</Typography>
                                        </Box>
                                    </MenuItem>
                                </Select>
                            </Box>
                        </Box>
                    </ListItem>
                ))}
            </List>

        </Container>
    );
};

export default WritingPage;
