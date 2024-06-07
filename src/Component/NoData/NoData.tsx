import { Box, Typography } from '@mui/material'

const NoData = () => {
  return (
    <Box>
        <Typography component="p" sx={{
            textAlign:"center",
            fontSize:"16px",
        }}>
        No Record Found !
        </Typography>
    </Box>
  )
}

export default NoData