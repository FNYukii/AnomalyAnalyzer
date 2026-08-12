import clsx from 'clsx'

type Props = {
  className?: string
}

export const RisingMarkerMap = ({ className }: Props) => {
  return (
    <div className={clsx('flex justify-center items-end', className)}>
      {/* <div className="size-4 rounded-full bg-accent animate-rise" /> */}
    </div>
  )
}
