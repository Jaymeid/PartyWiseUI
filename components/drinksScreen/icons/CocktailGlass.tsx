import React from 'react';

import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
} from 'react-native-svg';

interface CocktailGlassProps {
  width?: number;
  height?: number;
}

const CocktailGlass = ({ width = 48, height = 48 }: CocktailGlassProps) => (
  <Svg viewBox="0 0 48 48" width={width} height={height}>
    <Defs>
      <LinearGradient
        id="grad1"
        x1="22.16"
        y1="6.598"
        x2="31.323"
        y2="42.383"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#32bdef" />
        <Stop offset="1" stopColor="#1ea2e4" />
      </LinearGradient>
      <LinearGradient
        id="grad2"
        x1="24"
        y1="23.886"
        x2="24"
        y2="15.054"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#f09801" />
        <Stop offset="1" stopColor="#e36001" />
      </LinearGradient>
      <LinearGradient
        id="grad3"
        x1="29"
        y1="17.009"
        x2="29"
        y2="13.877"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#f09801" />
        <Stop offset="1" stopColor="#e36001" />
      </LinearGradient>
      <LinearGradient
        id="grad4"
        x1="23.49"
        y1="13.467"
        x2="26.692"
        y2="15.493"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#a8e2f7" />
        <Stop offset="1" stopColor="#47c1ff" />
      </LinearGradient>
      <LinearGradient
        id="grad5"
        x1="24.859"
        y1="17.457"
        x2="24.859"
        y2="13.847"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#f09801" />
        <Stop offset="1" stopColor="#e36001" />
      </LinearGradient>
      <LinearGradient
        id="grad6"
        x1="29"
        y1="13.03"
        x2="29"
        y2="17.269"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset="0" stopColor="#a8e2f7" />
        <Stop offset="1" stopColor="#47c1ff" />
      </LinearGradient>
    </Defs>

    <Path
      fill="url(#grad1)"
      d="M40.924,8.617C40.77,8.244,40.404,8,40,8H8C7.596,8,7.23,8.244,7.076,8.617
         c-0.155,0.374-0.069,0.804,0.217,1.09c0,0,14.895,14.982,15.08,15.293C22.77,25.67,23,26.433,23,27.225v8.606
         c0,1.294-0.83,2.443-2.059,2.849l-7.163,2.365C13.336,41.149,13,41.527,13,42c0,0.552,0.448,1,1,1h20c0.552,0,1-0.448,1-1
         c0-0.473-0.336-0.851-0.777-0.955l-7.163-2.365C25.83,38.274,25,37.126,25,35.831v-8.606c0-0.792,0.23-1.555,0.628-2.225
         c0.184-0.31,15.08-15.293,15.08-15.293C40.993,9.421,41.079,8.991,40.924,8.617z"
    />

    <Path
      fill="url(#grad2)"
      d="M12.547,15c1.642,1.656,4.543,4.612,7.015,7.135c2.437,2.487,6.44,2.487,8.877,0
         c2.472-2.523,5.373-5.479,7.015-7.135H12.547z"
    />

    <Path
      fill="url(#grad3)"
      d="M27.5,17h3c0.276,0,0.5-0.224,0.5-0.5V15h-4v1.5C27,16.776,27.224,17,27.5,17z"
    />

    <Path
      fill="url(#grad4)"
      d="M27.451,14.516c0.12-0.249,0.015-0.547-0.234-0.667l-2.701-1.299
         c-0.249-0.12-0.547-0.015-0.667,0.234L22.783,15h4.435L27.451,14.516z"
    />

    <Path
      fill="url(#grad5)"
      d="M22.783,16.151l2.701,1.299c0.249,0.12,0.547,0.015,0.667-0.234L27.217,15h-4.435
         l-0.233,0.484C22.43,15.733,22.534,16.032,22.783,16.151z"
    />

    <Circle cx="21.5" cy="19.5" r="0.5" fill="#ffa000" />
    <Circle cx="18.5" cy="17.5" r="0.5" fill="#ffa000" />
    <Circle cx="27" cy="20" r="1" fill="#ffa000" />

    <Path
      fill="url(#grad6)"
      d="M31,13.5c0-0.276-0.224-0.5-0.5-0.5h-3c-0.276,0-0.5,0.224-0.5,0.5V15h4V13.5z"
    />
  </Svg>
);

export default CocktailGlass;
