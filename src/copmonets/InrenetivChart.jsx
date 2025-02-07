import React, { useState } from "react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Yanvar", sales: 400 },
  { name: "Fevral", sales: 600 },
  { name: "Mart", sales: 500 },
  { name: "Aprel", sales: 700 },
];

function InteractiveChart() {
  const [chartType, setChartType] = useState("bar");

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Interaktiv Chart</h2>
      <select
        value={chartType}
        onChange={(e) => setChartType(e.target.value)}
        className="border p-2 mb-4"
      >
        <option value="bar">Bar Chart</option>
        <option value="line">Line Chart</option>
        <option value="pie">Pie Chart</option>
      </select>

      <ResponsiveContainer width="100%" height={350}>
        {chartType === "bar" && (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#4A90E2" />
          </BarChart>
        )}
        {chartType === "line" && (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" />
          </LineChart>
        )}
        {chartType === "pie" && (
          <PieChart>
            <Tooltip />
            <Legend />
            <Pie data={data} dataKey="sales" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#82ca9d" label />
          </PieChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}

export default InteractiveChart;
