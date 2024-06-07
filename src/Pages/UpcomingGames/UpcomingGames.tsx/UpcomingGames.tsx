import React from "react"
import BackBtn from "../../../Component/BackBtn/BackBtn"
import { Box } from "@mui/material"
import MatchData from "../../../Component/MatchData/MatchData"

const UpcomingGames = () => {
  return (
    <>
      <Box>
        <BackBtn  link="/" name="BACK TO MAIN MENU"/>
      </Box>
      <Box>
        {[1,2,3,4,5].map((item)=><MatchData />)}
      </Box>
    </>
  )
}

export default UpcomingGames
