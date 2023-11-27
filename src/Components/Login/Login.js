import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export default function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false);



    const handleClose = () => {
        setOpen(false);
    };

    function handleLogin() {
        if (email.length < 12 || !email.includes('@gmail.com')) {
            setMessage('Invalid Email Address')
            setOpen(true);
            return;
        }
        if (password.length < 8) {
            setMessage('Password sholud be atleast 8 characters')
            setOpen(true);
            return
        }
        navigate('/dashboard')
    }

    return (
        <div className='Login-component'>
            <div className='Logo-section'>
                <img src='Greendzine-logo.png' alt='Greendzine-logo' className='Greendzine-logo'></img>
                <p className='Sub-text'>We are Electric</p>
            </div>
            <div className='Form-section'>
                <input type='email' placeholder='E-mail' className='Email-input' onChange={(e) => setEmail(e.target.value)}></input>
                <input type='password' placeholder='Password' className='Password-input' onChange={(e) => setPassword(e.target.value)}></input>
                <div className='Login-button-section'>
                    <p className='Login-button' onClick={handleLogin}>Login</p>
                </div>
            </div>
            <p className='Forgot-password-text'>Forgot Password?</p>



            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Invalid credentials
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>


        </div>
    )
}
