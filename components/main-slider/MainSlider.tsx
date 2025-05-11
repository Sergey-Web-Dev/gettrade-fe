import { FC } from "react"
import ImagesSlider from "../images-slider/ImagesSlider"
import { ImagesSliderItemType } from "../types/imagesSlider"

interface IMainSliderProps {
  images: ImagesSliderItemType[]
}

const MainSlider: FC<IMainSliderProps> = ({ images }) => {
  return (
    <div className="container" style={{ padding: '48px 0' }}>
      <ImagesSlider images={images} width='100%' height='520px' />
    </div>
  )
}

export default MainSlider