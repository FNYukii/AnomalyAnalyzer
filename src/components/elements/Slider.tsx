import clsx from 'clsx'

type Props = {
  value: number
  className?: string
}

export const Slider = (props: Props) => {
  // 割合を0〜100%の範囲内に安全に収める
  const clampedValue = Math.min(100, Math.max(0, props.value))

  return (
    <div
      className={clsx(
        'w-3 h-full',
        'flex flex-col justify-end',
        'bg-primary/20 border-y-2 border-primary',
        props.className,
      )}
    >
      <div
        className={clsx(
          'w-full',
          'bg-primary/40',
          'transition-all duration-150 ease-out',
        )}
        style={{ height: `${clampedValue}%` }}
      />
    </div>
  )
}
