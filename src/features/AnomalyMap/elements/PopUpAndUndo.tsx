import { type ReactNode } from 'react'
import clsx from 'clsx'

type Props = {
  children: ReactNode
  highlightColor: 'primary' | 'accent'
}

export const PopUpAndUndo = ({ children, highlightColor }: Props) => {
  return (
    <div
      className={clsx(
        'inline-block',
        'animate-[popup_1.6s,highlight_1.6s] origin-bottom-left pr-[16px]',
      )}
      style={
        {
          '--highlight-color': `var(--color-${highlightColor})`,
        } as React.CSSProperties
      }
    >
      <style>{`
				{* 再生時間が1秒なら、0~0.2:等倍, 0.2~0.4:拡大, 0.4~0.8:待機, 0.8~1.0:縮小 *}
        @keyframes popup {
					0% { transform: scale(1); }
					20% { transform: scale(1); }
					40% { transform: scale(1.75); }
					80% { transform: scale(1.75); }
          100% { transform: scale(1); }
        }

        @keyframes highlight {
					0% { 
						background-color: transparent;
					}
					15% {
						background-color: transparent;
					}
					40% {
						background-color: var(--highlight-color);
						color: black;
						padding: 0px 8px;
					}
					85% {
						background-color: var(--highlight-color);
						color: black;
						padding: 0px 8px;
					}
          100% {
						background-color: transparent;
						padding-right: 16px;
					}
        }
      `}</style>

      {children}
    </div>
  )
}
