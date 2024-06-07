import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import BackBtn from '../../Component/BackBtn/BackBtn';

const typostyle = {
    fontSize: '12px',
    color: '#000',
    fontWeight: '700'
};

const ChangePassword = () => {

    const [password, setPassword] = useState({
        oldpassword: '',
        newpassword: '',
        confirmpassword: ''
    });

    const [error, setError] = useState({
        oldpassword: false,
        newpassword: false,
        confirmpassword: false
    });

    const handlerPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPassword((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setError((prev) => ({
            ...prev,
            [name]: value.trim() === ''
        }));
    }

    return (
        <Box className="changepassword">
            <Box sx={{ backgroundColor: '#fff', p: 3, my: 2 }}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography component='p' sx={typostyle}>
                            OLD PASSWORD
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <input
                            type="password"
                            name="oldpassword"
                            onChange={handlerPasswordChange}
                            onBlur={handleBlur}
                            value={password.oldpassword}
                            style={{
                                borderColor: error.oldpassword ? 'red' : '',
                                borderRadius: error.oldpassword ? '3px' : ''
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container sx={{ my: 2 }}>
                    <Grid item xs={6}>
                        <Typography component='p' sx={typostyle}>
                            NEW PASSWORD
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <input
                            type="password"
                            name="newpassword"
                            onChange={handlerPasswordChange}
                            onBlur={handleBlur}
                            value={password.newpassword}
                            style={{
                                borderColor: error.newpassword ? 'red' : '',
                                borderRadius: error.newpassword ? '3px' : ''
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography component='p' sx={typostyle}>
                            CONFIRM PASSWORD
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <input
                            type="password"
                            name="confirmpassword"
                            onChange={handlerPasswordChange}
                            onBlur={handleBlur}
                            value={password.confirmpassword}
                            style={{
                                borderColor: error.confirmpassword ? 'red' : '',
                                borderRadius: error.confirmpassword ? '3px' : ''
                            }}
                        />
                    </Grid>
                </Grid>

            </Box>
            <BackBtn name='change password' link='' />
            <BackBtn name='back to main menu' link='/' />
        </Box>
    );
}

export default ChangePassword;
