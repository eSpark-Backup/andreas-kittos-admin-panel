import { Bar, BarChart as ReactBarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis, Label } from 'recharts';

const BarChart = ({ data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <ReactBarChart
                width={500}
                height={300}
                data={data}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="top" align='right' height={36} />
                <Bar barSize={20} dataKey="revenue" fill="#8884d8" />
                <Bar barSize={20} dataKey="orders" fill="#82ca9d" />
            </ReactBarChart>



        </ResponsiveContainer>
    )
}

export default BarChart