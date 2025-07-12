import React from 'react';

import Svg, { Defs, LinearGradient, Stop, Path } from 'react-native-svg';

interface GlassBottleProps {
  width?: number;
  height?: number;
}

const GlassBottle = ({ width = 48, height = 48 }: GlassBottleProps) => (
  <Svg viewBox="0 0 48 48" width={width} height={height}>
    <Defs>
      <LinearGradient
        id="grad1"
        x1="24"
        y1="3"
        x2="24"
        y2="5"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#f45560" />
        <Stop offset="1" stopColor="#cf1928" />
      </LinearGradient>
      <LinearGradient
        id="grad2"
        x1="24"
        y1="5.075"
        x2="24"
        y2="6.974"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#21a366" />
        <Stop offset="1" stopColor="#107c42" />
      </LinearGradient>
      <LinearGradient
        id="grad3"
        x1="20.555"
        y1="13.338"
        x2="25.611"
        y2="44.619"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#21a366" />
        <Stop offset="1" stopColor="#107c42" />
      </LinearGradient>
      <LinearGradient
        id="grad4"
        x1="21.428"
        y1="25.739"
        x2="26.333"
        y2="38.633"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#ffdfb3" />
        <Stop offset="1" stopColor="#ffc999" />
      </LinearGradient>
    </Defs>

    <Path fill="#33c481" d="M27,6h-6c0,0-1,6-1,9h8C28,12,27,6,27,6z" />
    <Path
      fill="url(#grad1)"
      d="M28,5h-8V4c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1V5z"
    />
    <Path
      fill="url(#grad2)"
      d="M27,7h-6c-0.552,0-1-0.448-1-1v0c0-0.552,0.448-1,1-1h6c0.552,0,1,0.448,1,1v0C28,6.552,27.552,7,27,7z"
    />
    <Path
      fill="url(#grad3)"
      d="M31.998,35L32,43c0,1.105-0.895,2-2,2H18c-1.105,0-2-0.896-2-2l0.002-8H31.998z M31.996,30
      l-0.001-3.078c0-1.27-0.242-2.528-0.714-3.708L28,15c0-0.552-0.036-1.245-0.091-2h-7.818C20.036,13.755,20,14.448,20,15
      l-3.282,8.215c-0.471,1.179-0.713,2.438-0.714,3.708L16.004,30H31.996z"
    />
    <Path
      d="M32,28.5h-3.232c-0.978-2.477-2.78-4-4.768-4s-3.79,1.523-4.768,4H16v8h3.232
      c0.978,2.477,2.78,4,4.768,4s3.79-1.523,4.768-4H32V28.5z M28.067,35.5l-0.118,0.333C27.151,38.095,25.639,39.5,24,39.5
      s-3.151-1.405-3.949-3.667L19.933,35.5H16.5v-6h3.433l0.118-0.333C20.849,26.905,22.361,25.5,24,25.5s3.151,1.405,3.949,3.667
      l0.118,0.333H31.5v6H28.067z"
      opacity=".05"
    />
    <Path
      d="M32,28h-2.898C28.02,25.515,26.11,24,24,24s-4.02,1.515-5.102,4H16v9h2.898
      c1.082,2.485,2.991,4,5.102,4s4.02-1.515,5.102-4H32V28z M27.713,35l-0.235,0.667C26.753,37.723,25.42,39,24,39
      s-2.753-1.277-3.478-3.333L20.287,35H17v-5h3.287l0.235-0.667C21.247,27.277,22.58,26,24,26s2.753,1.277,3.478,3.333L27.713,30H31
      v5H27.713z"
      opacity=".07"
    />
    <Path
      fill="url(#grad4)"
      d="M32,29h-3.579c-0.839-2.378-2.502-4-4.421-4s-3.582,1.622-4.421,4H16v7h3.579
      c0.839,2.378,2.502,4,4.421,4s3.582-1.622,4.421-4H32V29z"
    />
  </Svg>
);

export default GlassBottle;
