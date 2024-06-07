import React, { FC, useState } from 'react'
import './styles.scss';
import { Box, Button, Grid, Typography } from '@mui/material';
import BackBtn from '../../Component/BackBtn/BackBtn';
import Heading from '../../Common/heading/Heading';


const padding = {
    padding: '7px 0',
}

const optionVal = [0, 1, 2, 3, 4, 5]


interface selectProps {
    handleSelectChange: (e: any) => void
    selectVal: number
}

const dummydata = [
    {
        name: 'Client Code :',
        val: 'C153100'
    },
    {
        name: 'Client Name :',
        val: 'demoUser'
    },
    {
        name: 'Contact No :',
        val: '9876543211'
    },
    {
        name: 'Date Of Joining :',
        val: 'Jun 6, 2024, 10:58:26 AM'
    },
    {
        name: 'Address :',
        val: 'INDIA'
    },

]


const Select: FC<selectProps> = ({ handleSelectChange, selectVal }) => {

    return (
        <select value={selectVal} onChange={handleSelectChange}>
            {optionVal?.map((currval, index) => (
                <option key={`curroption ${currval} index ${index}`} value={currval}>{currval}</option>
            ))}
        </select>
    )
}

const Profile = () => {

    const [selectVal, setSelectVal] = useState<number>(3);

    const handleSelectChange = (e: React.ChangeEvent<any>) => {
        setSelectVal(e.target.value as number)
    }


    return (
        <Box>
            <BackBtn link='/' name='back to main menu' />

            <Box className="rateinformation">
                <Heading color='#888399' name='rate information' />
                <Grid container sx={{ backgroundColor: '#fff', border: '1px solid #ccc' }}>
                    <Grid item xs={4} sx={padding}>
                        <Typography component='p' sx={{ fontSize: '12px', color: '#000', fontWeight: 'bold', textAlign: 'start' }}>
                            Rate Difference :
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ borderInline: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Select handleSelectChange={handleSelectChange} selectVal={selectVal} />
                    </Grid>
                    <Grid item xs={4}>
                        <Button size='small' sx={{
                            ':hover': {
                                backgroundColor: '#87bb33'
                            },
                            border: '1px solid #000',
                            width: '100%',
                            borderRadius: '0',
                            fontSize: '13px',
                            color: '#fff',
                            textTransform: 'uppercase',
                            backgroundColor: '#87bb33'
                        }}>
                            update
                        </Button>
                    </Grid>
                </Grid>
            </Box>

            <Box className="personalinformation" my={2}>
                <Heading color='#888399' name='PERSONAL INFORMATION' />
                {dummydata?.map((data, index) => (
                    <Grid container key={index} sx={{ backgroundColor: '#fff', border: '1px solid #ccc' }}>
                        <Grid item xs={6} sx={padding}>
                            <Typography component='p' sx={{ fontSize: '12px', color: '#000', fontWeight: 'bold', textAlign: 'start' }}>
                                {data?.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sx={{
                            borderInline: '1px solid #ccc',
                            p: 1,
                            display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
                        }}>
                            <Typography component='p' sx={{ fontSize: '12px', color: '#000', fontWeight: '700', textAlign: 'start' }}>
                                {data.val}
                            </Typography>

                        </Grid>

                    </Grid>
                ))}
            </Box>

            <Box className="companyinformation">
                <Heading color='#888399' name='COMPANY INFORMATION' />
                <Grid container sx={{ backgroundColor: '#fff', border: '1px solid #ccc' }}>
                    <Grid item xs={6} sx={padding}>
                        <Typography component='p' sx={{ fontSize: '12px', color: '#000', fontWeight: 'bold', textAlign: 'start' }}>
                            HELP LINE NO :
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{
                        borderInline: '1px solid #ccc',
                        p: 1,
                        display: 'flex', alignItems: 'center', justifyContent: 'flex-start'
                    }}>
                        <Typography component='p' sx={{ fontSize: '12px', color: '#000', fontWeight: '700', textAlign: 'start' }}>
                            +91-1234567890
                        </Typography>

                    </Grid>

                </Grid>
            </Box>

            <BackBtn link='/' name='back to main menu' />
        </Box>
    )
}

export default Profile