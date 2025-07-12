import * as React from 'react';

import Svg, {
  LinearGradient,
  Stop,
  Path,
  RadialGradient,
} from 'react-native-svg';

interface BeerGlassProps {
  width?: number;
  height?: number;
}

const BeerGlass = ({ width = 48, height = 48 }: BeerGlassProps) => (
  <Svg width={width} height={height} viewBox="0 0 48 48">
    <LinearGradient
      id="a"
      x1={40.432}
      x2={14.279}
      y1={28}
      y2={28}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#fed100" />
      <Stop offset={1} stopColor="#e36001" />
    </LinearGradient>
    <Path
      fill="url(#a)"
      d="M39 21v14h-7V21h7m0-3h-7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3V21a3 3 0 0 0-3-3z"
    />
    <LinearGradient
      id="b"
      x1={19.58}
      x2={21.42}
      y1={41.013}
      y2={19.987}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#f09801" />
      <Stop offset={1} stopColor="#e36001" />
    </LinearGradient>
    <Path fill="url(#b)" d="M8 21h25v19H8V21z" />
    <Path
      fill="#ffa000"
      d="M13 24a2 2 0 1 0-.001 3.999A2 2 0 0 0 13 24zM13.5 34a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 13.5 34zM28.5 28a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 28.5 28z"
    />
    <Path
      fill="#ffc769"
      d="M19 29a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM24 34a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"
    />
    <LinearGradient
      id="c"
      x1={16.944}
      x2={22.04}
      y1={-13.104}
      y2={45.146}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#fede00" />
      <Stop offset={0.72} stopColor="#ffd500" />
      <Stop offset={1} stopColor="#ffd000" />
    </LinearGradient>
    <Path
      fill="url(#c)"
      d="M8 40v2a2 2 0 0 0 2 2h21a2 2 0 0 0 2-2v-2H8zm0-27h25v8H8v-8z"
    />
    <RadialGradient
      id="d"
      cx={21.107}
      cy={16.331}
      r={15.486}
      gradientUnits="userSpaceOnUse"
    >
      <Stop offset={0} stopColor="#fafafb" />
      <Stop offset={0.293} stopColor="#f6f7f8" />
      <Stop offset={0.566} stopColor="#ebecee" />
      <Stop offset={0.832} stopColor="#d8dcdf" />
      <Stop offset={1} stopColor="#c8cdd1" />
    </RadialGradient>
    <Path
      fill="url(#d)"
      d="M34.912 9.264a2.978 2.978 0 0 0-1.87-2.077 2.962 2.962 0 0 0-2.276.084A3.491 3.491 0 0 0 27.5 5a3.47 3.47 0 0 0-1.794.509A3.995 3.995 0 0 0 22 3a3.985 3.985 0 0 0-2.855 1.203A5 5 0 0 0 10 7c0 .065.017.125.019.19-.724-.263-1.553-.308-2.475.227-.773.447-1.365 1.211-1.505 2.093A2.99 2.99 0 0 0 8 12.816V13h5.006c.563 1.179 2.106 2 3.5 2s2.937-.821 3.5-2h.607c.766 0 1.387.621 1.387 1.388V17.5a1.5 1.5 0 0 0 3 0v6a1.5 1.5 0 0 0 3 0V13h5v-.184a2.993 2.993 0 0 0 1.912-3.552z"
    />
  </Svg>
);
export default BeerGlass;
