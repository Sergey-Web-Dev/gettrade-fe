import { FC } from "react";
import styles from './switcher.module.scss';
import Image from "next/image";
import { useField } from "formik";

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
    type: 'default' | 'multi'
    name: string;
}

const Switcher: FC<ISwitcher> = ({ data, type, name }) => {

    const [field, meta, helpers] = useField(name);
    const { setValue } = helpers;

    return (
        <ul className={styles.switcher}>
            {data && data.map((switchItem) => (
                <li
                    key={switchItem.id}
                    onClick={() => setValue(switchItem)}
                    className={field.value.id === switchItem.id ? styles.switcher__switch_active : styles.switcher__switch}
                >
                    <input type="radio" checked={field.value.id === switchItem.id} readOnly />
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