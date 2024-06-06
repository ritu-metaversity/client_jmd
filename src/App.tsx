import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Mainlayout from "./Common/Mainlayout/Mainlayout"
import Dashboard from "./Pages/Dashboard/Dashboard"
import UpcomingGames from "./Pages/UpcomingGames/UpcomingGames.tsx/UpcomingGames"
import Inplay from "./Pages/Inplay/Inplay"
import LiveGames from "./Pages/LiveGames/LiveGames"
import OddsData from "./Pages/OddsData/OddsData"
import CompleteGames from "./Pages/CompleteGames/CompleteGames"

const App = () => {
  return (
    <div className="App">
      <Router>
          <>
            <Routes>
              {/* <Route path="/login" element={<Login />} /> */}
              <Route
                path="/"
                element={
                  <Mainlayout/>
                }>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/main/upcoming-games" element={<UpcomingGames />} />
                  <Route path="/main/inplay" element={<Inplay />} />
                  <Route path="/main/live-games" element={<LiveGames />} />
                  <Route path="/main/bet-details/:id" element={<OddsData />} />
                  <Route path="/main/complete-games" element={<CompleteGames />} />
                
              </Route>
            </Routes>
          </>
        </Router>
    </div>
  )
}

export default App
