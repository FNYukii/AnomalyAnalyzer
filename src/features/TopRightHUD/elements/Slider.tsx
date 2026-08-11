import clsx from 'clsx'

type Props = {
  percentage: number
  color?: 'primary' | 'accent'
  duration?: 'fast' | 'slow'
  className?: string
}

export const Slider = ({
  percentage,
  color = 'primary',
  duration = 'fast',
  className,
}: Props) => {
  // 割合を0〜100%の範囲内に安全に収める
  const clampedValue = Math.min(100, Math.max(0, percentage))

  return (
    <div
      className={clsx(
        'w-3 h-full',
        'flex flex-col justify-end',
        color === 'primary' && 'bg-primary/20 border-y-2 border-primary',
        color === 'accent' && 'bg-accent/20 border-y-2 border-accent',
        className,
      )}
    >
      <div
        className={clsx(
          'w-full',
          color === 'primary' && 'bg-primary/40',
          color === 'accent' && 'bg-accent/40',
          'transition-all ease-out',
          duration === 'fast' ? 'duration-150' : 'duration-800',
        )}
        style={{ height: `${clampedValue}%` }}
      />
    </div>
  )
}
