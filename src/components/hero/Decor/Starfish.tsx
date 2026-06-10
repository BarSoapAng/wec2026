import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

const Starfish: React.FC<SvgProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M60 10c5 0 8 5 9 11l5 25 24-8c6-2 12-1 14 4 2 4-1 9-6 13L84 73l14 22c4 6 4 12 0 15s-10 2-15-3L60 91l-23 16c-5 5-11 6-15 3s-4-9 0-15l14-22-22-18c-5-4-8-9-6-13 2-5 8-6 14-4l24 8 5-25c1-6 4-11 9-11z"
      fill={colors.accent.coral}
      stroke={colors.accent.coralDark}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M60 22c3 14 4 27 0 39m-31-12c11 7 21 13 31 12m31-12c-11 7-21 13-31 12m-20 37c8-11 14-22 20-37m20 37c-8-11-14-22-20-37"
      stroke={colors.accent.sun}
      strokeWidth="3"
      strokeLinecap="round"
      opacity="0.55"
    />
    <circle cx="60" cy="38" r="3" fill={colors.primary.white} opacity="0.8" />
    <circle cx="41" cy="58" r="2.8" fill={colors.primary.white} opacity="0.75" />
    <circle cx="79" cy="58" r="2.8" fill={colors.primary.white} opacity="0.75" />
    <circle cx="50" cy="78" r="2.6" fill={colors.primary.white} opacity="0.7" />
    <circle cx="70" cy="78" r="2.6" fill={colors.primary.white} opacity="0.7" />
    <circle cx="60" cy="61" r="3.2" fill={colors.primary.white} opacity="0.82" />
  </svg>
);

export default Starfish;
