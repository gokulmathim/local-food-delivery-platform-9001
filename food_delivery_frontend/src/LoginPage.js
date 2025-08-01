import React from "react";
import "./LoginPage.css";

// PUBLIC_INTERFACE
function LoginPage() {
  return (
    <div className="loginpage-root">
      <div className="loginpage-split loginpage-left">
        <div className="loginpage-bg-icons" aria-hidden="true">
          {/* Simple food line icons as SVG patterns, decorative */}
          <svg width="0" height="0">
            <defs>
              <pattern
                id="food-icons"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <g opacity="0.05">
                  <rect x="13" y="13" rx="9" width="32" height="32" stroke="#fff" strokeWidth="2" fill="none" />
                  <circle cx="30" cy="30" r="15" stroke="#343a40" strokeWidth="2" fill="none" />
                  <rect x="19" y="39" rx="4" width="22" height="6" stroke="#343a40" strokeWidth="1.5" fill="none"/>
                </g>
              </pattern>
            </defs>
          </svg>
        </div>
        <div className="loginpage-logincard">
          <div className="loginpage-logoicon-container">
            <LoginLogoSVG />
          </div>
          <h2 className="loginpage-welcome-title">Welcome Back</h2>
          <form className="loginpage-form" autoComplete="on">
            <label className="loginpage-label" htmlFor="email">
              Email
              <input
                className="loginpage-input"
                type="email"
                id="email"
                name="email"
                placeholder="you@example.com"
                required
                autoFocus
              />
            </label>
            <button className="loginpage-btn-primary" type="submit">
              NEXT
            </button>
          </form>
          <div className="loginpage-linksrow">
            <a href="#" className="loginpage-forgot-link">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="loginpage-split loginpage-right">
        <div className="loginpage-wave">
          <BackgroundBlueWave />
        </div>
        <div className="loginpage-branding-inner">
          <h1 className="loginpage-pagetitle">
            Food website <br /> <span className="loginpage-pagetitle-accent">Login Page</span>
          </h1>
          <div className="loginpage-trending-card">
            <span className="loginpage-trending-label">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="loginpage-trending-icon"
                fill="none"
                aria-hidden="true"
              >
                {/* Figma logo or food logo accent, simple circle */}
                <circle cx="12" cy="12" r="10" fill="#FF2963" />
                <ellipse cx="12" cy="17" rx="6" ry="3" fill="#36D399" />
              </svg>{" "}
              Trending now
            </span>
          </div>
        </div>
      </div>
      {/* Navigation overlay (optional): can be slotted as required */}
      <div className="loginpage-nav">
        <a className="loginpage-nav-btn loginpage-nav-login" href="#">Login</a>
        <a className="loginpage-nav-btn loginpage-nav-signup" href="#">Signup</a>
      </div>
    </div>
  );
}

// PUBLIC_INTERFACE
function LoginLogoSVG() {
  // Simple replacement for peach/fruit logo from design notes
  return (
    <svg
      className="loginpage-logoicon"
      viewBox="0 0 56 56"
      width="56"
      height="56"
      aria-hidden="true"
    >
      <circle
        cx="28"
        cy="28"
        r="25"
        fill="#cfe5e2"
        stroke="#fff"
        strokeWidth="2"
      />
      <ellipse
        cx="28"
        cy="33"
        rx="15"
        ry="13"
        fill="#efb046"
        stroke="#a05a26"
        strokeWidth="1.5"
      />
      <path
        d="M18 30 Q20 27 25 27"
        stroke="#728c41"
        strokeWidth="2"
        fill="none"
      />
      <ellipse
        cx="24"
        cy="30"
        rx="2"
        ry="3"
        fill="#36D399"
        stroke="#a05a26"
        strokeWidth="1"
      />
      <rect
        x="26"
        y="19"
        width="4"
        height="7"
        rx="2"
        fill="#a05a26"
      />
      <text
        x="28"
        y="50"
        textAnchor="middle"
        fill="#33444b"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fontSize="9"
        letterSpacing="1"
        alignmentBaseline="middle"
        style={{ textTransform: "uppercase" }}
      >
        FOOD LOGO
      </text>
    </svg>
  );
}

// PUBLIC_INTERFACE
function BackgroundBlueWave() {
  // SVG decorative wave, taken from design instructions
  return (
    <svg
      width="100%"
      height="160"
      viewBox="0 0 600 160"
      fill="none"
      className="loginpage-wave-svg"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="none"
      style={{ position: "absolute", bottom: 0, left: 0, width: "100%" }}
    >
      <path
        d="M0 120 Q200 200 600 60 V160 H0z"
        fill="#2563FF"
        opacity="0.95"
      />
    </svg>
  );
}

export default LoginPage;
