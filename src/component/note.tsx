import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import React from 'react'
import StatusIcon from './StatusIcon';

type Props = {
    title: string,
    writer: string,
    status: {
        love: string,
        see: string,
        keep: string
    }
}

const InfoImageGrid = (props: Props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            <Typography style={{ fontSize: '13px', }}>
                {props.title}
            </Typography>

            <Typography style={{ fontSize: '8px', color: 'GrayText' }}>
                {props.writer}
            </Typography>

            <Box>
                <StatusIcon keep={props.status.keep} see={props.status.see} love={props.status.love} />
            </Box>

        </Box>
    )
}

export default InfoImageGrid