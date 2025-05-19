import { FC, useState } from "react";
import styles from './catalog-menu.module.scss';
import { CATALOG_DATA } from "./catalog-data";
import CatalogMenuContent from "./catalog-menu-content/CatalogMenuContent";
import CatalogNavigation from "./catalog-navigation/CatalogNavigation";
import {Banner} from "@/components/types/banner";
import BannerCard from "@/components/banner-card/BannerCard";

interface ICatalogNavMenuProps {}


const BANNERS: Banner[] = [
    {id: 1, title: 'Гарнитура Cooler Master CH331 USB', imgSrc: '/img_for_banner.png'},
    {id: 2, title: 'Гарнитура Cooler Master CH331 USB', imgSrc: '/img_for_banner.png'},
    {id: 3, title: 'Гарнитура Cooler Master CH331 USB', imgSrc: '/img_for_banner.png'},
    {id: 4, title: 'Гарнитура Cooler Master CH331 USB', imgSrc: '/img_for_banner.png'},
]

const CatalogNavMenu: FC<ICatalogNavMenuProps> = ({  }) => {

    const [activeCategory, setActiveCategory] = useState(CATALOG_DATA[0]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.catalogMenu}>
                <div className={styles.catalogMenu__container}>
                    <CatalogNavigation activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                    <CatalogMenuContent categoryName={activeCategory.name} categoryList={activeCategory.subCategories} />
                </div>
            </div>
            <div className={styles.banner}>
                {BANNERS.map((banner) => <BannerCard key={banner.id} banner={banner}/>)}
            </div>
        </div>

    )
}

export default CatalogNavMenu;