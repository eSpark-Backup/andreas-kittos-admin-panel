import { Box, } from '@mui/material';

import { PageHeader, ReportCard } from '../../components';
import { reportData } from '../../constant';


const Reports = () => {



    return (
        <main className='main-container'>
            <PageHeader title="Reports" />

            <Box
                sx={{
                    width: { xs: '100%', md: '80%', lg: '70%' },
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
                    {reportData.map((data, index) => (
                        <ReportCard key={index} {...data} />
                    ))}
                </Box></Box>
        </main>
    )
}

export default Reports