import React from 'react';
import Image from 'next/image';

export type FavoriteButtonProps = {
    src: string;
    fillSrc?: string;
    className?: string;
    size?: {
        width: number;
        height: number;
    };
    alt?: string;
    onClick?: (el: any) => void;
    isActive?: boolean;
};

export function ItemButton({
                               src = 'favourites.svg',
                               fillSrc,
                                   size = { width: 20, height: 18 },
                                   alt = 'Добавить в избранное',
    className,onClick, isActive = false,
                               }: FavoriteButtonProps) {
    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
        >
            <Image src={isActive ? `/${fillSrc}` : `/${src}`}  width={size.width} height={size.height} alt={alt} />
        </button>
    );
}

export default ItemButton;
