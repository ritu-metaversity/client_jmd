import { Box, Typography } from '@mui/material';
import './heading.scss';
import { FC } from 'react';

interface Props {
    name: string,
    color: string
}

const headingParaStyle = {
    fontSize: '13px',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold'
}

const Heading: FC<Props> = ({ name, color }) => {
    return (
        <Box sx={{ width: '100%', backgroundColor: `${color}`, padding: '7px 0' }}>
            <Typography component='p' sx={headingParaStyle}>
                {name}
            </Typography>
        </Box >
    )
}

export default Heading