import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React from 'react';
import StatusIcon from './StatusIcon';

type Props = {
    title: string;
    writer: string;
    status: {
        love: string;
        see: string;
        keep: string;
    };
};

const InfoImageGrid = (props: Props) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between', // Space between title, writer, and status
                alignItems: 'flex-start', // Align everything to the left
                gap: 0.5, // Add spacing between rows
                width: '100%',
            }}
        >
            {/* Title */}
            <Typography
                sx={{
                    fontSize: '13px',
                    fontWeight: 'bold',
                    lineHeight: 1.2, // Adjust line height for better alignment
                    //whiteSpace: 'nowrap', // Prevent text wrapping
                    //overflow: 'hidden',
                    //textOverflow: 'ellipsis',
                }}
            >
                {props.title}
            </Typography>

            {/* Writer */}
            <Typography
                sx={{
                    fontSize: '8px',
                    color: 'GrayText',
                    lineHeight: 1.2,
                    //whiteSpace: 'nowrap',
                    // overflow: 'hidden',
                    // textOverflow: 'ellipsis',
                }}
            >
                {props.writer}
            </Typography>

            {/* Status */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 0.5, // Add some spacing above the status row
                }}
            >
                <StatusIcon
                    keep={props.status.keep}
                    see={props.status.see}
                    love={props.status.love}
                />
            </Box>
        </Box>
    );
};

export default InfoImageGrid;
