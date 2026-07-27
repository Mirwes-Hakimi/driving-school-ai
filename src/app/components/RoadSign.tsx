// SVG recreations of official California MUTCD sign designs (California Manual on Uniform
// Traffic Control Devices, 2014 Ed. Rev. 3 — Sign Charts). Shapes, colors, and layouts are
// modeled directly on that public-domain reference chart, not freehand guesses.
export type SignType =
  | 'stop'
  | 'yield'
  | 'speedLimit'
  | 'railroad'
  | 'schoolCrossing'
  | 'doNotEnter'
  | 'oneWay'
  | 'noUTurn'
  | 'merge'
  | 'pedestrianCrossing'
  | 'slippery'
  | 'windingRoad'
  | 'noParking'
  | 'deerCrossing'

const YELLOW = '#F7D117'
const RED = '#C8102E'
const SCHOOL_GREEN = '#D7E600'

type Point = [number, number]

// Real signs are die-cut with rounded corners, not sharp points — this is the detail
// that makes a hand-plotted polygon read as "off." Given a polygon's vertices, returns
// a path string with each corner replaced by a small quadratic curve.
function roundedPolygonPath(points: Point[], radius: number): string {
  const n = points.length
  const parts: string[] = []
  for (let i = 0; i < n; i++) {
    const [cx, cy] = points[i]
    const [px, py] = points[(i - 1 + n) % n]
    const [nx, ny] = points[(i + 1) % n]

    const toPrevX = px - cx, toPrevY = py - cy
    const prevLen = Math.hypot(toPrevX, toPrevY)
    const toNextX = nx - cx, toNextY = ny - cy
    const nextLen = Math.hypot(toNextX, toNextY)

    const ax = cx + (toPrevX / prevLen) * radius
    const ay = cy + (toPrevY / prevLen) * radius
    const bx = cx + (toNextX / nextLen) * radius
    const by = cy + (toNextY / nextLen) * radius

    parts.push(i === 0 ? `M ${ax},${ay}` : `L ${ax},${ay}`)
    parts.push(`Q ${cx},${cy} ${bx},${by}`)
  }
  parts.push('Z')
  return parts.join(' ')
}

function Sign({ children, viewBox = '0 0 100 100' }: { children: React.ReactNode; viewBox?: string }) {
  return (
    <svg viewBox={viewBox} className="w-full h-full drop-shadow-sm" role="img" aria-hidden="true">
      {children}
    </svg>
  )
}

const DIAMOND_POINTS: Point[] = [[50, 4], [96, 50], [50, 96], [4, 50]]
const PENTAGON_POINTS: Point[] = [[50, 4], [96, 39], [78, 96], [22, 96], [4, 39]]
const TRIANGLE_DOWN_POINTS: Point[] = [[6, 8], [94, 8], [50, 92]]
const OCTAGON_POINTS: Point[] = [[32, 4], [68, 4], [96, 32], [96, 68], [68, 96], [32, 96], [4, 68], [4, 32]]

function Diamond({ fill, children }: { fill: string; children?: React.ReactNode }) {
  return (
    <Sign>
      <path d={roundedPolygonPath(DIAMOND_POINTS, 6)} fill={fill} stroke="black" strokeWidth="3" />
      {children}
    </Sign>
  )
}

// A simple filled pedestrian silhouette (head + body + one leg forward), matching the
// bold pictogram style used on real crossing signs rather than a thin stick figure.
function WalkerFigure({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`}>
      <circle cx="0" cy="-20" r="5.5" fill="black" />
      <path
        d="M -5 -13 C -6 -4 -5 4 -8 14 L -3 15 L 0 0 L 3 15 L 8 14 C 5 4 6 -4 5 -13
           C 5 -13 8 -10 12 -6 L 15 -9 C 9 -15 4 -16 0 -16 C -4 -16 -9 -15 -15 -9
           L -12 -6 C -8 -10 -5 -13 -5 -13 Z"
        fill="black"
      />
    </g>
  )
}

export default function RoadSign({ type, className = '' }: { type: SignType; className?: string }) {
  return (
    <div className={`bg-white rounded-lg border border-gray-100 p-4 flex items-center justify-center shrink-0 ${className}`}>
      <div className="w-full h-full">
        {(() => {
          switch (type) {
            case 'stop':
              return (
                <Sign>
                  <path
                    d={roundedPolygonPath(OCTAGON_POINTS, 4)}
                    fill={RED}
                    stroke="white"
                    strokeWidth="3"
                  />
                  <text x="50" y="60" textAnchor="middle" fontSize="26" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">
                    STOP
                  </text>
                </Sign>
              )

            case 'yield':
              // Real YIELD signs are an inverted (point-down) triangle — white face, thick red border.
              return (
                <Sign>
                  <path d={roundedPolygonPath(TRIANGLE_DOWN_POINTS, 7)} fill="white" stroke={RED} strokeWidth="9" strokeLinejoin="round" />
                  <text x="50" y="42" textAnchor="middle" fontSize="18" fontWeight="bold" fill={RED} fontFamily="Arial, sans-serif">
                    YIELD
                  </text>
                </Sign>
              )

            case 'speedLimit':
              return (
                <Sign>
                  <rect x="14" y="4" width="72" height="92" rx="5" fill="white" stroke="black" strokeWidth="3" />
                  <text x="50" y="26" textAnchor="middle" fontSize="10" fontWeight="bold" fill="black" fontFamily="Arial, sans-serif" letterSpacing="1">SPEED</text>
                  <text x="50" y="40" textAnchor="middle" fontSize="10" fontWeight="bold" fill="black" fontFamily="Arial, sans-serif" letterSpacing="1">LIMIT</text>
                  <text x="50" y="80" textAnchor="middle" fontSize="34" fontWeight="bold" fill="black" fontFamily="Arial, sans-serif">55</text>
                </Sign>
              )

            case 'railroad':
              // W10-1: round advance-warning sign (the one round sign in the whole MUTCD set).
              return (
                <Sign>
                  <circle cx="50" cy="50" r="46" fill={YELLOW} stroke="black" strokeWidth="3" />
                  <line x1="16" y1="16" x2="84" y2="84" stroke="black" strokeWidth="6" strokeLinecap="round" />
                  <line x1="84" y1="16" x2="16" y2="84" stroke="black" strokeWidth="6" strokeLinecap="round" />
                  <text x="27" y="57" textAnchor="middle" fontSize="22" fontWeight="bold" fill="black" fontFamily="Arial, sans-serif">R</text>
                  <text x="73" y="57" textAnchor="middle" fontSize="22" fontWeight="bold" fill="black" fontFamily="Arial, sans-serif">R</text>
                </Sign>
              )

            case 'schoolCrossing':
              // S1-1: fluorescent yellow-green pentagon, two walking figures (adult + child).
              return (
                <Sign>
                  <path d={roundedPolygonPath(PENTAGON_POINTS, 6)} fill={SCHOOL_GREEN} stroke="black" strokeWidth="3" />
                  <WalkerFigure x={38} y={66} scale={1.15} />
                  <WalkerFigure x={62} y={70} scale={0.8} />
                </Sign>
              )

            case 'doNotEnter':
              return (
                <Sign>
                  <circle cx="50" cy="50" r="46" fill={RED} stroke="white" strokeWidth="2" />
                  <rect x="14" y="40" width="72" height="20" fill="white" />
                </Sign>
              )

            case 'oneWay':
              // R6-2: single black rectangle containing both the arrow and the words "ONE WAY".
              return (
                <Sign viewBox="0 0 160 70">
                  <rect x="4" y="4" width="152" height="62" rx="3" fill="black" stroke="black" strokeWidth="2" />
                  <text x="55" y="42" textAnchor="middle" fontSize="20" fontWeight="bold" fill="white" fontFamily="Arial, sans-serif">ONE WAY</text>
                  <polygon points="118,20 118,50 148,35" fill="white" />
                </Sign>
              )

            case 'noUTurn':
              return (
                <Sign>
                  <rect x="4" y="4" width="92" height="92" rx="5" fill="white" stroke="black" strokeWidth="3" />
                  <path d="M32 62 V38 a18 18 0 0 1 36 0 V56" stroke="black" strokeWidth="6" fill="none" strokeLinecap="round" />
                  <polygon points="68,56 59,56 63.5,70" fill="black" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke={RED} strokeWidth="6" />
                  <line x1="19" y1="81" x2="81" y2="19" stroke={RED} strokeWidth="6" strokeLinecap="round" />
                </Sign>
              )

            case 'merge':
              // W4-1: thick straight-ahead arrow with a thinner line merging in from the side.
              return (
                <Diamond fill={YELLOW}>
                  <path d="M58 88 L58 35" stroke="black" strokeWidth="7" fill="none" strokeLinecap="round" />
                  <polygon points="58,20 48,38 68,38" fill="black" />
                  <path d="M25 82 Q30 55 55 42" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" />
                </Diamond>
              )

            case 'pedestrianCrossing':
              return (
                <Diamond fill={SCHOOL_GREEN}>
                  <WalkerFigure x={50} y={72} scale={1.5} />
                </Diamond>
              )

            case 'slippery':
              // W8-5: car fishtailing, with curved skid-mark lines trailing behind it.
              return (
                <Diamond fill={YELLOW}>
                  <path d="M18 78 Q28 62 42 66" stroke="black" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  <path d="M26 84 Q34 70 46 73" stroke="black" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                  <g transform="translate(58, 55) rotate(-18)">
                    <rect x="-20" y="-8" width="40" height="16" rx="4" fill="black" />
                    <rect x="-11" y="-16" width="22" height="11" rx="3" fill="black" />
                    <circle cx="-11" cy="9" r="5" fill="black" />
                    <circle cx="12" cy="9" r="5" fill="black" />
                  </g>
                </Diamond>
              )

            case 'windingRoad':
              return (
                <Diamond fill={YELLOW}>
                  <path d="M22 85 C22 65 50 66 50 50 C50 34 30 33 30 18" stroke="black" strokeWidth="5" fill="none" strokeLinecap="round" />
                  <polygon points="30,18 24,27 37,26" fill="black" />
                </Diamond>
              )

            case 'noParking':
              // R28: real "no parking" signage is a text sign, not a circle-slash icon.
              return (
                <Sign>
                  <rect x="4" y="4" width="92" height="92" rx="5" fill="white" stroke={RED} strokeWidth="4" />
                  <text x="50" y="46" textAnchor="middle" fontSize="17" fontWeight="bold" fill={RED} fontFamily="Arial, sans-serif">NO</text>
                  <text x="50" y="66" textAnchor="middle" fontSize="17" fontWeight="bold" fill={RED} fontFamily="Arial, sans-serif">PARKING</text>
                </Sign>
              )

            case 'deerCrossing':
              // W11-3: deer silhouette — body, neck/head, antlers, and four legs built from
              // simple primitives (a single freeform path reads as a blob at this size).
              return (
                <Diamond fill={YELLOW}>
                  <g transform="rotate(-8 50 60)">
                    <ellipse cx="52" cy="60" rx="20" ry="10" fill="black" />
                    <path d="M36 55 L26 32 L31 32 L40 50" fill="black" />
                    <ellipse cx="25" cy="29" rx="6" ry="5" fill="black" />
                    <path d="M22 24 L16 14 M22 24 L20 12 M28 24 L32 13 M28 24 L34 16" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" />
                    <path d="M40 68 L36 84 M48 70 L46 86 M58 70 L60 86 M66 66 L70 82" stroke="black" strokeWidth="4" fill="none" strokeLinecap="round" />
                    <path d="M72 56 L78 52" stroke="black" strokeWidth="3" fill="none" strokeLinecap="round" />
                  </g>
                </Diamond>
              )

            default:
              return null
          }
        })()}
      </div>
    </div>
  )
}
