import { Box, Button} from "@mui/material"
import {type FC } from "react"

interface Props{
  handleOpen:any
}

const MatchOdds:FC<Props> = ({handleOpen}) => {
  return (
    <Box>
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
            <td width="60%" className="left_side_data">
              TEAM <p style={{ margin: "0px" }}>Min : 100 Max : 100000 </p>
            </td>
            <td width="20%" className="back right_side_data">
              <Button>LAGAI</Button>
            </td>
            <td width="20%" className="lay right_side_data">
              <Button>KHAI</Button>
            </td>
          </tr>
          <tr>
            <td className="left_side_data team_name">
              <span style={{ verticalAlign: "middle" }}>
              Pakistan :
                <span style={{ paddingLeft: "4px" }} className="greenText">
                  13.00
                </span>
              </span>
            </td>
            <td className="back">
              <Button onClick={()=>handleOpen(true, "Pakistan")} className="ButtonK">11.00</Button>
            </td>
            <td className="lay">
              <Button  onClick={()=>handleOpen(false, "Pakistan")} className="ButtonK">13.00</Button>
            </td>
          </tr>
          <tr>
            <td className="left_side_data team_name">
              <span style={{ verticalAlign: "middle" }}>
                USA :
                <span style={{ paddingLeft: "4px" }} className="redText">
                  -100.00
                </span>
              </span>
            </td>
            <td className="back">
              <Button  onClick={()=>handleOpen(true, "USA")} className="ButtonK">0.00</Button>
            </td>
            <td className="lay">
              <Button  onClick={()=>handleOpen(false, "USA")} className="ButtonK">0.00</Button>
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  )
}

export default MatchOdds
