import { cardsData, chartData } from '../../constant';
import { BarChart, ChartLabel, PageHeader } from '../../components';
import { Box, Card, Typography } from '@mui/material';

const Dashboard = () => {
  return (
    <main className='main-container'>
      <Box sx={{height:"55px"}}>
        <PageHeader title="Dashboard" />
      </Box>

      <div className='main-cards'>
        {cardsData.map((card, index) => {
          return (
            <div key={index} className='card'>
              <div className='card-inner'>
                <Typography sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "600" }}>{card.title}</Typography>
                {card.icon}
              </div>
              {card.description && <Typography sx={{ color: "white", fontSize: "14px", marginTop: "10px" }}>{card.description} <span style={{ fontWeight: "600" }}>{card.descriptionVal}</span></Typography>}
              <h1 className='card-value'>{card.value}</h1>
            </div>
          )
        })}
      </div>


      <Card sx={{marginTop:"35px", py:"20px"}}>
        <Typography variant="h6" sx={{ color: "#fff", fontSize: "25px", textAlign: "center", fontWeight: "500" }}>Revenue and Orders</Typography>

        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          <ChartLabel rotate={true} heading={"Total Revenue"} color="#8884D8" />

          <Box sx={{ width: {xs:"100%", md:"80%"} }}>
            <BarChart data={chartData} />
          </Box>

          <ChartLabel rotate={true} heading={"Total No. of Orders"} color="#82CA9D" />
        </Box>



      </Card>
    </main>
  )
}

export default Dashboard