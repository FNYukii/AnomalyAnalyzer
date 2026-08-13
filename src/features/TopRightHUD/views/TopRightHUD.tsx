import { ClockSection } from '../parts/ClockSection'
import { LevelSection } from '../parts/LevelSection'
import { WeatherSection } from '../parts/WeatherSection'

export const TopRightHUD = () => {
  return (
    <div className="flex flex-col items-end">
      <ClockSection />
      <WeatherSection />
      <LevelSection />
    </div>
  )
}
