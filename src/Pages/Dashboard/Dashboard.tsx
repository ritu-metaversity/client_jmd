import { Box, Grid, Typography } from "@mui/material"
import inPlay from "../../assets/img/crick.webp"
import live from "../../assets/img/live-casino2.webp"
import allGame from "../../assets/img/allGame.webp"
import CG1 from "../../assets/img/CG1.webp"
import profile from "../../assets/img/Profile.webp"
import ledger from "../../assets/img/CL.webp"
import CP from "../../assets/img/CP.webp"
import rule from "../../assets/img/rules.webp"
import { Link } from "react-router-dom"
import './dashboard.scss'
import NewCom from "./NewCom"

interface DataProps {
  name: string;
  imgUrl: string;
  new:boolean;
  url:string
}

const Data: DataProps[] = [
  {
    name: "In Play",
    imgUrl: inPlay,
    new:false,
    url:"/main/inplay"
  },
  {
    name: "live Game",
    imgUrl: live,
    new:true,
    url:"/main/live-games"
  },
  {
    name: "Upcoming Games",
    imgUrl: allGame,
    new:false,
    url:"/main/upcoming-games"
  },
  {
    name: "Complete Games",
    imgUrl: CG1,
    new:false,
    url:"/main/complete-games"
  },
  {
    name: "My Profile",
    imgUrl: profile,
    new:false,
    url:"/main/my-profile"
  },
  {
    name: "My Ledger",
    imgUrl: ledger,
    new:false,
    url:"/main/my-ledger"
  },
  {
    name: "Change Password",
    imgUrl: CP,
    new:false,
    url:"/main/change-password"
  },
  {
    name: "Rules",
    imgUrl: rule,
    new:false,
    url:"/main/rules"
  },
]

const Dashboard = () => {
  return (
    <Box pb={1} sx={{
      background:"#fff",
      marginTop:"25px"
    }}>
      <Grid container spacing={2}>
        {Data?.map((item: DataProps) => (
          <Grid item xs={6}>
            <Box className="dash_main">
              <Link to={item?.url}>
                <img src={item?.imgUrl} alt={item?.name} width="112" height="112"/>
                {item?.new && <NewCom />}
                <Typography component="p">{item?.name}</Typography>
              </Link>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Dashboard
