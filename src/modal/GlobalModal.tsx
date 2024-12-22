import { useContext } from 'react'
import { ModalContext } from './ModalEnd';
import { Box, Button, Modal, Typography } from '@mui/material';


const GlobalModal = () => {
    const { isOpen, closeModal } = useContext(ModalContext);
    return (
        <Modal open={isOpen} >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: 'auto',
                    height: 'auto',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    p: 3,
                    borderRadius: 2,
                    boxShadow: 1,
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h6">จบการทดสอบ</Typography>
                    <Button
                        component="a" // Use 'a' element for navigation
                        href="https://docs.google.com/forms/d/e/1FAIpQLSewltwA_6cqWtpzKb3kj8OTCDC15hhUDfy9etwR5iNNfcUDNg/viewform?usp=pp_url&entry.907792499=action" // Replace with your Google Form URL
                        target="_blank" // Open in a new tab
                        rel="noopener noreferrer" // For security reasons
                        //sx={{ mt: 2, ml: 2 }} // Margin for spacing
                        variant="contained"
                        size="small"
                    >
                        Open Google Form
                    </Button>
                </Box>

                {/* <Button onClick={closeModal} sx={{ mt: 2 }} variant='outlined' size='small'>
                    Close
                </Button> */}
            </Box>
        </Modal>
    );
}

export default GlobalModal