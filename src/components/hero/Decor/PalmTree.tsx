import React from "react";
import { colors } from "src/lib/styles";
import type { SvgProps } from "./types";

const PalmTree: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 220 320" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M104 300c-4-70-2-150 6-210"
      stroke="#c98a4b"
      strokeWidth="14"
      strokeLinecap="round"
    />
    <path d="M110 88c-30-26-72-30-104-8 30-6 58 0 80 18z" fill={colors.background.seaDark} />
    <path d="M110 88c-8-38-40-66-82-72 26 16 44 40 52 70z" fill={colors.background.sea} />
    <path d="M110 88c34-22 78-20 106 6-30-10-58-8-82 8z" fill={colors.background.seaDark} />
    <path d="M110 88c14-36 50-58 92-58-28 12-50 34-62 64z" fill={colors.background.sea} />
    <path d="M110 88c-2-26 14-54 44-70-18 20-28 44-28 74z" fill={colors.background.seaLight} />
    <circle cx="110" cy="90" r="12" fill={colors.accent.sun} />
  </svg>
);

export default PalmTree;
