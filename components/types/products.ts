export type Product = {
	title: string;
	imgSrc: string;
	originalPrice: number;
	discountedPrice?: number;
	discount?: number;
	isBestseller: boolean;
	reviews: {
		rating: number;
		amount: number;
	};
};
