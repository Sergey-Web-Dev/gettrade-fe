export type Product = {
	id: string;
	name: string;
	description: string;
	article: string;
	image: string;
	price: number;
	discount?: number;
	quantityAvailable?: number;
	bonuses?: number;
	isBestseller: boolean;
	isChecked: boolean;
	rating: number;
	reviewAmount: number;

};
