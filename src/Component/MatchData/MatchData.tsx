import { Box, Typography } from "@mui/material"
import './match.scss'
import { Link } from "react-router-dom"
import crick from '../../assets/img/4.png'

const MatchData = () => {
  return (
    <Box className="match_box">
      <Link to="/main/bet-details/33321208">
        <Box className="TeamName">
          <Box className="sub_team">
            <img src={crick} alt="cricket" /> 
            <Typography component="p">USA v Pakistan</Typography>
            
          </Box>
        </Box>
        <Box className="profile_details">
            <Typography>Jun 6, 2024, 9:00:00 PM</Typography>
            <Typography>Match Bets : 1</Typography>
            <Typography>Session Bets : 0</Typography>
        </Box>
      </Link>
    </Box>
  )
}

export default MatchData
