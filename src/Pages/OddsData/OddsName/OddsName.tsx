import { Box } from "@mui/material"
import {type FC } from "react"
import { Link } from "react-router-dom"

interface Props{
  title:string
}

const OddsName:FC<Props> = ({title}) => {
  return (
    <Box className="menu_odssname">
      <Link to="">{title}</Link>
    </Box>
  )
}

export default OddsName
