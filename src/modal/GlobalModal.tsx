import { useContext, useState } from 'react'
import { ModalContext } from './ModalEnd';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';


const GlobalModal = () => {
    const { isOpen } = useContext(ModalContext);
    const [email, setEmail] = useState('');
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value); // Update the state when the user types
    };
    const generateFormLink = () => {
        if (email != '') {
            const baseUrl = `https://docs.google.com/forms/d/e/1FAIpQLScKSWblfLa0OayI4b-Gmt2pGco5fUEsZXZPYLEBLTCq55EJzg/viewform?usp=pp_url&entry.1385240585=${email}`;
            return baseUrl;
        }

    };
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
                    <TextField
                        label="Enter your email"
                        variant="outlined"
                        size="small"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{ m: 1, width: '300px' }}
                    />
                    <Button
                        disabled={email != '' ? false : true}
                        component="a" // Use 'a' element for navigation
                        href={generateFormLink()}
                        target="_blank" // Open in a new tab    
                        rel="noopener noreferrer" // For security reasons
                        //sx={{ mt: 2, ml: 2 }} // Margin for spacing
                        variant="contained"
                        size="small"
                        sx={{
                            borderRadius: '24px', // Fully rounded corners
                            padding: '8px 24px', // Padding for a balanced look
                            backgroundColor: '#4DD0E1', // Set the background color
                            color: '#fff', // Set the text color for better contrast
                            '&:hover': {
                                backgroundColor: '#26C6DA', // Adjust hover color
                            },
                            '&:disabled': {
                                backgroundColor: '#B2EBF2', // Optional: disabled state color
                            },
                        }}
                    >
                        go to Form
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