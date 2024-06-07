import { Box } from '@mui/material';
import './oddsdata.scss';
import OddsName from './OddsName/OddsName';
import MatchOdds from './MatchOdss/MatchOdds';
import SessionData from './SessionData/SessionData';
import BackBtn from '../../Component/BackBtn/BackBtn';
import MatchBets from './MatchBets/MatchBets';
import './MatchBets/matchbet.scss'
import SessionBet from './SessionBet/SessionBet';
import BetPlaced from './BetPlaced/BetPlaced';
import { useState } from 'react';

export interface BetPlaceProps {
  isBack: boolean;
  name: string
}

const OddsData = () => {
  const [open, setOpen] = useState(false);
  const [betPlaceData, setBetPlacedData] = useState<BetPlaceProps>({
    isBack: false,
    name: ""
  })

  const handleOpen = (isBack: boolean, name: string) => {
    setBetPlacedData((prev) => ({ ...prev, isBack, name }));
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box><OddsName title="Bookmaker" /></Box>
      <Box><MatchOdds handleOpen={handleOpen} /></Box>
      <Box><SessionData handleOpen={handleOpen} /></Box>
      <Box><MatchBets /></Box>
      <Box><SessionBet /></Box>
      <Box><BackBtn link="/main/upcoming-games" name="BACK TO UPCOMING GAMES" /></Box>

      <BetPlaced open={open} betPlaceData={betPlaceData} handleClose={handleClose} />
    </>
  )
}

export default OddsData