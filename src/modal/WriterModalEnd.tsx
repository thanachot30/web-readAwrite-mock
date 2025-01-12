import { Box, Button, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ModalContext } from './ModalEnd';



const WriterModalEnd = () => {
    const { isOpenWriteModal, readPrefill, setWebCompleteTrue, authen_with_email } = useContext(ModalContext);
    const [group, setgroup] = useState(''); // Default selection
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setgroup((event.target as HTMLInputElement).value);
    };
    const generateFormLink = () => {

        let expertString = ''
        switch (readPrefill.expertNumber) {
            case 1:
            case 7:
                expertString = 'Author+1+(Low+%E2%80%93+AI)';
                break;
            case 2:
            case 8:
                expertString = 'Author+2+(Low+%E2%80%93+Human)';
                break;
            case 3:
            case 9:
                expertString = 'Author+3+(Low+%E2%80%93+AI+and+Human)';
                break;
            case 4:
            case 10:
                expertString = 'Author+4+(High+%E2%80%93+AI)';
                break;
            case 5:
            case 11:
                expertString = 'Author+5+(High+%E2%80%93+Human)';
                break;
            case 6:
            case 12:
                expertString = 'Author+6+(High+%E2%80%93+AI+and+Human)';
                break;
            default:
                expertString = 'Unknown Author';
        }
        const baseUrl = `https://docs.google.com/forms/d/e/1FAIpQLSckD0U0kwiXKVQZxrpFEoOKTc-8Rq2v07tcJqYeUZq95EIc2A/viewform?usp=pp_url&entry.1385240585=${authen_with_email}&entry.1343983776=${expertString}&entry.528371891=Approve&entry.1111459747=${group}`
        //
        setWebCompleteTrue()
        //
        return baseUrl
    }

    return (
        <Modal open={isOpenWriteModal} >
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
                    <Typography variant="h6">😝 จบการทดสอบนักเขียน 🩵🩵</Typography>

                    <Box sx={{ p: 2 }}>
                        <FormControl>
                            <FormLabel id="subscriber-select-label">คุณเป็นนักเขียนอิสระหรือสำนักพิมพ์?</FormLabel>
                            <RadioGroup
                                aria-labelledby="subscriber-select-label"
                                name="user-type"
                                value={group}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%AD%E0%B8%B4%E0%B8%AA%E0%B8%A3%E0%B8%B0" control={<Radio />} label="นักเขียนอิสระ (Freelancer)" />
                                <FormControlLabel value="%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B8%A0%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%95%E0%B9%89%E0%B8%AA%E0%B8%B3%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%9E%E0%B8%B4%E0%B8%A1%E0%B8%9E%E0%B9%8C" control={<Radio />} label="นักเขียนภายใต้สำนักพิมพ์ (Under publisher)" />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Button
                        disabled={group != '' ? false : true}
                        component="a" // Use 'a' element for navigation
                        onClick={() => window.open(generateFormLink(), '_blank')}
                        //href={generateFormLink()}
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
                        submit form
                    </Button>
                </Box>

                {/* <Button onClick={closeModal} sx={{ mt: 2 }} variant='outlined' size='small'>
                    Close
                </Button> */}
            </Box>
        </Modal>
    )
}

export default WriterModalEnd