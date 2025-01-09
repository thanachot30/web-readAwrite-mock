import { Box, CircularProgress, Modal, Typography } from '@mui/material';
import { useContext, useEffect } from 'react'
import { ModalContext } from './ModalEnd';



const WriterModalShare = () => {
    const { isShaer, closeShaer, openNoti } = useContext(ModalContext);
    useEffect(() => {
        // Close the modal after 5 seconds
        if (isShaer === true) {
            const timer = setTimeout(() => {
                closeShaer()
                openNoti()
                console.log("5s");
            }, 5000);
            return () => clearTimeout(timer); // Cleanup the timer on unmount
        }


    }, [isShaer]);

    return (
        <Modal open={isShaer} onClose={() => closeShaer()}>
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'white',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 3,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    ระบบกำลังตรวจสอบเนื้อหานิยายของคุณ
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                    คุณจะได้รับการแจ้งเตือนภายใน 2 วันทำการ
                    <br />
                    โดยขณะนี้เนื้อหาของคุณจะยังเผยแพร่อยู่ในหมวดตั้งต้น
                </Typography>
                <CircularProgress sx={{ color: '#26C6DA' }} />
            </Box>
        </Modal>
    )
}

export default WriterModalShare