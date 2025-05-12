import { FC } from "react";
import styles from './catalog-menu-content.module.scss';
import CatalogChildElement from "./CatalogChildElement";
import { Category } from "@/components/types/category";

interface ICatalogMenuContentProps {
    categoryName: string;
    categoryList: Category[] | any;
}

const CatalogMenuContent: FC<ICatalogMenuContentProps> = ({ categoryName, categoryList }) => {

    return (
        <div className={styles.catalogMenuContent}>
            <p className={styles.catalogMenuContent__name}>{categoryName}</p>
            <ul className={styles.catalogMenuContent__list}>
                {categoryList && categoryList.map((categoryChild: Category, index: number) => (
                    <li key={index} className={styles.catalogMenuContent__category}> {/* Link */}
                        {categoryChild.name}
                        {categoryChild.subCategories ? <CatalogChildElement children={categoryChild.subCategories} /> : null}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CatalogMenuContent;