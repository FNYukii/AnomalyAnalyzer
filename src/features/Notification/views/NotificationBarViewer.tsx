import { useEffect, useState } from 'react'

import { makeRandomNum } from '../../common/utils/number'
import { NotificationBar } from '../parts/NotificationBar'

const VISIBLE_MS = 5000

export const NotificationBarViewer = () => {
  const [isShow, setIsShow] = useState(false)

  // isShowが変わるたびに次の変化タイマーをセット
  useEffect(() => {
    const delay = isShow ? VISIBLE_MS : makeRandomNum(10000, 60001) //10秒 ~ 60秒

    const timeoutId = setTimeout(() => {
      setIsShow((prev) => !prev)
    }, delay)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [isShow])

  return isShow ? <NotificationBar /> : null
}
