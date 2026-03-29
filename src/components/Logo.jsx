/**
 * SVG Logo PT Nusa Prima Energi Indonesia
 * Diamond shape – navy blue + green with white starburst
 */
const Logo = ({ size = 40, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    {/* Diamond / rotated square clipping path */}
    <clipPath id="diamond-clip">
      <polygon points="50,2 98,50 50,98 2,50" />
    </clipPath>

    {/* Navy blue background (full diamond) */}
    <polygon points="50,2 98,50 50,98 2,50" fill="#0d2563" />

    {/* Green accent – top-right quadrant */}
    <polygon points="50,2 98,50 50,50" fill="#2e7d1b" clipPath="url(#diamond-clip)" />
    {/* Green accent – extra fill top-right */}
    <polygon points="50,2 98,50 80,20" fill="#2e7d1b" />

    {/* White starburst / compass star */}
    <g transform="translate(50,50)">
      {/* 12-point star via overlapping polygons */}
      <polygon
        points="0,-22 3,-7 14,-14 7,-3 22,0 7,3 14,14 3,7 0,22 -3,7 -14,14 -7,3 -22,0 -7,-3 -14,-14 -3,-7"
        fill="white"
        opacity="0.95"
      />
    </g>
  </svg>
)

export default Logo
