import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

const Sun: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;

      return (
        <line
          key={i}
          x1={100 + Math.cos(angle) * 78}
          y1={100 + Math.sin(angle) * 78}
          x2={100 + Math.cos(angle) * 96}
          y2={100 + Math.sin(angle) * 96}
          stroke={colors.accent.sun}
          strokeWidth="8"
          strokeLinecap="round"
        />
      );
    })}
    <circle cx="100" cy="100" r="62" fill={colors.accent.sun} />
    <circle cx="100" cy="100" r="62" fill="#f4b86a" opacity="0.5" />
  </svg>
);

export default Sun;
