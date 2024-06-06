import "./App.css"
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Mainlayout from "./Common/Mainlayout/Mainlayout"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Login from "./Pages/login/Login"

const App = () => {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/login" element={<Login />} />
            {/* <Route path="/changePassword" element={<ChangePassword />} /> */}
            <Route
              path="/"
              element={
                <Mainlayout />
              }>
              <Route path="/" element={<Dashboard />} />

            </Route>
          </Routes>
        </>
      </Router>
    </div>
  )
}

export default App
