import React from "react"
import { Box } from "@mui/material"
import MatchData from "../../Component/MatchData/MatchData"
import BackBtn from "../../Component/BackBtn/BackBtn"
import NoData from "../../Component/NoData/NoData"

const Inplay = () => {
  return (
    <>
      <Box>
        <BackBtn link="/" name="BACK TO MAIN MENU"/>
      </Box>
      <Box mt={5}>
        {/* {[1,2,3,4,5].map((item)=><MatchData />)} */}
        <NoData />
      </Box>
    </>
  )
}

export default Inplay
