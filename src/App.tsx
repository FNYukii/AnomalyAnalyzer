import { useEffect, useState } from 'react'
import clsx from 'clsx'

import { SplashScreen } from './features/SplashScreen/views/SplashScreen'
import { MainScreen } from './MainScreen'

/**
 * ルートコンポーネント
 *
 * アプリ全体へのTailwindCSSクラス付与, スプラッシュ画面/本画面 の制御 を担当
 */
export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true)
    }, 1200)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div
      className={clsx(
        'w-full h-screen',
        'text-primary selection:bg-primary/30 uppercase',
      )}
    >
      {!isLoaded ? <SplashScreen /> : <MainScreen />}
    </div>
  )
}
