import { motion } from "framer-motion";
import { useState } from "react";

/* Approx coordinates inside a stylized India silhouette viewBox */
const LOCATIONS = [
  { id: "ap", name: "Andhra Pradesh", x: 260, y: 410 },
  { id: "ts", name: "Telangana", x: 245, y: 370 },
  { id: "mp", name: "Madhya Pradesh", x: 230, y: 260 },
  { id: "hr", name: "Haryana", x: 200, y: 165 },
  { id: "ka", name: "Karnataka", x: 215, y: 430 },
  { id: "up", name: "Uttar Pradesh", x: 270, y: 200 },
];

export function IndiaMap() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <svg viewBox="0 0 500 600" className="w-full h-auto">
        <defs>
          <linearGradient id="indiaFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.94 0.06 138)" />
            <stop offset="100%" stopColor="oklch(0.88 0.08 138)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {/* Stylized India silhouette */}
        <path
          d="M180 90 L240 70 L290 95 L325 130 L335 175 L320 210 L350 240 L370 285 L355 330 L340 365 L320 395 L295 440 L270 490 L240 535 L215 555 L195 535 L185 495 L170 450 L150 405 L140 360 L155 320 L140 280 L125 235 L140 195 L155 150 Z"
          fill="url(#indiaFill)"
          stroke="oklch(0.7 0.16 138)"
          strokeWidth="1.5"
        />
        {LOCATIONS.map((loc, i) => (
          <g key={loc.id} onMouseEnter={() => setHover(loc.id)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
            <motion.circle
              cx={loc.x} cy={loc.y} r="14"
              fill="oklch(0.7 0.16 138 / 0.3)"
              animate={{ r: [12, 22, 12], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 2.4, delay: i * 0.25, repeat: Infinity }}
            />
            <circle
              cx={loc.x} cy={loc.y} r="6"
              fill="oklch(0.34 0.09 152)"
              filter="url(#glow)"
            />
            {hover === loc.id && (
              <g>
                <rect
                  x={loc.x - 60} y={loc.y - 38}
                  width="120" height="24" rx="12"
                  fill="oklch(0.22 0.04 155)"
                />
                <text
                  x={loc.x} y={loc.y - 22}
                  textAnchor="middle"
                  fill="white"
                  fontSize="11"
                  fontWeight="600"
                >
                  {loc.name}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
