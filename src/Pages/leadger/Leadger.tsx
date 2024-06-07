import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import BackBtn from "../../Component/BackBtn/BackBtn"
import Heading from "../../Common/heading/Heading"
import Paper from '@mui/material/Paper';

const tablerow = {
    border: '2px solid #fff',
}

const tablecell = {
    borderInline: '2px solid #fff',
    textAlign: 'center',
    padding: 1,
    color: '#fff',
    fontSize: '12px',
    fontWeight: '700'
}

const width = {
    width: '40%'
}


const Leadger = () => {
    return (
        <Box>
            <BackBtn name="back to main menu" link="/" />
            <Box>
                <Heading color="#3b394a" name="MY LEDGER" />
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead sx={{ backgroundColor: '#888399' }}>
                            <TableRow sx={tablerow}>
                                <TableCell sx={{ ...tablecell, ...width }}>MATCH NAME</TableCell>
                                <TableCell colSpan={1} sx={tablecell} >WON BY	</TableCell>
                                <TableCell colSpan={1} sx={tablecell}>WON</TableCell>
                                <TableCell colSpan={1} sx={tablecell}>LOST</TableCell>
                                <TableCell colSpan={1} sx={tablecell}>BALANCE</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {/* <TableRow
                                key={1}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">

                                </TableCell>
                                <TableCell align="right"> </TableCell>
                                <TableCell align="right"> </TableCell>
                                <TableCell align="right"> </TableCell>
                                <TableCell align="right"> </TableCell>
                            </TableRow> */}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <BackBtn name="back to main menu" link="/" />
        </Box>
    )
}

export default Leadger