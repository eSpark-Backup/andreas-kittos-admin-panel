import { Box, } from '@mui/material';
import { reportImg } from '../../assets';
import { PageHeader, ReportCard } from '../../components';


const Reports = () => {
    return (
        <main className='main-container'>
            <PageHeader title="Reports" />

            <Box
             sx={{
                width:  { xs: '100%', md: '80%', lg: '70%' },
                display: 'flex',
                justifyContent: 'center',
                margin: '0 auto',
                gap: '20px',
             }}
            >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    width: '100%',
                    justifyContent: 'space-between',
                }}
            >
                <ReportCard img={reportImg} title="Sales reports" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" btnText="Download" />
                <ReportCard img={reportImg} title="Sales reports" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" btnText="Download" />
                <ReportCard img={reportImg} title="Sales reports" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor" btnText="Download" />
            </Box></Box>
        </main>
    )
}

export default Reports