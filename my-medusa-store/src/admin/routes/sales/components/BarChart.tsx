import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Text } from '@medusajs/ui';

import {useAdminProducts} from 'medusa-react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {

    const { products} = useAdminProducts();
    const [totalRevenueQ1, setTotalRevenueQ1] = useState(null);
    const [totalRevenueQ2, setTotalRevenueQ2] = useState(null);
    const [totalRevenueQ3, setTotalRevenueQ3] = useState(null);
    const [totalRevenueQ4, setTotalRevenueQ4] = useState(null);

      const [chartData, setChartData] = useState({
        datasets: [],
      });

      const [chartOptions, setChartOptions] = useState({});

    console.log(products);

    useEffect(() => {
      async function calculateTotalRevenue() {
        // Check if products is available
        if (!products) {
          console.error('Products data is not available.');
          return;
        }
        const revenuePerProductQ1 = products.map((product) => {
          const amount = product.variants[0].prices[0].amount;
          const sold_q1 = product.units_sold_q1;
          console.log('amount:', amount, 'sold_q1:', sold_q1);
          return amount * sold_q1;
        });
        const revenuePerProductQ2 = products.map((product) => {
          const amount = product.variants[0].prices[0].amount;
          const sold_q2 = product.units_sold_q2;
          return amount * sold_q2;
        });
        const revenuePerProductQ3 = products.map((product) => {
          const amount = product.variants[0].prices[0].amount;
          const sold_q3 = product.units_sold_q3;
          return amount * sold_q3;
        });
        const revenuePerProductQ4 = products.map((product) => {
          const amount = product.variants[0].prices[0].amount;
          const sold_q4 = product.units_sold_q4;
          return amount * sold_q4;
        });

        // Step 2: Sum the individual multiplication results to get the total revenue for each quarter
        const totalRevenueQ1 = revenuePerProductQ1.reduce(
          (total, revenue) => total + revenue,
          0
        );
        const totalRevenueQ2 = revenuePerProductQ2.reduce(
          (total, revenue) => total + revenue,
          0
        );
        const totalRevenueQ3 = revenuePerProductQ3.reduce(
          (total, revenue) => total + revenue,
          0
        );
        const totalRevenueQ4 = revenuePerProductQ4.reduce(
          (total, revenue) => total + revenue,
          0
        );

        // Set quarterly totalRevenue states with the calculated value
        setTotalRevenueQ1(totalRevenueQ1);
        setTotalRevenueQ2(totalRevenueQ2);
        setTotalRevenueQ3(totalRevenueQ3);
        setTotalRevenueQ4(totalRevenueQ4);
      }
      // calculatee total revenue when products data is available
      if (products) {
        calculateTotalRevenue();
      }

    }, [products]);


//   useEffect(() => {
//     setChartData({
//       labels: ['Q1', 'Q2', 'Q3', 'Q4'],
//       datasets: [
//         {
//           label: '$ Sales',
//           data: [
//             totalRevenueQ1,
//             totalRevenueQ2,
//             totalRevenueQ3,
//             totalRevenueQ4,
//           ],
//           borderColor: 'rgb(53, 162, 235)',
//           backgroundColor: '#1F2937',
//         },
//       ],
//     });
//   }, []);
   const data = {
     labels: ['Q1', 'Q2', 'Q3', 'Q4'],
     datasets: [
       {
         label: 'Total Revenue',
         data: [totalRevenueQ1, totalRevenueQ2, totalRevenueQ3, totalRevenueQ4],
         backgroundColor: '#32de84',
         borderColor: 'rgb(0,128,0)',
       },
     ],
   };

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        {/* <h1 className="text-center inter-large-semibold text-[#1F2937]">
          Revenue
        </h1> */}
        <div className="w-100% h-[70vh]">
          <Bar data={data} />
        </div>
      </div>
    </>
  );
};

export default BarChart;
