interface CourseCertificationBadgeProps {
  text: string;
}

export default function CourseCertificationBadge({ text }: CourseCertificationBadgeProps) {
  const id = `cert-arc-${text.replace(/[^a-zA-Z0-9]+/g, "-").toLowerCase()}`;
  const fontSize = text.length > 35 ? 9 : text.length > 25 ? 11 : 16;
  const letterSpacing = text.length > 35 ? 1.5 : text.length > 25 ? 2 : 4;

  return (
    <svg viewBox="0 0 200 200" className="h-32 w-32 shrink-0" aria-label={text}>
      <defs>
        <path
          id={id}
          d="M 12 145 A 88 88 0 1 1 188 145"
          fill="none"
        />
      </defs>
      <text
        fill="white"
        fontSize={fontSize}
        fontWeight="700"
        letterSpacing={letterSpacing}
        fontFamily="sans-serif"
      >
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
          {text.toUpperCase()}
        </textPath>
      </text>
    </svg>
  );
}
