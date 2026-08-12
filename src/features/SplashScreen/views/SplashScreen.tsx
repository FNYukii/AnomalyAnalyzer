import clsx from 'clsx'

import { TypingText } from '../../common/elements/TypingText'

type Props = {
  className?: string
}

export const SplashScreen = ({ className }: Props) => {
  return (
    <div
      className={clsx(
        'bg-black',
        'flex justify-center items-center',
        className,
      )}
    >
      <section className="text-center pb-20">
        <TypingText text="A.A.M.S" className="text-5xl italic inline" />

        <TypingText
          text="The Anomaly Analysis and Monitoring System"
          intervalDelay={10}
          className="mt-1 normal-case-"
        />
      </section>
    </div>
  )
}
