import React from 'react';
import Image from 'next/image';

export type FavoriteButtonProps = {
    src: string;
    className?: string;
    size?: {
        width: number;
        height: number;
    };
    alt?: string;
};

export function ItemButton({
                               src = 'favourites.svg',
                                   size = { width: 20, height: 18 },
                                   alt = 'Добавить в избранное',
    className,
                               }: FavoriteButtonProps) {
    return (
        <button
            type="button"
            className={className}
        >
            <Image src={`/${src}`} width={size.width} height={size.height} alt={alt} />
        </button>
    );
}

export default ItemButton;
