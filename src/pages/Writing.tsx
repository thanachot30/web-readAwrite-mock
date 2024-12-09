import React from 'react';
import {
    Box,
    Typography,
    Container,
    Button,
    IconButton,
    Grid,
    Paper,
    MenuItem,
    Select,
    Avatar,
    Divider,
    Icon,
    Tabs,
    Tab,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListIcon from '@mui/icons-material/List';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import { LiaPenNibSolid } from "react-icons/lia";
import { MdEditNote } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
const WritingPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Container maxWidth="md" sx={{ py: 3 }}>
            {/* Header Section */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4" fontWeight="bold">
                    Writing
                    <KeyboardArrowDownIcon fontSize="small" />
                </Typography>
            </Box>

            {/* Navigation Tabs */}
            {/* <Box sx={{ display: 'flex', gap: 1, }}>
                <Button variant="text" sx={{ textTransform: 'none', fontWeight: 'bold', borderBottom: '2px solid #00C8FF' }}>
                    งานเขียน
                </Button>
                <Button variant="text" sx={{ textTransform: 'none', color: 'GrayText' }}>
                    สถิติ
                </Button>
                <Button variant="text" sx={{ textTransform: 'none', color: 'GrayText' }}>
                    รายงาน
                </Button>
                <Button variant="text" sx={{ textTransform: 'none', color: 'GrayText' }}>
                    การจ่ายเงิน
                </Button>
                <Button variant="text" sx={{ textTransform: 'none', color: 'GrayText' }}>
                    My Pre-order
                </Button>
            </Box> */}
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
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Select defaultValue="จัดการ" size="small" sx={{ minWidth: 120 }}>
                        <MenuItem value="จัดการ">จัดการ</MenuItem>
                        <MenuItem value="Edit">แก้ไข</MenuItem>
                        <MenuItem value="Delete">ลบ</MenuItem>
                    </Select>
                </Box>
                <Button variant="contained" sx={{ textTransform: 'none', backgroundColor: '#00C8FF', '&:hover': { backgroundColor: '#00B2E3' } }}>
                    เพิ่มงานเขียน
                </Button>
            </Box>

            {/* Writing List */}
            <Paper sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 2 }}>
                <Avatar
                    src="https://via.placeholder.com/150"
                    alt="writing"
                    sx={{ width: 56, height: 56, borderRadius: 1 }}
                />
                <Box sx={{ flex: 1 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        web
                    </Typography>
                    <Typography variant="caption" color="GrayText">
                        บรรยาย (ออริจินอล) | web999
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <ListIcon fontSize="small" />
                        <Typography variant="caption">0</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <VisibilityIcon fontSize="small" />
                        <Typography variant="caption">1</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <FavoriteBorderIcon fontSize="small" />
                        <Typography variant="caption">0</Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default WritingPage;
