import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react'
import { ModalContext } from './ModalEnd';



const WriterModalShare = () => {
    const { isShaer, closeShaer, openVisibleNoti } = useContext(ModalContext);
    const [showBtn, setshowBtn] = useState(false)
    useEffect(() => {
        // Close the modal after 5 seconds
        if (isShaer === true) {
            const timer = setTimeout(() => {
                setshowBtn(true)
                //console.log("5s");
            }, 1500);
            return () => {
                clearTimeout(timer)
                setshowBtn(false)
            }; // Cleanup the timer on unmount
        }
    }, [isShaer]);
    const handleClickOK = () => {
        closeShaer(); // Close the modal
        const timer = setTimeout(() => {
            openVisibleNoti()
        }, 3000);
        return () => clearTimeout(timer)
    };
    return (
        <Modal open={isShaer}>
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
                {!showBtn && <CircularProgress sx={{ color: '#26C6DA' }} />}

                {showBtn && <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOK}
                    sx={{
                        fontSize: '13px',
                        width: 100,
                        textTransform: 'none', // Prevent uppercase transformation
                        backgroundColor: '#4DD0E1', // Teal background color
                        color: '#FFFFFF', // White text color
                        borderRadius: '24px', // Fully rounded corners
                        padding: '8px 24px', // Padding for a balanced look
                        '&:hover': {
                            backgroundColor: '#26C6DA', // Darker teal on hover
                        },
                    }}
                >
                    OK
                </Button>}

            </Box>
        </Modal>
    )
}

export default WriterModalShare