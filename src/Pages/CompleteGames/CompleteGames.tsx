import { Box } from "@mui/material"
import BackBtn from "../../Component/BackBtn/BackBtn"
import MatchData from "../../Component/MatchData/MatchData"

const CompleteGames = () => {
  return (
    <>
      <Box>
        <BackBtn  link="/" name="BACK TO MAIN MENU"/>
      </Box>
      <Box>
        {[1].map((item)=><MatchData />)}
      </Box>
    </>
  )
}

export default CompleteGames
