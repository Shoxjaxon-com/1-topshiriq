import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Yanvar", sales: 400 },
  { name: "Fevral", sales: 600 },
  { name: "Mart", sales: 500 },
  { name: "Aprel", sales: 700 },
  { name: "May", sales: 800 },
  { name: "Iyun", sales: 650 },
];

function SalesChart() {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Oylik Savdo Hajmi</h2>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#4A90E2" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
