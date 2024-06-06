import { Box } from "@mui/material"
import {type FC } from "react"
import { Link } from "react-router-dom"
import './back.scss'

interface Props{
  name:string;
  link:string
}

const BackBtn:FC<Props> = ({name, link}) => {
  return (
    <Box className="menu_back">
      <Link to={link}>{name}</Link>
    </Box>
  )
}

export default BackBtn
