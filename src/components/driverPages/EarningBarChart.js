import React from 'react';
import { BarChart, Bar, XAxis, ResponsiveContainer } from 'recharts';

const CustomBarChart = ({ data }) => (
  <ResponsiveContainer width="100%" height={250}>
    <BarChart
      data={data}
      margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
    >
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="order_date" />
      {/* <YAxis /> */}
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Bar dataKey="total_amount" fill="#28C928" />
    </BarChart>
  </ResponsiveContainer>
);

export default CustomBarChart;
