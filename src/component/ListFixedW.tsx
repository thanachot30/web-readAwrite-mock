
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
import { _MockData } from '../common/share';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

interface ListWLogicProps {
    data: _MockData
}
interface status_numberProps {
    _keep: string;
    _see: string;
    _love: string;
}

const ListFixedW: React.FC<ListWLogicProps> = ({ data }) => {
    const [status_number] = useState<status_numberProps>({
        _keep: Math.floor(Math.random() * 10).toString(),
        _see: Math.floor(Math.random() * 100).toString(),
        _love: Math.floor(Math.random() * 100).toString()
    })

    return (
        <>
            <List>
                {data.data_fixed && data.data_fixed.map((item, index) => (
                    <ListItem
                        key={index}
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
                        <Checkbox disabled />

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
                                    disabled
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
        </>
    )
}

export default ListFixedW