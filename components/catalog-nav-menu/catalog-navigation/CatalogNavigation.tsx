import { FC } from "react";
import styles from './catalog-navigation.module.scss';
import { CATALOG_DATA } from "../catalog-data";
import Image from "next/image";
import { Category } from "@/components/types/category";

interface ICatalogNavigationProps {
    activeCategory: Category | any;
    setActiveCategory: (activeCategory: Category | any) => void;
}

const CatalogNavigation: FC<ICatalogNavigationProps> = ({ activeCategory, setActiveCategory }) => {

    return (
        <div className={styles.catalogNavigation}>
            <div className={styles.catalogNavigation__categories}>
                <ul className={styles.catalogNavigation__list}>
                    {CATALOG_DATA && CATALOG_DATA.map((category, index: number) => (
                        <li
                            className={`${styles.catalogNavigation__category} ${activeCategory.name === category.name ? styles.catalogNavigation__category_active : ''}`} 
                            key={index} 
                            onMouseOver={() => setActiveCategory(category)}
                        >
                            <Image src="/category-icon.svg" alt="" width={18} height={18} />
                            <p className={styles.catalogNavigation__category_name}>{category.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CatalogNavigation;