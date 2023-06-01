import React, { useState, useEffect } from 'react';
import { Line } from '@ant-design/plots';
import styled from 'styled-components';


const StyledChart = styled.div`
  height: 200px;
  Line {
    height: 100%;
  }
`;

 export const Chart = () => {
  
    const data = [
    {
      "Date": "12:00",
      "scales": 55
    },
    {
      "Date": "12:20",
      "scales": 45
    },
    {
      "Date": "12:40",
      "scales": 42
    },
    {
      "Date": "1:00",
      "scales": 48
    },
    {
      "Date": "1:20",
      "scales": 54
    },
    {
      "Date": "1:40",
      "scales": 58
    },
    {
      "Date": "2:00",
      "scales": 64
    },
    {
      "Date": "2:20",
      "scales": 67
    },
    {
      "Date": "2:40",
      "scales": 20
    },
    {
      "Date": "3:00",
      "scales": 6
    },
    {
      "Date": "3:20",
      "scales": 19
    },
    {
      "Date": "3:40",
      "scales": 40
    },
    {
      "Date": "4:00",
      "scales": 50
    },
    {
      "Date": "4:20",
      "scales": 70
    },
    {
      "Date": "4:40",
      "scales": 73
    },
    {
      "Date": "5:00",
      "scales": 80
    },
    {
      "Date": "5:20",
      "scales": 27
    },
    {
      "Date": "5:40",
      "scales": 28
    },
    {
      "Date": "6:00",
      "scales": 15
    },
    {
      "Date": "6:20",
      "scales": 11
    },
    {
      "Date": "6:40",
      "scales": 19
    },
    {
      "Date": "7:00",
      "scales": 76
    },
    {
      "Date": "7:20",
      "scales": 56
    },
    {
      "Date": "7:40",
      "scales": 80
    },
    {
      "Date": "8:00",
      "scales": 43
    },
    {
      "Date": "8:20",
      "scales": 80
    },
    {
      "Date": "8:40",
      "scales": 10
    },
    {
      "Date": "9:00",
      "scales": 80
    },
    {
      "Date": "9:20",
      "scales": 68
    },
    {
      "Date": "9:40",
      "scales": 69
    },
    {
      "Date": "10:00",
      "scales": 45
    },
    {
      "Date": "10:20",
      "scales": 39
    },
    {
      "Date": "10:40",
      "scales": 19
    },
    {
      "Date": "11:00",
      "scales": 20
    }
  ]
    const config = {
      data,
      padding: 'auto',
      xField: 'Date',
      yField: 'scales',
      color: 'l(0) 0:#9747FF 1:#14F4C9 ',
      xAxis: {
        tickCount: 12,
      },
      smooth: true,
    };
  return(
    <StyledChart>
        <Line {...config} />
    </StyledChart>
  )
};
