import { BarChart ,LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Moment from "moment";

{
    name:'DATA '
    bitcoin: '10000'
}


export default function CoinChart({ prices }) {





  const newData = prices?.map(([data, price]) => ({
    name: Moment(data).format("DD/MM/YYYY HH:MM"),
    bitcoin: price,
  }));


  console.log(newData)

  return (
    <ResponsiveContainer width="70%" height={300}
        margin = '10px'
        pading = '10px'  >
      <LineChart 
      data={newData}>

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" domain={['auto','auto']}/>
        <YAxis domain={ ['auto', 'auto']}/>
        <Tooltip />
        <Legend />
      
        <Line type="monotone" dataKey= "bitcoin" stroke="#8884d8"/>
      </LineChart>
    </ResponsiveContainer>
  );
}