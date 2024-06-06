import { Box, Grid } from "@mui/material"

const Dashboard = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          xs=8
        </Grid>
        <Grid item xs={6}>
          xs=4
        </Grid>
      </Grid>
    </Box>
  )
}

export default Dashboard
