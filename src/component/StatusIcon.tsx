
import { Box, Typography } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ListIcon from '@mui/icons-material/List';
type Props = {
    keep: string; // Number of keeps as a string
    see: string;  // Number of views as a string
    love: string; // Number of loves as a string
}
const sizeIcon = 10
const StatusIcon = (props: Props) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Keep Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <ListIcon style={{ fontSize: `${sizeIcon}px` }} />
                <Typography variant="caption" style={{ fontSize: `${sizeIcon}px` }}>{props.keep}</Typography>
            </Box>

            {/* See Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <VisibilityIcon style={{ fontSize: `${sizeIcon}px` }} />
                <Typography variant="caption" style={{ fontSize: `${sizeIcon}px` }}>{props.see}</Typography>
            </Box>

            {/* Love Icon */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                <FavoriteBorderIcon style={{ fontSize: `${sizeIcon}px` }} />
                <Typography variant="caption" style={{ fontSize: `${sizeIcon}px` }}>{props.love}</Typography>
            </Box>
        </Box>
    );
}

export default StatusIcon