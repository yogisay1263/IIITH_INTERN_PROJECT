import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const pieChartsData = [
  [
    { label: 'SCORE', value: 100, color: '#0088FE' },
    { label: 'CGPA', value: 92, color: '#00C49F' },
    { label: 'PERCENTAGE', value: 95, color: '#FFBB28' },
    { label: 'SGPA', value: 87, color: '#FF8042' },
  ],
  [
    { label: 'SCORE', value: 88, color: '#0088FE' },
    { label: 'CGPA', value: 78, color: '#00C49F' },
    { label: 'PERCENTAGE', value: 83, color: '#FFBB28' },
    { label: 'SGPA', value: 78, color: '#FF8042' },
  ],
  [
    { label: 'SCORE', value: 89, color: '#0088FE' },
    { label: 'CGPA', value: 78, color: '#00C49F' },
    { label: 'PERCENTAGE', value: 89, color: '#FFBB28' },
    { label: 'SGPA', value: 77, color: '#FF8042' },
  ],
  [
    { label: 'SCORE', value: 91, color: '#0088FE' },
    { label: 'CGPA ', value: 83, color: '#00C49F' },
    { label: 'PERCENTAGE', value: 87, color: '#FFBB28' },
    { label: 'SGPA', value: 89, color: '#FF8042' },
  ],
  [
    { label: 'SCORE', value: 78, color: '#0088FE' },
    { label: 'CGPA', value: 65, color: '#00C49F' },
    { label: 'PERCENTAGE', value: 78, color: '#FFBB28' },
    { label: 'SGPA', value: 76, color: '#FF8042' },
  ],
  [
    { label: 'SCORE', value: 43, color: '#0088FE' },
    { label: 'CGPA', value: 67, color: '#00C49F' },
    { label: 'PERCENTAGE', value: 83, color: '#FFBB28' },
    { label: 'SGPA', value: 78, color: '#FF8042' },
  ],
  // Add data for the other pie charts...
  // Each element in the outer array represents a set of data for a PieChart.
];

const sizing = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  legend: { hidden: true },
};

const getTotal = (data) => data.map((item) => item.value).reduce((a, b) => a + b, 0);

const SixPieCharts = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate('/form');
  };
  return (
    <div style={{ display: 'flex', gap: '10px',flexWrap:'wrap'  ,background: `linear-gradient(45deg, #7ED7C1 30%, #009688  90%)`, }}>
      {pieChartsData.map((data, index) => {
        const total = getTotal(data);
        const getArcLabel = (params) => {
          const percent = params.value / total;
          return `${(percent * 100).toFixed(0)}%`;
        };

        return (
          <PieChart
            key={index}
            series={[
              {
                outerRadius: 80,
                data,
                arcLabel: getArcLabel,
              },
            ]}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fill: 'white',
                fontSize: 14,
              },
            }}
            {...sizing}
          />
        );
      })}
      <Button variant="contained" disableElevation style={{ marginTop: '100px',marginLeft:'45vw'}}  onClick={handle}>
        feedback
      </Button>
    </div>
  );
};

export default SixPieCharts;

