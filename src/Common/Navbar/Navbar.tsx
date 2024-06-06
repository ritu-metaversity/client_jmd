import { Box, Grid } from '@mui/material'
import Profileimg from '../../assets/img/ProfileTop.webp'
const Navbar = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <img src={Profileimg} className='profileimg' alt="" />
        </Grid>
        <Grid item xs={4}>

        </Grid>
        <Grid item xs={4}>
          
        </Grid>
      </Grid>
    </Box>
  )
}

export default Navbar