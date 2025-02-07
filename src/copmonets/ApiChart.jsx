import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import axios from "axios";

function ApiChart() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
        axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
          .then((response) => {
            const formattedData = response.data.slice(0, 10).map((currency) => ({
              name: currency.Ccy,
              value: currency.Rate,
            }));
            setData(formattedData);
            setLoading(false);
          })
          .catch((error) => {
            console.error("API xatosi:", error);
            setLoading(false);
          });
      }, []);


  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">API dan Olingan Valyuta Kurslari</h2>
      {loading ? (
        <p className="text-center text-gray-500">Yuklanmoqda...</p>
      ) : (
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default ApiChart;



// import React, { useEffect, useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
// import axios from "axios";

// function ApiChart() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios.get("https://cbu.uz/uz/arkhiv-kursov-valyut/json/")
//       .then((response) => {
//         const formattedData = response.data.slice(0, 10).map((currency) => ({
//           name: currency.Ccy,
//           value: currency.Rate,
//         }));
//         setData(formattedData);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("API xatosi:", error);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <div className="p-6 mx-auto">
//       <h2 className="text-2xl font-bold text-center mb-4">API dan Olingan Valyuta Kurslari</h2>
//       {loading ? (
//         <p className="text-center text-gray-500">Yuklanmoqda...</p>
//       ) : (
//         <ResponsiveContainer width={800} height={350}>
//           <LineChart data={data}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="name" />
//             <YAxis />
//             <Tooltip />
//             <Legend />
//             <Line type="monotone" dataKey="value" stroke="#8884d8" />
//           </LineChart>
//         </ResponsiveContainer>
//       )}
//     </div>
//   );
// }

// export default ApiChart;