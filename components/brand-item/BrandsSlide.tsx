import BrandItem from "./BrandItem"

const BrandsSlide = ({ brands }: any) => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>{brands.map((brand: any, index: number) => <BrandItem key={index} imgSrc={brand.imgSrc} />)}</div>
  )
}

export default BrandsSlide