import { cardsData, chartData } from '../../constant';
import { BarChart, LineChart } from '../../components';

const Dashboard = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        {cardsData.map((card, index) => {
          return (
            <div key={index} className='card'>
              <div className='card-inner'>
                <h3>{card.title}</h3>
                {card.icon}
              </div>
              <h1>{card.value}</h1>
            </div>
          )
        })}
      </div>

      <div className='charts'>
        <BarChart data={chartData} />
        <LineChart data={chartData} />
      </div>
    </main>
  )
}

export default Dashboard