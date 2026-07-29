// Official sign artwork cropped from the California MUTCD 2014 (Rev. 3) Sign Charts
// (public/roadSigns.pdf), not hand-drawn recreations.
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

export default function RoadSign({ type, className = '' }: { type: SignType; className?: string }) {
  return (
    <div className={`bg-white rounded-lg border border-gray-100 p-4 flex items-center justify-center shrink-0 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/signs/${type}.png`}
        alt=""
        className="w-full h-full object-contain drop-shadow-sm"
      />
    </div>
  )
}
