import { FC } from "react";
import styles from './switcher.module.scss';
import Image from "next/image";

interface ISwitcherData {
    id: number;
    title: string;
    subtitle?: string;
    price?: string;
    time?: string;
    img?: string;
}

interface ISwitcher {
    data: ISwitcherData[];
    active: any;
    type: 'default' | 'multi'
    onClickFn: (switchItem: any) => void;
}

const Switcher: FC<ISwitcher> = ({ data, active, type, onClickFn }) => {
    return (
        <ul className={styles.switcher}>
            {data && data.map((switchItem) => (
                <li
                    key={switchItem.id}
                    onClick={() => onClickFn(switchItem)}
                    className={active.id === switchItem.id ? styles.switcher__switch_active : styles.switcher__switch}
                >
                    <input type="radio" checked={active.id === switchItem.id} readOnly />
                    {switchItem.img ? <Image src={switchItem.img} alt='' width={24} height={24} /> : null}
                    <div className={styles.switcher__content}>
                        {type === 'default' ? (
                            <p className={styles.switcher__title}>{switchItem.title}</p>
                        ) : (
                            <>
                                <div className={styles.switcher__left}>
                                    <p className={styles.switcher__title}>{switchItem.title}</p>
                                    <p className={styles.switcher__subtitle}>{switchItem.subtitle}</p>
                                </div>
                                <div className={styles.switcher__right}>
                                    <p className={styles.switcher__price}>{switchItem.price}</p>
                                    <p className={styles.switcher__subtitle}>{switchItem.time}</p>
                                </div>
                            </>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Switcher;