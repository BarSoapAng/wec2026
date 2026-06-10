import React from "react";
import { colors } from "src/lib/styles";

type SvgProps = { className?: string };

export const Cloud: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M40 78c-20 0-34-13-34-29 0-15 12-27 28-27 4-13 17-22 32-22 16 0 30 10 34 25 3-1 6-2 10-2 16 0 28 12 28 27s-13 28-30 28H40z"
      fill={colors.primary.white}
      stroke={colors.background.skyDark}
      strokeWidth="3"
    />
  </svg>
);

export const LifeRing: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="92" fill={colors.accent.coral} />
    <circle cx="100" cy="100" r="92" fill="none" stroke={colors.accent.coralDark} strokeWidth="4" />
    <path d="M100 8a92 92 0 0 1 0 184" fill="none" stroke={colors.primary.white} strokeWidth="0" />
    {/* white quadrant bands */}
    <path d="M100 8 A92 92 0 0 1 165 35 L138 62 A50 50 0 0 0 100 50 Z" fill={colors.primary.white} />
    <path d="M192 100 A92 92 0 0 1 165 165 L138 138 A50 50 0 0 0 150 100 Z" fill={colors.primary.white} />
    <path d="M100 192 A92 92 0 0 1 35 165 L62 138 A50 50 0 0 0 100 150 Z" fill={colors.primary.white} />
    <path d="M8 100 A92 92 0 0 1 35 35 L62 62 A50 50 0 0 0 50 100 Z" fill={colors.primary.white} />
    <circle cx="100" cy="100" r="50" fill={colors.background.sand} />
    <circle cx="100" cy="100" r="50" fill="none" stroke={colors.accent.coralDark} strokeWidth="4" />
  </svg>
);

export const Starfish: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M60 6c4 0 7 3 9 8l9 26 28 1c11 1 15 13 6 19l-22 16 8 26c3 11-7 18-16 11l-22-15-22 15c-9 7-19 0-16-11l8-26-22-16c-9-6-5-18 6-19l28-1 9-26c2-5 5-8 9-8z"
      fill={colors.accent.sun}
      stroke={colors.accent.coralDark}
      strokeWidth="3"
    />
    <circle cx="60" cy="30" r="3.5" fill={colors.primary.white} />
    <circle cx="40" cy="58" r="3.5" fill={colors.primary.white} />
    <circle cx="80" cy="58" r="3.5" fill={colors.primary.white} />
    <circle cx="48" cy="84" r="3.5" fill={colors.primary.white} />
    <circle cx="72" cy="84" r="3.5" fill={colors.primary.white} />
    <circle cx="60" cy="58" r="3.5" fill={colors.primary.white} />
  </svg>
);

export const Sun: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {Array.from({ length: 12 }).map((_, i) => {
      const a = (i * 30 * Math.PI) / 180;
      return (
        <line
          key={i}
          x1={100 + Math.cos(a) * 78}
          y1={100 + Math.sin(a) * 78}
          x2={100 + Math.cos(a) * 96}
          y2={100 + Math.sin(a) * 96}
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

export const PalmTree: React.FC<SvgProps> = ({ className }) => (
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

export const Shell: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M60 8c28 0 52 22 52 56 0 22-18 38-52 38S8 86 8 64C8 30 32 8 60 8z"
      fill={colors.accent.coral}
      stroke={colors.accent.coralDark}
      strokeWidth="3"
    />
    <path d="M60 14v86M60 14c-14 0-26 12-30 30M60 14c14 0 26 12 30 30M40 44c-6 12-8 30-8 50M80 44c6 12 8 30 8 50"
      stroke={colors.accent.coralDark} strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />
  </svg>
);

export const Plant: React.FC<SvgProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 138c0-40 0-80 0-110" stroke="#6cae6c" strokeWidth="5" strokeLinecap="round" />
    <path d="M50 70c-22-6-34-22-34-44 22 4 34 20 34 44z" fill="#7cc47c" />
    <path d="M50 50c22-6 34-22 34-44-22 4-34 20-34 44z" fill="#6cae6c" />
    <path d="M50 96c-18-4-28-18-28-36 18 4 28 16 28 36z" fill="#7cc47c" />
    <path d="M50 80c18-4 28-18 28-36-18 4-28 16-28 36z" fill="#6cae6c" />
  </svg>
);

export const WaveDivider: React.FC<SvgProps & { flip?: boolean; fill?: string }> = ({
  className,
  flip,
  fill,
}) => (
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

export const Waves: React.FC<SvgProps> = ({ className }) => (
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
