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
import { RandomData, _MockData, select_item } from '../common/share'
import { ModalContext } from '../modal/ModalEnd';
import { FaUser } from "react-icons/fa";

interface ListWLogicProps {
    data: _MockData
}
interface status_numberProps {
    _keep: string;
    _see: string;
    _love: string;
}
const ListWLogic: React.FC<ListWLogicProps> = ({ data }) => {
    const { setNotiMessage, openShaer, closeShaer } = useContext(ModalContext);
    const [data_random, set_data_random] = useState<RandomData[]>([]);
    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    const [selectedValue, setSelectedValue] = useState<string>(select_item.invalid_select);
    const [status_number] = useState<status_numberProps>({
        _keep: Math.floor(Math.random() * 10).toString(),
        _see: Math.floor(Math.random() * 100).toString(),
        _love: Math.floor(Math.random() * 100).toString()
    })
    const handleCheckboxChange = (id: number) => {
        setSelectedIds((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };
    const handleChange = (event: SelectChangeEvent<string>) => {
        setSelectedValue(event.target.value); // Update state with selected value
    };
    useEffect(() => {
        if (selectedIds.length > 0 && selectedValue === select_item.valid_select) {
            const group = selectedIds[0].toString().split(".")[0]
            setNotiMessage(group)
            openShaer()
        } else {
            setNotiMessage("")
            closeShaer()
        }
    }, [selectedIds, selectedValue])

    useEffect(() => {
        const ranNum = Math.floor(Math.random() * data.data_random.length);
        //console.log("ranNum", data.data_random.length, data.data_random[ranNum], ranNum);
        set_data_random([data.data_random[ranNum]]);

    }, [])

    return (
        <List sx={{ p: 0 }}>
            {data_random && data_random.map((item) => (
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
                            src={item.img}
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
                                <Box sx={{ display: "flex" }}>
                                    <Typography variant="caption" color="GrayText">
                                        {item.category}
                                    </Typography>
                                    <Box sx={{ ml: 1 }}>
                                        <FaUser size={12} />
                                        <Typography variant="caption" color="GrayText" sx={{ ml: 0.5 }}>
                                            {item.author}
                                        </Typography>
                                    </Box>

                                </Box>

                                <StatusIcon
                                    keep={status_number._keep}
                                    see={status_number._see}
                                    love={status_number._love}
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
            )
            )
            }
        </List>
    )
}

export default ListWLogic