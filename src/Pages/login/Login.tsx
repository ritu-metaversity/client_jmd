import { Box, Button, FilledInput, FormControl, TextField, Typography } from '@mui/material'
import './styles.scss';
import bgImage from '../../assets/img/bg-01.webp';
import jmdlogo from '../../assets/img/jmd-white-logo.webp';

const Login = () => {
    const handlerSubmit = (e: any) => {
        e.preventDefault();

    }


    return (
        <Box sx={{
            backgroundImage: `url(${bgImage})`,
        }} className="loginparent">
            <Box sx={{}} className="loginformparent">
                <Box className="wrapper">
                    <img src={jmdlogo} className='jmdloginlogo' alt="" />
                    <Typography component="p" className='msg'></Typography>
                </Box>
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                >
                    <form onSubmit={handlerSubmit} className='form_'>

                        <FormControl variant="filled" sx={{ width: '100%' }}>
                            <FilledInput sx={{
                                padding: '4px 0',
                                width: '100%',
                                borderRadius: '0',
                                '::placeholder': { color: 'red' }
                            }} id="component-filled" placeholder="User name" />
                        </FormControl>
                        <FormControl variant="filled" sx={{ width: '100%' }}>
                            <FilledInput
                                sx={{
                                    padding: '4px 0',
                                    width: '100%',
                                    borderRadius: '0',
                                    '&::placeholder': { backgroundColor: 'red' }
                                }} id="component-filled" placeholder="Password" />
                        </FormControl>

                        <Button sx={{
                            ":hover": {
                                backgroundColor: '#D41872'
                            },

                            mt: 3,
                            textTransform: 'uppercase',
                            fontFamily: 'ubuntu-bold',
                            backgroundColor: '#D41872',
                            padding: '0 20px',
                            minWidth: '160px',
                            height: '42px',
                            borderRadius: '21px',
                            fontSize: '18px',
                            color: '#fff'
                        }}>
                            submit
                        </Button>

                    </form>

                    <Typography component='h6' sx={{ mt: 4, fontFamily: 'Ubuntu-Bold', color: '#fff', fontSize: '16px' }}>
                        ALL ABOUT FOR ONLINE GAME ZONE © 2021
                        <br />
                        JMD SPORTS11.COM
                    </Typography>
                </Box>

            </Box>
        </Box >
    )
}

export default Login