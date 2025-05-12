type SubCategory = {
    name: string;
	subCategories?: SubCategory;
}

export type Category = {
	name: string;
	subCategories?: SubCategory
};