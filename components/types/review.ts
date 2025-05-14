export type Review = {
	id: number;
	rate: number;
    attaches: any[];
    person: {
        name: string;
        avatar: string;
    },
    comment: string;
    advantages: string;
    disadvantages: string;
};
