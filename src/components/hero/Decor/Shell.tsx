import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

const Shell: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M60 8c28 0 52 22 52 56 0 22-18 38-52 38S8 86 8 64C8 30 32 8 60 8z"
      fill={colors.accent.coral}
      stroke={colors.accent.coralDark}
      strokeWidth="3"
    />
    <path
      d="M60 14v86M60 14c-14 0-26 12-30 30M60 14c14 0 26 12 30 30M40 44c-6 12-8 30-8 50M80 44c6 12 8 30 8 50"
      stroke={colors.accent.coralDark}
      strokeWidth="3"
      strokeLinecap="round"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

export default Shell;
