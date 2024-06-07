import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Mainlayout from "./Common/Mainlayout/Mainlayout"
import Dashboard from "./Pages/Dashboard/Dashboard"

import Login from "./Pages/login/Login"
import UpcomingGames from "./Pages/UpcomingGames/UpcomingGames.tsx/UpcomingGames"
import Inplay from "./Pages/Inplay/Inplay"
import LiveGames from "./Pages/LiveGames/LiveGames"
import OddsData from "./Pages/OddsData/OddsData"
import CompleteGames from "./Pages/CompleteGames/CompleteGames"
import Rules from "./Pages/Rules/Rules"
import TermsConditions from "./Pages/TermsConditions/TermsConditions"
import Profile from "./Pages/profile/Profile"

const App = () => {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<TermsConditions />} />
            <Route
              path="/"
              element={
                <Mainlayout />
              }>
              <Route path="/" element={<Dashboard />} />

              <Route path="/main/upcoming-games" element={<UpcomingGames />} />
              <Route path="/main/inplay" element={<Inplay />} />
              <Route path="/main/live-games" element={<LiveGames />} />
              <Route path="/main/bet-details/:id" element={<OddsData />} />
              <Route path="/main/complete-games" element={<CompleteGames />} />
              <Route path="/main/rules" element={<Rules />} />
              <Route path="/main/my-profile" element={<Profile />} />

            </Route>
          </Routes>
        </>
      </Router>
    </div>
  )
}

export default App
