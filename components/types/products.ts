export type Product = {
	id: number;
	title: string;
	slug: string;
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
