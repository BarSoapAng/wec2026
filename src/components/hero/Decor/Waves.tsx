import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

const Waves: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 1440 160" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0 40c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0v120H0z"
      fill={colors.background.seaLight}
    />
    <path
      d="M0 80c120-30 240-30 360 0s240 30 360 0 240-30 360 0 240 30 360 0v80H0z"
      fill={colors.background.sea}
    />
    <path
      d="M0 120c120-24 240-24 360 0s240 24 360 0 240-24 360 0 240 24 360 0v40H0z"
      fill={colors.background.seaDark}
    />
  </svg>
);

export default Waves;
