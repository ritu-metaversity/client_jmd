import { Box, Button } from "@mui/material"
import OddsName from "../OddsName/OddsName"
import {type FC } from "react"

interface Props{
  handleOpen:any
}

const SessionData:FC<Props> = ({handleOpen}) => {
  return (
    <Box>
      <OddsName title="Session" />
      <table
        width="100%"
        border={0}
        cellPadding={2}
        cellSpacing={2}
        className="bet-details-markets"
        style={{ position: "relative" }}
      >
        <tbody>
          <tr>
            <td width="60%" className="session_left_side_data">
              Session <p style={{ margin: "0px" }}>Min : 100 Max : 100000 </p>
            </td>
            <td width="20%" className="lay right_side_data">
              <Button>NOT</Button>
            </td>
            <td width="20%" className="back right_side_data">
              <Button>YES</Button>
            </td>
          </tr>
          {
            [1,2,3,4,5].map((item)=><tr>
            <td className="session_left_side_data ButtonSess">
              6 over runs USA(USA vs PAK)adv
            </td>
            <td className="lay">
              <Button onClick={()=>handleOpen(false, "6 over runs USA(USA vs PAK)adv")} className="ButtonK session_button">
                <span>36</span> <span className="ButtonNRate">100</span>
              </Button>
            </td>
            <td className="back">
              <Button onClick={()=>handleOpen(true, "6 over runs USA(USA vs PAK)adv")} className="ButtonK session_button">
                <span>38</span> <span className="ButtonNRate">100</span>
              </Button>
            </td>
          </tr>)
          }
          
          
        </tbody>
      </table>
    </Box>
  )
}

export default SessionData
