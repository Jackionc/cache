"use client"

import React from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const ChartComponent = () => {
  const options = {
    chart: {
      background: '#000',
      toolbar: { show: false },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: { style: { colors: '#fff' } },
    },
    yaxis: { labels: { style: { colors: '#fff' } } },
    stroke: { curve: 'smooth' },
    grid: { borderColor: '#444' },
    colors: ['#00FFFF'],
    tooltip: { theme: 'dark' },
  };

  const series = [
    { name: 'Staked $Cache', data: [10, 15, 20, 30, 35, 40, 50, 45, 50, 55, 60, 65] },
  ];

  return (
    <div style={{ background: '#000', padding: '20px', borderRadius: '8px' }}>
      <h3 style={{ color: '#fff' }}>Total $Cache Staked Over Time</h3>
      <Chart options={options} series={series} type="area" height={300} />
    </div>
  );
};

export default ChartComponent;