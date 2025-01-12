import React, { useContext, useState } from 'react'
import { ModalContext } from './ModalEnd';
import { Box, Button, FormControl, FormControlLabel, FormLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material';
import { readCategory } from '../common/share';



const ReaderModalEnd = () => {
    const { isOpenReadModal, readPrefill, setWebCompleteTrue, authen_with_email } = useContext(ModalContext);
    const [group, setgroup] = useState(''); // Default selection

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setgroup((event.target as HTMLInputElement).value);
    };

    const generateFormLink = () => {
        let expertString = ''
        let story = ''
        let category = ''
        if (group != "") {
            //Correct+Category
            switch (readPrefill.expertNumber) {
                case 1:
                    expertString = 'Author+1+(Low+%E2%80%93+AI)'
                    break;
                case 2:
                    expertString = 'Author+2+(Low+%E2%80%93+Human)'
                    //Author 2 (Low – Human)
                    break;
                case 3:
                    expertString = 'Author+3+(Low+%E2%80%93+AI+and+Human)'
                    //Author 3 (Low – AI and Human)
                    break;
                case 4:
                    expertString = 'Author+4+(High+%E2%80%93+AI)'
                    //Author 4 (High – AI)
                    break;
                case 5:
                    expertString = 'Author+5+(High+%E2%80%93+Human)'
                    //Author 5 (High – Human)
                    break;
                case 6:
                    expertString = 'Author+6+(High+%E2%80%93+AI+and+Human)'
                    break
            }
            //
            if (readPrefill.story === readCategory.correct) {
                story = 'Correct+Category'
            } else {
                story = 'Incorrect+Category'
            }
            //
            switch (readPrefill.category) {
                case "LoveNovel":
                    category = "Original+Love"
                    break;
                case "BoyLoveNovel":
                    category = "Boy+Love"
                    break;
                case "GirlLoveNovel":
                    category = "Girl+Love"
                    break;
            }
            const baseUrl = `https://docs.google.com/forms/d/e/1FAIpQLSe6fy0ci-P4PE7k1c8k2aB2KYAJhqHGfted9RtGzaoGl6Yr1A/viewform?usp=pp_url&entry.1385240585=${authen_with_email}&entry.1343983776=${expertString}&entry.528371891=Approve&entry.1111459747=${group}&entry.1163206236=${story}&entry.2068825976=${category}`
            setWebCompleteTrue();
            return baseUrl
        }
    };

    //console.log(readPrefill);

    return (
        <Modal open={isOpenReadModal} >
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
                    <Typography variant="h6">🫶 จบการทดสอบนักอ่าน 🤟🤟</Typography>
                    {/* <TextField
                        label="Enter your email"
                        variant="outlined"
                        size="small"
                        value={email}
                        onChange={handleEmailChange}
                        sx={{ m: 1, width: '300px' }}
                    /> */}
                    <Box sx={{ p: 2 }}>
                        <FormControl>
                            <FormLabel id="subscriber-select-label">คุณกดติดตามนักเขียนท่านใดหรือไม่?</FormLabel>
                            <RadioGroup
                                aria-labelledby="subscriber-select-label"
                                name="user-type"
                                value={group}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%A1+(Subscriber)" control={<Radio />} label="ผู้ติดตาม (Subscriber)" />
                                <FormControlLabel value="%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%84%E0%B8%A1%E0%B9%88%E0%B9%84%E0%B8%94%E0%B9%89%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B2%E0%B8%A1+(Non-subsciber)" control={<Radio />} label="ผู้ที่ไม่ได้ติดตาม (Non-subsciber)" />
                            </RadioGroup>
                        </FormControl>
                    </Box>

                    <Button
                        disabled={group != '' ? false : true}
                        component="a" // Use 'a' element for navigation
                        onClick={() => window.open(generateFormLink(), '_blank')}
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

export default ReaderModalEnd