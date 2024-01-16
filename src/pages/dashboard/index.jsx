import { cardsData, chartData } from '../../constant';
import { BarChart, ChartLabel, PageHeader } from '../../components';
import { Box, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <main className='main-container'>
      <PageHeader title="Dashboard" />

      <div className='main-cards'>
        {cardsData.map((card, index) => {
          return (
            <div key={index} className='card'>
              <div className='card-inner'>
                <h3>{card.title}</h3>
                {card.icon}
              </div>
              <h1 className='card-value'>{card.value}</h1>
            </div>
          )
        })}
      </div>


      <Box sx={{ border: { md: "1px solid #424755" }, borderRadius: "10px", p: 2 }}>
        <Typography variant="h6" sx={{ color: "#fff", fontSize: "25px", textAlign: "center" }}>Revenue and Orders</Typography>



        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          <ChartLabel rotate={true} heading={"Total Revenue"} color="#8884D8" />

          <Box sx={{ width: "80%" }}>
            <BarChart data={chartData} />
          </Box>

          <ChartLabel rotate={true} heading={"Total No. of Orders"} color="#82CA9D" />
        </Box>



      </Box>
    </main>
  )
}

export default Dashboard