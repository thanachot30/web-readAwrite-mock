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
    SelectChangeEvent,
} from '@mui/material';
import StatusIcon from './StatusIcon';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useContext, useEffect, useState } from 'react';
// import { ModalContext } from '../modal/ModalEnd';
import { mockData, notifications, select_item } from '../common/share'
import { ModalContext } from '../modal/ModalEnd';


const ListWLogic = () => {
    const { setNotiMessage } = useContext(ModalContext);
    const [data, setdata] = useState<mockData[]>()
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [selectedValue, setSelectedValue] = useState<string>(select_item.invalid_select);
    const handleCheckboxChange = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
        //openNoti();

    };
    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedValue(event.target.value); // Update state with selected value
    };

    useEffect(() => {
        const _data = []
        const ranNum = Math.floor(Math.random() * mockData.length);
        // push data to array to display
        _data.push(mockData[ranNum])
        setdata(_data)
    }, [])

    useEffect(() => {
        if (selectedIds.length > 0 && selectedValue === select_item.valid_select) {
            //console.log("send noti");
            console.log(selectedIds[0]);
            const find_mockData = notifications.find((e) => {
                return e.id === selectedIds[0]
            })
            console.log(find_mockData?.type.length);

            setNotiMessage(find_mockData?.type as string)
        } else {
            setNotiMessage("")
        }
    }, [selectedIds, selectedValue])


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
                                disabled={selectedIds.length > 0 ? false : true}
                                value={selectedValue}
                                onChange={handleChange}
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
                                <MenuItem value={select_item.valid_select}>
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
                                <MenuItem value={select_item.invalid_select}>
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