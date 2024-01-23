import { Bar, BarChart as ReactBarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const BarChart = ({ data }) => {
    return (
        <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
            <ReactBarChart width={500} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" orientation="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Bar barSize={15} dataKey="revenue" fill="#8884d8" yAxisId="left" />
                <Bar barSize={15} dataKey="orders" fill="#82ca9d" yAxisId="right" />
            </ReactBarChart>
        </ResponsiveContainer>
        </div>
    )
}

export default BarChart