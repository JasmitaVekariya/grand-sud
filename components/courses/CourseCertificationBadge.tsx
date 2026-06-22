interface CourseCertificationBadgeProps {
  text: string;
}

function getBadgeMetrics(text: string) {
  const len = text.length;
  const radius = Math.max(88, Math.min(118, 62 + len * 2.1));
  const arcLength = Math.PI * radius;

  const estimateWidth = (fontSize: number, letterSpacing: number) =>
    len * (fontSize * 0.58 + letterSpacing);

  for (let fontSize = 14; fontSize >= 6; fontSize--) {
    for (let letterSpacing = 3; letterSpacing >= 0; letterSpacing -= 0.5) {
      if (estimateWidth(fontSize, letterSpacing) <= arcLength * 0.94) {
        return { radius, fontSize, letterSpacing };
      }
    }
  }

  return { radius: 118, fontSize: 6, letterSpacing: 0 };
}

export default function CourseCertificationBadge({ text }: CourseCertificationBadgeProps) {
  const displayText = text.toUpperCase();
  const id = `cert-arc-${displayText.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`;
  const { radius, fontSize, letterSpacing } = getBadgeMetrics(displayText);

  const size = 240;
  const cx = size / 2;
  const baseY = 168;
  const startX = cx - radius + 8;
  const endX = cx + radius - 8;
  const pathD = `M ${startX} ${baseY} A ${radius} ${radius} 0 1 1 ${endX} ${baseY}`;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      className="h-36 w-36 shrink-0 overflow-visible"
      aria-label={displayText}
      role="img"
    >
      <defs>
        <path id={id} d={pathD} fill="none" />
      </defs>
      <text
        fill="white"
        fontSize={fontSize}
        fontWeight="700"
        letterSpacing={letterSpacing}
        fontFamily="sans-serif"
      >
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
          {displayText}
        </textPath>
      </text>
    </svg>
  );
}
