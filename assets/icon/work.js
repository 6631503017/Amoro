import * as React from "react";
import Svg, { Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style */
const WorkIcon = (props) => (
  <Svg
    id="Uploaded to svgrepo.com"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 32 32"
    xmlSpace="preserve"
    {...props}
  >
    <Path
      className="puchipuchi_een"
      d="M29,2H3C1.9,2,1,2.9,1,4v19c0,1.1,0.9,2,2,2h26c1.1,0,2-0.9,2-2V4C31,2.9,30.1,2,29,2z M29,20 c0,0.55-0.45,1-1,1H4c-0.55,0-1-0.45-1-1V5c0-0.55,0.45-1,1-1h24c0.55,0,1,0.45,1,1V20z M22,29c0,0.552-0.447,1-1,1H11 c-0.553,0-1-0.448-1-1s0.447-1,1-1h1v-2h8v2h1C21.553,28,22,28.448,22,29z M22,14c0,0.552-0.447,1-1,1H11c-0.553,0-1-0.448-1-1 s0.447-1,1-1h10C21.553,13,22,13.448,22,14z M22,10c0,0.552-0.447,1-1,1H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h10 C21.553,9,22,9.448,22,10z"
    />
  </Svg>
);
export default WorkIcon;
