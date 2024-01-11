import { Box, } from '@mui/material';
import { reportImg } from '../../assets';
import { PageHeader, ReportCard } from '../../components';


const Reports = () => {

    const reportData = [
        {
          img: reportImg,
          title: "Sales reports",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          btnText: "Download",
        },
        {
          img: reportImg,
          title: "Order Reports",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          btnText: "Download",
        },
        {
          img: reportImg,
          title: "Inventory management reports",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
          btnText: "Download",
        },
      ];


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