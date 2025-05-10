import { FC } from "react"
import { Product } from "../types/products"
import ProductItem from "../product-item/ProductItem"
import styles from './bestsellers.module.scss';

interface IBestsellersProps {
  bestsellers: Product[]
}

const Bestsellers: FC<IBestsellersProps> = ({ bestsellers }) => {
  return (
    <main className={`container ${styles.bestsellers}`}>
      <h2 className={`h2-header ${styles.bestsellers__header}`}>Хиты продаж</h2>
      <div className={`h2-header ${styles.bestsellers__items}`}>
        {bestsellers.map((bestseller, index) => <ProductItem key={index} product={bestseller} />)}
      </div>
    </main>
  )
}

export default Bestsellers