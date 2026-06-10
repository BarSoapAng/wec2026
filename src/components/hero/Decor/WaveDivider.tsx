import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

type WaveDividerProps = SvgProps & {
  flip?: boolean;
  fill?: string;
};

const WaveDivider: React.FC<WaveDividerProps> = ({ className, flip, fill }) => (
  <svg
    className={className}
    viewBox="0 0 1440 70"
    preserveAspectRatio="none"
    style={flip ? { transform: "rotate(180deg)" } : undefined}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 30c160 30 320 30 480 5s320-30 480-5 320 30 480 5v40H0z"
      fill={fill ?? colors.background.sea}
    />
  </svg>
);

export default WaveDivider;
