// Shared SVG car illustrations used across sections

export function SpectreCoupe() {
  return (
    <svg viewBox="0 0 600 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[85%] max-w-[520px] opacity-75">
      <defs>
        <radialGradient id="spec1" cx="50%" cy="40%" r="60%">
          <stop offset="0%"   stopColor="rgba(184,149,106,0.1)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        <linearGradient id="specBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(184,149,106,0.22)" />
          <stop offset="60%"  stopColor="rgba(100,76,40,0.15)"   />
          <stop offset="100%" stopColor="rgba(20,14,5,0.06)"     />
        </linearGradient>
        <linearGradient id="specGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(184,149,106,0.2)" />
          <stop offset="100%" stopColor="rgba(184,149,106,0.04)" />
        </linearGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="295" cy="360" rx="255" ry="14" fill="rgba(184,149,106,0.05)" />

      {/* Body */}
      <path
        d="M55 295 Q62 255 98 234 L198 192 Q278 158 355 148 Q422 140 462 155 L490 174 Q500 192 496 242 L490 298 Z"
        fill="url(#specBody)"
        stroke="rgba(184,149,106,0.28)"
        strokeWidth="0.7"
      />

      {/* Coupé roofline — lower rear */}
      <path
        d="M198 192 Q248 128 316 108 Q390 88 450 106 L490 130 L490 174"
        fill="none"
        stroke="rgba(184,149,106,0.45)"
        strokeWidth="0.9"
      />

      {/* Glass */}
      <path
        d="M208 190 Q254 130 318 110 Q388 90 448 108 L488 132 L480 170 Q445 160 368 156 Q280 152 206 168 Z"
        fill="url(#specGlass)"
        stroke="rgba(184,149,106,0.18)"
        strokeWidth="0.5"
      />

      {/* B pillar */}
      <line x1="370" y1="108" x2="378" y2="160" stroke="rgba(184,149,106,0.22)" strokeWidth="0.5" />

      {/* Character lines */}
      <path d="M100 252 Q300 240 465 242 L490 252" fill="none" stroke="rgba(184,149,106,0.14)" strokeWidth="0.6" />

      {/* Rear deck — coupé style */}
      <path d="M55 295 Q50 275 54 248 L62 232" fill="none" stroke="rgba(184,149,106,0.2)" strokeWidth="0.5" />

      {/* Front section */}
      <path
        d="M490 174 Q504 178 512 200 L508 230 Q498 222 484 212"
        fill="rgba(184,149,106,0.08)"
        stroke="rgba(184,149,106,0.3)"
        strokeWidth="0.5"
      />

      {/* Grille */}
      <rect x="498" y="208" width="14" height="44" rx="1" fill="none" stroke="rgba(184,149,106,0.38)" strokeWidth="0.6" />
      {[216, 225, 234, 243].map(y => (
        <line key={y} x1="498" y1={y} x2="512" y2={y} stroke="rgba(184,149,106,0.14)" strokeWidth="0.3" />
      ))}

      {/* Wheels */}
      {[{ cx: 148, cy: 300 }, { cx: 428, cy: 298 }].map(({ cx, cy }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="52" fill="none" stroke="rgba(184,149,106,0.3)" strokeWidth="0.8" />
          <circle cx={cx} cy={cy} r="38" fill="none" stroke="rgba(184,149,106,0.12)" strokeWidth="0.5" />
          <circle cx={cx} cy={cy} r="8"  fill="rgba(184,149,106,0.18)" />
          {[0, 40, 80, 120, 160].map(a => {
            const rad = (a * Math.PI) / 180
            return (
              <g key={a}>
                <line
                  x1={cx + Math.cos(rad) * 8}  y1={cy + Math.sin(rad) * 8}
                  x2={cx + Math.cos(rad) * 36} y2={cy + Math.sin(rad) * 36}
                  stroke="rgba(184,149,106,0.16)" strokeWidth="0.5"
                />
                <line
                  x1={cx - Math.cos(rad) * 8}  y1={cy - Math.sin(rad) * 8}
                  x2={cx - Math.cos(rad) * 36} y2={cy - Math.sin(rad) * 36}
                  stroke="rgba(184,149,106,0.16)" strokeWidth="0.5"
                />
              </g>
            )
          })}
        </g>
      ))}

      {/* Spirit hint */}
      <path d="M293 144 L291 130 L297 130 Z" fill="rgba(184,149,106,0.5)" />

      {/* Label */}
      <text
        x="295" y="390"
        fontFamily="Cormorant Garamond, serif"
        fontSize="10"
        fill="rgba(184,149,106,0.2)"
        textAnchor="middle"
        letterSpacing="8"
      >
        SPECTRE · ELECTRIC GRAND COUPÉ
      </text>
    </svg>
  )
}

export function PhantomSaloon() {
  return (
    <svg viewBox="0 0 620 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[85%] max-w-[520px] opacity-72">
      <defs>
        <linearGradient id="phBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(184,149,106,0.2)"  />
          <stop offset="60%"  stopColor="rgba(110,85,45,0.13)"   />
          <stop offset="100%" stopColor="rgba(20,15,5,0.05)"     />
        </linearGradient>
        <linearGradient id="phGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="rgba(184,149,106,0.18)" />
          <stop offset="100%" stopColor="rgba(184,149,106,0.03)" />
        </linearGradient>
      </defs>

      <ellipse cx="305" cy="355" rx="270" ry="13" fill="rgba(184,149,106,0.05)" />

      {/* Body — longer, more formal */}
      <path
        d="M45 288 Q54 246 94 224 L205 180 Q295 144 385 134 Q460 126 510 142 L542 164 Q555 184 550 238 L544 292 Z"
        fill="url(#phBody)"
        stroke="rgba(184,149,106,0.26)"
        strokeWidth="0.7"
      />

      {/* Formal upright roofline */}
      <path
        d="M205 180 Q250 118 310 100 Q390 80 462 92 L510 120 L542 164"
        fill="none"
        stroke="rgba(184,149,106,0.44)"
        strokeWidth="0.9"
      />

      {/* Glass */}
      <path
        d="M215 178 Q258 118 314 102 Q390 82 460 94 L508 122 L500 162 Q462 152 378 148 Q280 144 212 162 Z"
        fill="url(#phGlass)"
        stroke="rgba(184,149,106,0.17)"
        strokeWidth="0.5"
      />

      {/* B-pillar — wide, formal */}
      <line x1="355" y1="90" x2="368" y2="154" stroke="rgba(184,149,106,0.28)" strokeWidth="0.8" />

      {/* Floating C-pillar character */}
      <path d="M460 94 L472 148" stroke="rgba(184,149,106,0.2)" strokeWidth="0.6" />

      {/* Character line */}
      <path d="M95 244 Q310 232 510 234 L545 246" fill="none" stroke="rgba(184,149,106,0.13)" strokeWidth="0.6" />

      {/* Grille — large, prominent */}
      <rect x="534" y="196" width="22" height="62" rx="2" fill="none" stroke="rgba(184,149,106,0.42)" strokeWidth="0.7" />
      <line x1="545" y1="196" x2="545" y2="258" stroke="rgba(184,149,106,0.24)" strokeWidth="0.4" />
      {[208, 220, 232, 244].map(y => (
        <line key={y} x1="534" y1={y} x2="556" y2={y} stroke="rgba(184,149,106,0.13)" strokeWidth="0.3" />
      ))}

      {/* Headlight */}
      <path
        d="M542 164 Q558 170 564 190 L558 220 Q548 212 534 202"
        fill="rgba(184,149,106,0.08)"
        stroke="rgba(184,149,106,0.3)"
        strokeWidth="0.5"
      />

      {/* Wheels */}
      {[{ cx: 158, cy: 295 }, { cx: 466, cy: 292 }].map(({ cx, cy }, i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="54" fill="none" stroke="rgba(184,149,106,0.3)" strokeWidth="0.8" />
          <circle cx={cx} cy={cy} r="40" fill="none" stroke="rgba(184,149,106,0.12)" strokeWidth="0.5" />
          <circle cx={cx} cy={cy} r="8"  fill="rgba(184,149,106,0.18)" />
          {[0, 36, 72, 108, 144].map(a => {
            const rad = (a * Math.PI) / 180
            return (
              <g key={a}>
                <line x1={cx + Math.cos(rad)*8} y1={cy + Math.sin(rad)*8}
                      x2={cx + Math.cos(rad)*38} y2={cy + Math.sin(rad)*38}
                      stroke="rgba(184,149,106,0.16)" strokeWidth="0.5" />
                <line x1={cx - Math.cos(rad)*8} y1={cy - Math.sin(rad)*8}
                      x2={cx - Math.cos(rad)*38} y2={cy - Math.sin(rad)*38}
                      stroke="rgba(184,149,106,0.16)" strokeWidth="0.5" />
              </g>
            )
          })}
        </g>
      ))}

      <text x="305" y="378" fontFamily="Cormorant Garamond, serif" fontSize="10"
        fill="rgba(184,149,106,0.2)" textAnchor="middle" letterSpacing="8">
        PHANTOM · SERIES II
      </text>
    </svg>
  )
}
