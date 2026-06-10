import React from "react";
import type { SvgProps } from "./types";

const Plant: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 138c0-40 0-80 0-110" stroke="#6cae6c" strokeWidth="5" strokeLinecap="round" />
    <path d="M50 70c-22-6-34-22-34-44 22 4 34 20 34 44z" fill="#7cc47c" />
    <path d="M50 50c22-6 34-22 34-44-22 4-34 20-34 44z" fill="#6cae6c" />
    <path d="M50 96c-18-4-28-18-28-36 18 4 28 16 28 36z" fill="#7cc47c" />
    <path d="M50 80c18-4 28-18 28-36-18 4-28 16-28 36z" fill="#6cae6c" />
  </svg>
);

export default Plant;
