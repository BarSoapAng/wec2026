import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

const LifeRing: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" fill={colors.accent.coral} />
    <circle cx="100" cy="100" r="92" fill="none" stroke={colors.accent.coralDark} strokeWidth="4" />
    <path d="M100 8a92 92 0 0 1 0 184" fill="none" stroke={colors.primary.white} strokeWidth="0" />
    <path d="M100 8 A92 92 0 0 1 165 35 L138 62 A50 50 0 0 0 100 50 Z" fill={colors.primary.white} />
    <path d="M192 100 A92 92 0 0 1 165 165 L138 138 A50 50 0 0 0 150 100 Z" fill={colors.primary.white} />
    <path d="M100 192 A92 92 0 0 1 35 165 L62 138 A50 50 0 0 0 100 150 Z" fill={colors.primary.white} />
    <path d="M8 100 A92 92 0 0 1 35 35 L62 62 A50 50 0 0 0 50 100 Z" fill={colors.primary.white} />
    <circle cx="100" cy="100" r="50" fill={colors.background.sand} />
    <circle cx="100" cy="100" r="50" fill="none" stroke={colors.accent.coralDark} strokeWidth="4" />
  </svg>
);

export default LifeRing;
