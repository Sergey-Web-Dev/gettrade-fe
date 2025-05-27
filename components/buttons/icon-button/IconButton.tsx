import React from 'react';
import Image from 'next/image';
import styles from './icon-button.module.scss';

export type FavoriteButtonProps = {
    src: string;
    fillSrc?: string;
    size?: {
        width: number;
        height: number;
    };
    alt?: string;
    onClick?: (el: any) => void;
    isActive?: boolean;
    className?: any;
};

export function IconButton({
    src = 'favourites.svg',
    fillSrc,
    size = { width: 20, height: 18 },
    alt = 'Добавить в избранное',
    onClick,
    isActive = false,
    className
}: FavoriteButtonProps) {
    return (
        <button
            type="button"
            className={`${styles.iconButton} ${className ? className : ''}`}
            onClick={onClick}
        >
            <Image src={isActive ? `/${fillSrc}` : `/${src}`}  width={size.width} height={size.height} alt={alt} />
        </button>
    );
}

export default IconButton;
