import Image from "next/image"
import { FC } from "react"

interface IBrandItemProps {
  imgSrc: string
}

const BrandItem: FC<IBrandItemProps> = ({ imgSrc }) => {
  return (
    <Image src={imgSrc} width={250} height={134} alt="" />
  )
}

export default BrandItem