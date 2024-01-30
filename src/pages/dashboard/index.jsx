import { cardsData, chartData } from '../../constant';
import { BarChart, ChartLabel, PageHeader } from '../../components';
import { Box, Card, Typography } from '@mui/material';
import BellIcon from "../../assets/icons/Bell.svg"
import CategoriesIcon from "../../assets/icons/CategoriesWhite.svg"
import UsersIcon from "../../assets/icons/UsersGroup.svg"
import BoxIcon from "../../assets/icons/Box.svg"

const Dashboard = () => {
  const iconMap = {
    Bell: BellIcon,
    Categories: CategoriesIcon,
    Users: UsersIcon,
    Box: BoxIcon
  }
  return (
    <main className='main-container'>
      <Box sx={{ height: "55px" }}>
        <PageHeader title="Dashboard" />
      </Box>

      <div className='main-cards'>
        {cardsData.map((card, index) => {
          const IconComponent = iconMap[card.icon];
          return (
            <div key={index} className='card'>
              <div className='card-inner'>
                <Typography sx={{ fontSize: "16px", color: "#FFFFFF", fontWeight: "600" }}>{card.title}</Typography>
                {/* {card.icon} */}
                <img src={IconComponent} alt={card.title} />
              </div>
              {card.description && <Typography sx={{ color: "white", fontSize: "14px", marginTop: "10px" }}>{card.description} <span style={{ fontWeight: "600" }}>{card.descriptionVal}</span></Typography>}
              <h1 className='card-value'>{card.value}</h1>
            </div>
          )
        })}
      </div>


      <Card sx={{ marginTop: "35px", py: "20px" }}>
        <Typography variant="h6" sx={{ color: "#fff", fontSize: "25px", textAlign: "center", fontWeight: "500", display:{xs:"none", sm:"block"} }}>Revenue and Orders</Typography>

        <Box sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>

          <ChartLabel rotate={true} heading={"Total Revenue"} color="#8884D8" />

          <Box sx={{ width: { xs: "100%", md: "80%" } }}>
            <BarChart data={chartData} />
          </Box>

          <ChartLabel rotate={true} heading={"No. of Orders"} color="#82CA9D" />
        </Box>



      </Card>
    </main>
  )
}

export default Dashboard