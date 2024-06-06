import { Box, Button, Grid, Typography } from '@mui/material'
import Profileimg from '../../assets/img/ProfileTop.webp';
import Logoutnow from '../../assets/img/LogOutNow.webp';
import './styles.scss';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const nav = useNavigate()


  const handlerLogout = () => {
    console.log('working');
  }

  const navtoProfile = () => {
    nav('/profile');
  }

  return (
    <Box className="navbar">
      <Grid container>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-start' }}>
          <img onClick={navtoProfile} src={Profileimg} className='profileimg' alt="" />
        </Grid>
        <Grid item xs={4}>
          <Box>
            <Typography component='p' sx={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>
              C153100
            </Typography>
            <Typography component='p'>
              <Typography component='span' sx={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>
                Coins:
              </Typography>
              <Typography component='span' sx={{ marginLeft: 1, color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>
                500
              </Typography>
            </Typography>
            <Typography component='p' sx={{ fontSize: '12px' }}>
              <Typography component='span' sx={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>
                Used Coins:
              </Typography>
              <Typography component='span' sx={{ marginLeft: 1, color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>
                0
              </Typography>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button className='logoutbutton' onClick={handlerLogout}>
            <img src={Logoutnow} className='logoutimg' alt="" />
            <Typography sx={{ fontSize: '12px', color: '#fff', textTransform: 'capitalize' }}>
              logout
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Navbar