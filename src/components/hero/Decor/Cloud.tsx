import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

const Cloud: React.FC<SvgProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 220 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M42 96h134c21 0 38-15 38-34s-17-34-38-34c-7 0-14 2-20 5C146 14 126 2 103 2 75 2 52 20 48 45h-6C20 45 2 60 2 79s18 17 40 17z"
      fill={colors.background.skyDark}
      opacity="0.18"
      transform="translate(2 6)"
    />
    <path
      d="M40 92h136c20 0 36-14 36-32s-16-32-36-32c-8 0-15 2-21 6C145 15 125 4 102 4 75 4 53 22 50 46h-10C19 46 4 60 4 78s15 14 36 14z"
      fill={colors.primary.white}
      stroke={colors.background.skyDark}
      strokeWidth="4"
      strokeLinejoin="round"
    />
    <path
      d="M38 58c8-8 18-12 31-12m65-3c10-7 23-8 34-2"
      stroke={colors.background.skyLight}
      strokeWidth="6"
      strokeLinecap="round"
      opacity="0.85"
    />
  </svg>
);

export default Cloud;
