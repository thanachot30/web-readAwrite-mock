
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



const ListFixedW = () => {
    const mockData = [
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
        <>
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
                        <Checkbox disabled />

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