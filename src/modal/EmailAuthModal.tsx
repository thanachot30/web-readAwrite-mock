import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Modal, Typography, TextField, InputAdornment, IconButton } from '@mui/material';
import { ModalContext } from './ModalEnd';
import { Visibility, VisibilityOff } from '@mui/icons-material';
const EmailAuthModal: React.FC = () => {
    const { setEmail, authen_with_email } = useContext(ModalContext);
    const [open, setOpen] = useState(true);
    const [textemail, settextemail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passError, setpassError] = useState(false)
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleLogin = () => {
        //console.log(`Email: ${textemail}, Password: ${password}`);
        // Add your authentication logic here

        if (!emailError && textemail !== "") {
            if (password === import.meta.env.VITE_PASS) {
                setpassError(false)
                setEmail(textemail)
                handleClose();// can enter web 
            } else {
                setpassError(true)
            }

        }

    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const email = e.target.value;
        settextemail(email);
        setEmailError(!validateEmail(email)); // Set emailError if validation fails
    };
    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    useEffect(() => {
        if (authen_with_email !== "") {
            handleClose();// can enter web 
        } else {
            handleOpen()
        }
    }, [authen_with_email])


    return (

        <Modal
            open={open}
            aria-labelledby="auth-modal-title"
            aria-describedby="auth-modal-description"
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                }}
            >
                <Typography id="auth-modal-title" variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                    Login with Email
                </Typography>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    sx={{ mb: 2 }}
                    value={textemail}
                    onChange={handleEmailChange}
                    error={emailError} // Show error state if email is invalid
                    helperText={emailError ? 'กรุณาป้อนอีเมล' : ''} // Display error message
                />
                <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    fullWidth
                    sx={{ mb: 3 }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    error={passError}
                    helperText={passError ? 'รหัสผ่านไม่ถูกต้อง กรุณาตรวจสอบและลองอีกครั้ง' : ''}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Login
                </Button>
            </Box>
        </Modal>

    );
};

export default EmailAuthModal;
