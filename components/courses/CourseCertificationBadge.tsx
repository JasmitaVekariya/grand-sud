interface CourseCertificationBadgeProps {
  text: string;
}

export default function CourseCertificationBadge({ text }: CourseCertificationBadgeProps) {
  const id = `cert-arc-${text.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <svg viewBox="0 0 200 200" className="w-32 h-32" aria-label={text}>
      <defs>
        <path
          id={id}
          d="M 15 140 A 85 85 0 1 1 185 140"
          fill="none"
        />
      </defs>
      <circle cx="100" cy="100" r="4" fill="white" />
      <text
        fill="white"
        fontSize="16"
        fontWeight="700"
        letterSpacing="4"
        fontFamily="sans-serif"
      >
        <textPath href={`#${id}`} startOffset="50%" textAnchor="middle">
          {text.toUpperCase()}
        </textPath>
      </text>
    </svg>
  );
}
