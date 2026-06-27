export interface Keyboard {
    id: string;
    name: string;
    title: string; // compatibility with home.ts
    price: number;
    description: string;
    category: string;
    subcategory?: string;
    stock: number;
    images: string[];
    slug: string;
    badge?: string;
    discount?: number;
    specs?: { label: string; value: string }[];
}

export const keyboards: Keyboard[] = [
    {
        id: "15",
        name: "Keychron Q1 Pro",
        title: "Keychron Q1 Pro",
        price: 199,
        description: "A fully customizable mechanical keyboard with QMK/VIA support and a premium aluminum body.",
        category: "Computers",
        subcategory: "keyboards",
        stock: 30,
        images: [
            "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
            "https://i.ytimg.com/vi/URjj7-QghHs/maxresdefault.jpg"
        ],
        slug: "keychron-q1-pro",
        badge: "Mechanical",
        specs: [
            { label: "Layout", value: "75%" },
            { label: "Body", value: "Aluminum" },
            { label: "Switch", value: "Hot-swappable" }
        ]
    },
];

