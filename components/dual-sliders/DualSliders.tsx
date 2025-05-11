import { FC } from "react"
import { ImagesSliderItemType } from "../types/imagesSlider"
import ImagesSlider from "../images-slider/ImagesSlider"
import styles from './dual-sliders.module.scss';

interface IDualSlidersProps {
  slider1Images: ImagesSliderItemType[],
  slider2Images: ImagesSliderItemType[],
}

const DualSliders: FC<IDualSlidersProps> = ({ slider1Images, slider2Images }) => {
  return (
    <div className={`container ${styles['dual-slider']}`}>
      <ImagesSlider images={slider1Images} width='50%' height="380px" />
      <ImagesSlider images={slider2Images} width='50%' height="380px" />
    </div>
  )
}

export default DualSliders