import { AREA_TYPES } from '../constants'

import { pickRandomItem } from './array'
import { makeRandomNum } from './number'

export const makeAreaName = (): string => {
  const areaType = pickRandomItem(AREA_TYPES)
  const areaNumber = makeRandomNum(1, 100)
  return `${areaType} ${areaNumber}`
}
