import { FC, useState } from "react";
import styles from './catalog-menu-content.module.scss';
import Image from "next/image";
import { Category } from "@/components/types/category";

interface ICatalogChildElementProps {
    children: any;
}

const CatalogChildElement: FC<ICatalogChildElementProps> = ({ children }) => {

    const [childs, setChilds] = useState(children.slice(0, 3));
    const [showAll, setShowAll] = useState<boolean>(false);

    const handleViewMore = () => {
        setShowAll(true);
        setChilds(children);
    }

    const handleHideMore = () => {
        setShowAll(false);
        setChilds(children.slice(0, 3));
    }

    return (
        <div>
            <ul className={styles.catalogMenuContent__childrens}>
                {childs.map((childCategory: Category, index: number) => (
                    <li key={index} className={styles.catalogMenuContent__children}>{childCategory.name}</li> /* Link */
                ))}
            </ul>
            {children?.length > 3 && !showAll ? (
                <div className={styles.catalogMenuContent__more} onClick={handleViewMore}>
                    <p className={styles.catalogMenuContent__more_text}>Показать больше</p>
                    <Image src='/arrow-down.svg' alt="" width={16} height={16} />
                </div>
            ) : children?.length > 3 && showAll ? (
                <div className={styles.catalogMenuContent__more} onClick={handleHideMore}>
                    <p className={styles.catalogMenuContent__more_text}>Скрыть</p>
                    <Image src='/arrow-down.svg' alt="" width={16} height={16} />
                </div>
            ) : null}
        </div>
    )
}

export default CatalogChildElement;