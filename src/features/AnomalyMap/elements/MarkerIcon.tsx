import MarkerSVG from '../assets/marker.svg?react'

type Props = {
  className?: string
}

export const MarkerIcon = ({ className }: Props) => {
  return <MarkerSVG className={className} />
}
