import { Box } from '@mui/material'
import BackBtn from '../../Component/BackBtn/BackBtn'
import rulesPdf from '../../assets/rules.pdf'
// import PDFViewer from 'pdf-viewer-reactjs';

const Rules = () => {
  return (
    <>
    <Box>
        <BackBtn link="/" name="BACK TO MAIN MENU"/>
      </Box>
      <Box className="full-width-box">
        <iframe className='iframe-rules' src={rulesPdf + "#toolbar=0"} title='Rules Pdf' style={{border:"none"}}/>
      </Box>
    </>
  )
}

export default Rules