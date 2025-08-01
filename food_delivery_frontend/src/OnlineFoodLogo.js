import React from "react";

/**
 * PUBLIC_INTERFACE
 * OnlineFoodLogo displays the official "ONLINE FOOD" brand logo per design guidance.
 * The logo features a magenta spoon, orange-gradient knife, green fork, mouse with cable, and bold black "ONLINE FOOD" text.
 *
 * - SVG colors match: #d90079 (spoon), #ffb726→#ff6600 (knife), #74c043 (fork), #000 (handles/mouse/text), #fff (background).
 * - Proportions and alignment strictly match design notes for immediate brand recognition.
 * - Works on white/light backgrounds.
 *
 * Props:
 *   - size: (number) default 92. Width in px (height scaled proportionally).
 *   - style: (object) inject CSS style overrides.
 *   - className: (string) CSS classes for additional styling
 */
/**
 * Responsive OnlineFoodLogo component
 * - Adds style and className props.
 * - Allows maxWidth and width 100% for responsive fit.
 * - Defaults to balance at 92px wide, limits height for header use.
 */
export default function OnlineFoodLogo({ size = 92, style = {}, className = "" }) {
  // Provides a wrapper span to handle sizing & allow CSS overrides.
  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        maxWidth: "min(260px, 48vw)",
        width: typeof size === "number" ? size : "100%",
        minWidth: 72,
        verticalAlign: "middle",
        ...style,
      }}
    >
      <svg
        width="100%"
        height="auto"
        viewBox="0 0 80 83"
        fill="none"
        style={{ display: "block" }}
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ONLINE FOOD application logo"
        role="img"
        preserveAspectRatio="xMidYMin meet"
      >
        {/* Background */}
        <rect width="80" height="83" fill="#fff" rx="12" />

        {/* --- Utensils --- */}
        {/* Spoon (Left) */}
        <g>
          <ellipse
            cx="21"
            cy="25"
            rx="5"
            ry="7"
            fill="#d90079"
          />
          <rect
            x="19.5"
            y="32"
            width="3"
            height="25"
            rx="1.5"
            fill="#000"
          />
        </g>
        {/* Knife (Center, with gradient) */}
        <g>
          <defs>
            <linearGradient id="knife-blade" x1="40" y1="20" x2="40" y2="47" gradientUnits="userSpaceOnUse">
              <stop stopColor="#ffb726"/>
              <stop offset="1" stopColor="#ff6600"/>
            </linearGradient>
          </defs>
          <rect
            x="37.2"
            y="20"
            width="5.6"
            height="27"
            rx="2.2"
            fill="url(#knife-blade)"
          />
          <rect
            x="38"
            y="47"
            width="4"
            height="10"
            rx="2"
            fill="#000"
          />
        </g>
        {/* Fork (Right) */}
        <g>
          {/* Fork Head */}
          <rect
            x="54.5"
            y="22"
            width="3"
            height="10"
            rx="1.2"
            fill="#74c043"
          />
          <rect
            x="56"
            y="32"
            width="1"
            height="8"
            rx="0.45"
            fill="#74c043"
          />
          <rect
            x="53"
            y="32"
            width="1"
            height="8"
            rx="0.45"
            fill="#74c043"
          />
          <rect
            x="58"
            y="32"
            width="1"
            height="8"
            rx="0.45"
            fill="#74c043"
          />
          {/* Fork Handle */}
          <rect
            x="54.5"
            y="40"
            width="3"
            height="17"
            rx="1.2"
            fill="#000"
          />
        </g>

        {/* --- Mouse and Cord --- */}
        {/* Mouse (bottom left) */}
        <g>
          <ellipse
            cx="14"
            cy="60"
            rx="7"
            ry="10"
            fill="#000"
          />
          {/* Mouse scroll wheel (white line) */}
          <rect
            x="13"
            y="55"
            width="2"
            height="8"
            rx="1"
            fill="#fff"
          />
        </g>
        {/* Mouse cord (approximate as path with end dot near fork) */}
        <g>
          <path
            d="M16 51 Q10 36, 22 30 Q38 16 60 37 Q70 45, 65 54"
            stroke="#000"
            strokeWidth="2"
            fill="none"
          />
          {/* Cord end dot */}
          <circle cx="65" cy="54" r="2.2" fill="#000" />
        </g>

        {/* --- Logo Text --- */}
        <text
          x="40"
          y="78"
          textAnchor="middle"
          fill="#000"
          fontFamily="'Montserrat ExtraBold', 'Arial Black', Arial, Helvetica, sans-serif"
          fontWeight="800"
          fontSize="15"
          letterSpacing="2"
          style={{ textTransform: "uppercase" }}
        >
          ONLINE FOOD
        </text>
      </svg>
    </span>
  );
}
