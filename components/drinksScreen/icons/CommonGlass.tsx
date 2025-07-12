import React from 'react';

import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
} from 'react-native-svg';

interface CommonGlassProps {
  width?: number;
  height?: number;
}

const CommonGlass = ({ width = 48, height = 48 }: CommonGlassProps) => (
  <Svg viewBox="0 0 48 48" width={width} height={height}>
    <Defs>
      <LinearGradient
        id="grad1"
        x1="22.149"
        y1="12.334"
        x2="28.629"
        y2="40.374"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#f09801" />
        <Stop offset="1" stopColor="#e36001" />
      </LinearGradient>
      <LinearGradient
        id="grad2"
        x1="22.189"
        y1="3.629"
        x2="24.247"
        y2="12.534"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#ffda1c" />
        <Stop offset="1" stopColor="#feb705" />
      </LinearGradient>
      <LinearGradient
        id="grad3"
        x1="23.517"
        y1="40.293"
        x2="24.523"
        y2="44.437"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#32bdef" />
        <Stop offset="1" stopColor="#1ea2e4" />
      </LinearGradient>
    </Defs>

    <Path
      fill="url(#grad1)"
      d="M17.267,39.208c-0.085,0.596-0.145,1.193-0.19,1.792h13.846c-0.044-0.599-0.105-1.196-0.19-1.792
         C30.396,36.837,29.874,32.752,30,31c0.352-4.899,4-13.088,4-18H14c0,4.912,3.648,13.101,4,18
         C18.126,32.752,17.604,36.837,17.267,39.208z"
    />

    <Path
      fill="url(#grad2)"
      d="M31.347,3H16.653c-0.406,0-0.77,0.239-0.923,0.614C15.184,4.952,14,8.384,14,13h20
         c0-4.616-1.184-8.048-1.73-9.386C32.117,3.239,31.753,3,31.347,3z"
    />

    <Path
      fill="url(#grad3)"
      d="M17.077,41C17.028,41.668,17,42.337,17,43.008v0c0,1.1,0.892,1.992,1.992,1.992h10.017
         c1.1,0,1.992-0.892,1.992-1.992v0c0-0.671-0.028-1.34-0.077-2.008H17.077z"
    />

    <Circle cx="23" cy="20" r="1" fill="#ffa000" />
    <Circle cx="28" cy="16" r="1" fill="#ffa000" />
    <Circle cx="27.5" cy="22.5" r="0.5" fill="#ffa000" />
    <Circle cx="18.5" cy="16.5" r="0.5" fill="#ffa000" />
    <Circle cx="20.5" cy="25.5" r="0.5" fill="#ffa000" />
    <Circle cx="26" cy="28" r="1" fill="#ffa000" />
  </Svg>
);

export default CommonGlass;
