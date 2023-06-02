import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarRadiusAxis } from 'recharts';

const data = [
  {
    name: 'Bank',
    uv: 4567890.12,
    money: 4567890.12,
    fill: '#F3BA2F',
  },
  {
    name: 'Token',
    uv: 1567890.12,
    money: 1567890.12,
    fill: '#54C2C1',
  },
  {
    name: 'Cash',
    uv: 67890.12,
    money: 67890.12,
    fill: '#0F0F3F',
  },
  {
    name: 'Stock',
    uv: 567890.12,
    money: 567890.12,
    fill: '#9020E9',
  },
];

const style = {
  lineHeight: '24px',
};
const customBackg = {
  maxAngle: 450,
  endAngle: 450
};

export const ChartRadialBar = () => {

    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={500} minHeight={500}>
        <RadialBarChart startAngle={90} endAngle={450} cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={20} data={data}>
          <RadialBar
            minAngle={105}
            // label={{ position: 'insideStart', fill: '#fff' }}
            background={customBackg}
            dataKey="uv"
          >
            <PolarRadiusAxis angle={270}></PolarRadiusAxis>
          </RadialBar>
          <Legend iconSize={18} iconType='circle' align='center' layout="horizontal" verticalAlign='bottom' wrapperStyle={style} />
        </RadialBarChart>
      </ResponsiveContainer>
    );
}