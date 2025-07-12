import React from 'react';

import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

interface ShotGlassProps {
  width?: number;
  height?: number;
}

const ShotGlass = ({ width = 48, height = 48 }: ShotGlassProps) => (
  <Svg viewBox="0 0 48 48" width={width} height={height}>
    <Defs>
      <LinearGradient
        id="grad"
        x1="23.908"
        y1="2.602"
        x2="26.537"
        y2="43.254"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#32bdef" />
        <Stop offset="0.38" stopColor="#2fb9ed" />
        <Stop offset="0.787" stopColor="#25ace8" />
        <Stop offset="1" stopColor="#1ea2e4" />
      </LinearGradient>
    </Defs>
    <Path
      fill="url(#grad)"
      d="M10.922,9l-0.907-4.821C9.903,3.565,10.375,3,10.999,3h25.999
         c0.636,0,1.11,0.586,0.978,1.207L36.924,9H10.922z M23.518,40.994c-6.484,0-7.611-5.49-7.621-5.544 
         C15.965,35.816,16,36.187,16,36.559V44c0,0.552,0.448,1,1,1h13c0.552,0,1-0.448,1-1v-7.349
         c0-0.432,0.047-0.864,0.139-1.286C31.129,35.413,30.011,40.994,23.518,40.994z M15.897,35.45"
    />
    <Path
      fill="#50e6ff"
      d="M36.924,9H10.922l4.785,25.443c0.011,0.058,0.021,0.117,0.033,0.175l0.156,0.832
         c0.01,0.054,1.137,5.544,7.621,5.544c6.494,0,7.611-5.582,7.622-5.63L36.924,9z"
    />
  </Svg>
);

export default ShotGlass;
