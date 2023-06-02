import { getValue } from '@testing-library/user-event/dist/utils';
import React from 'react';
import {
  BarChart,
  Bar,
  // Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const data = [
  {
    name: '06 March',
    uv: 120000,
  },
  {
    name: '07 March',
    uv: -120000,
  },
  {
    name: '08 March',
    uv: 240000,
  },
  {
    name: '09 March',
    uv: -20000,
  },
  {
    name: '10 March',
    uv: -10000,
  },
  {
    name: '11 March',
    uv: 10000,
  },
  {
    name: '12 March',
    uv: 14000,
  },
];

export const ChartBar = () => {
    return (
      <ResponsiveContainer width="100%" height="100%" minWidth={600} minHeight={500}>
        <BarChart
          width={600}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0" horizontalPoints={[]} />
          <XAxis dataKey="name" />
          <YAxis/>
          <Tooltip />
          {/* <Legend /> */}
          {/* <ReferenceLine y={0} stroke="#000" /> */}
            <Bar dataKey="uv" radius={[10, 10 , 0 , 0]}>
              {
                data.map((e, index) => (
                  <Cell key={`cell-${index}`} fill={e.uv > 0 ? "#4FB5C9" : "#F05D5E"} ></Cell>
                ))
              }
            </Bar>
            
        </BarChart>
      </ResponsiveContainer>
    );
}
