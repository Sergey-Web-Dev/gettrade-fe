'use client';
import { FC } from "react";
import Image from "next/image";
import ActionButton from "../action-button/ActionButton";
import styles from './banner.module.scss';
import {Banner} from "@/components/types/banner";

interface IProductItemProps {
    banner: Banner,
}

const BannerCard: FC<IProductItemProps> = ({ banner }) => {
    const { title, imgSrc  } = banner
    return (
        <div className={styles['banner']} style={{ backgroundImage: `url(${imgSrc})`, objectFit: 'cover' }}>
            <div className={styles['banner__info']}>
                <h4 className={styles['banner__info__title']}>{title}</h4>
            </div>
            <ActionButton text='КУПИТЬ' onClick={() => console.log('купить')} type="small-blue" />
        </div>
    )
}

export default BannerCard;