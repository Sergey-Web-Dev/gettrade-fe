import { FC, useState } from "react";
import styles from './catalog-menu.module.scss';
import { CATALOG_DATA } from "./catalog-data";
import CatalogMenuContent from "./catalog-menu-content/CatalogMenuContent";
import CatalogNavigation from "./catalog-navigation/CatalogNavigation";

interface ICatalogNavMenuProps {}

const CatalogNavMenu: FC<ICatalogNavMenuProps> = ({  }) => {

    const [activeCategory, setActiveCategory] = useState(CATALOG_DATA[0]);

    return (
        <div className={styles.catalogMenu}>
            <div className={styles.catalogMenu__container}>
                <CatalogNavigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <CatalogMenuContent categoryName={activeCategory.name} categoryList={activeCategory.subCategories} />
            </div>
        </div>
    )
}

export default CatalogNavMenu;