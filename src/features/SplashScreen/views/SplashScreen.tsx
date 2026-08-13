import clsx from 'clsx'

import { TypingText } from '../../common/elements/TypingText'

type Props = {
  className?: string
}

export const SplashScreen = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        'size-full',
        'bg-black',
        'flex justify-center items-center',
        className,
      )}
    >
      <section
        className={clsx('pb-20', 'flex flex-col items-center', 'italic')}
      >
        <TypingText text="A.A.M.S." className="text-5xl" />

        <TypingText
          text="The Anomaly Analysis and Monitoring System"
          intervalDelay={10}
          className="mt-1"
        />
      </section>
    </div>
  )
}
