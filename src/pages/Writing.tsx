
import {
    Box,
    Typography,
    Container,
    Button,
    MenuItem,
    Select,
    Tab,
    Checkbox,
    Tabs,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { LiaPenNibSolid } from "react-icons/lia";
import { MdEditNote } from "react-icons/md";
import { MdManageSearch } from "react-icons/md";
import ListFixedW from '../component/ListFixedW';
import ListWLogic from '../component/ListWLogic';
import { useContext, useEffect, useState } from 'react';
import { _MockData, mockData_12 } from '../common/share';
import { ModalContext } from '../modal/ModalEnd';

const WritingPage = () => {
    const { setreadPrefill } = useContext(ModalContext);
    const [value, setValue] = useState(0);
    const [data, setdata] = useState<_MockData>()
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        const ranNum = Math.floor(Math.random() * mockData_12.length) + 1;
        const _data: _MockData | undefined = mockData_12.find((item) => item.id === ranNum)
        // console.log(_data);
        // console.log('ranNum', ranNum);
        // _data.push(mockData[ranNum])
        if (_data) {
            setdata(_data)
        }
        else {
            console.log(`Object with id === ${ranNum} not found.`);
        }
        //
        const writedata = {
            expertNumber: ranNum,
            group: "",
            story: "",
            category: ""
        }
        setreadPrefill(writedata)

    }, [])
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
                        <Checkbox size='small' disabled />
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
            <Box>
                {data && <ListWLogic data={data} />}
                {data?.data_fixed && <ListFixedW data={data} />}

            </Box>


        </Container>
    );
};

export default WritingPage;
