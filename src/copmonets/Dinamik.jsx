import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

function DynamicChart() {
  const [data, setData] = useState([
    { name: "Yanvar", sales: 400 },
    { name: "Fevral", sales: 600 },
  ]);
  const [month, setMonth] = useState("");
  const [sales, setSales] = useState("");

  const addData = () => {
    if (!month || isNaN(sales) || sales <= 0) {
      alert("Iltimos, to‘g‘ri ma’lumot kiriting!");
      return;
    }
    setData([...data, { name: month, sales: parseInt(sales) }]);
    setMonth("");
    setSales("");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Dinamik Savdo Charti</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Oy nomi"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Savdo hajmi"
          value={sales}
          onChange={(e) => setSales(e.target.value)}
          className="border p-2"
        />
        <button onClick={addData} className="bg-blue-500 text-white px-4 py-2">Qo‘shish</button>
      </div>
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

export default DynamicChart;
