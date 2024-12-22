import {
    Box,
    Typography,
    Button,
    MenuItem,
    Select,
    Avatar,
    ListItem,
    List,
    Checkbox,
    ListItemAvatar,
    ListItemText,
} from '@mui/material';
import StatusIcon from './StatusIcon';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../modal/ModalEnd';

interface mockData {
    id: number;
    image: string;
    title: string;
    description: string;
    stats: {
        list: number;
        views: number;
        loves: number;
    };
}

const ListWLogic = () => {
    const { openNoti, closeNoti } = useContext(ModalContext);
    const [data, setdata] = useState<mockData[]>()
    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleCheckboxChange = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
        //openNoti();
    };
    const mockData: mockData[] = [
        {
            id: 1,
            image: 'https://via.placeholder.com/150',
            title: 'web story1',
            description: 'บรรยาย (ออริจินอล) | author1',
            stats: { list: 3, views: 10, loves: 5 },
        },
        {
            id: 2,
            image: 'https://via.placeholder.com/150',
            title: 'web story2',
            description: 'บรรยาย (ออริจินอล) | author2',
            stats: { list: 5, views: 15, loves: 7 },
        },
        {
            id: 3,
            image: 'https://via.placeholder.com/150',
            title: 'web story3',
            description: 'บรรยาย (ออริจินอล) | author3',
            stats: { list: 8, views: 20, loves: 10 },
        },
        {
            id: 4,
            image: 'https://via.placeholder.com/150',
            title: 'web story4',
            description: 'บรรยาย (ออริจินอล) | author4',
            stats: { list: 2, views: 12, loves: 4 },
        },
        {
            id: 5,
            image: 'https://via.placeholder.com/150',
            title: 'web story5',
            description: 'บรรยาย (ออริจินอล) | author5',
            stats: { list: 6, views: 25, loves: 12 },
        },
        {
            id: 6,
            image: 'https://via.placeholder.com/150',
            title: 'web story6',
            description: 'บรรยาย (ออริจินอล) | author6',
            stats: { list: 4, views: 18, loves: 8 },
        },
        {
            id: 7,
            image: 'https://via.placeholder.com/150',
            title: 'web story7',
            description: 'บรรยาย (ออริจินอล) | author7',
            stats: { list: 7, views: 30, loves: 15 },
        },
        {
            id: 8,
            image: 'https://via.placeholder.com/150',
            title: 'web story8',
            description: 'บรรยาย (ออริจินอล) | author8',
            stats: { list: 9, views: 40, loves: 20 },
        },
        {
            id: 9,
            image: 'https://via.placeholder.com/150',
            title: 'web story9',
            description: 'บรรยาย (ออริจินอล) | author9',
            stats: { list: 1, views: 5, loves: 2 },
        },
        {
            id: 10,
            image: 'https://via.placeholder.com/150',
            title: 'web story10',
            description: 'บรรยาย (ออริจินอล) | author10',
            stats: { list: 10, views: 50, loves: 25 },
        },
    ];
    useEffect(() => {
        const _data = []
        const ranNum = Math.floor(Math.random() * mockData.length);
        // push data to array to display
        _data.push(mockData[ranNum])
        setdata(_data)
    }, [])

    console.log('selectedIds', selectedIds);

    return (
        <List sx={{ p: 0 }}>
            {data?.map((item) => (
                <ListItem
                    key={item.id}
                    sx={{
                        p: 1,
                        // mb: 1,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        border: '1px solid #e0e0e0',
                        borderRadius: '8px',
                    }}
                    disableGutters
                >
                    {/* Checkbox */}
                    <Checkbox
                        checked={selectedIds.includes(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                    />

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
                                defaultValue="ไม่เผยแพร่"
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
                                <MenuItem value="ไม่เผยแพร่">
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                backgroundColor: 'gray', // Gray dot
                                                borderRadius: '50%',
                                            }}
                                        />
                                        <Typography sx={{ fontSize: "10px", }}>ไม่เผยแพร่</Typography>
                                    </Box>
                                </MenuItem>
                            </Select>
                        </Box>
                    </Box>
                </ListItem>
            ))}
        </List>
    )
}

export default ListWLogic