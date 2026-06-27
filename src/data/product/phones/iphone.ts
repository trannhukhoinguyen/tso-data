export interface Product {
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

export const products: Product[] = [
    {
        id: "3",
        name: "iPhone 15 Pro Max",
        title: "iPhone 15 Pro Max",
        price: 1199,
        description: "Forged in titanium. Featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever. Experience the next level of mobile technology.",
        category: "Phones",
        subcategory: "iphone",
        stock: 0,
        images: [
            "https://i.blogs.es/f15f0b/img_2033/650_1200.jpeg",
            "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "iphone-15-pro-max",
        badge: "New Arrival",
        discount: 0,
        specs: [
            { label: "Chip", value: "A17 Pro" },
            { label: "Camera", value: "48MP Main" },
            { label: "Material", value: "Titanium" },
            { label: "Size", value: "6.7-inch" }
        ]
    },
    {
        id: "11",
        name: "iPhone 14",
        title: "iPhone 14",
        price: 699,
        description: "A total powerhouse. Impressive battery life, durable build, and a camera system that takes stunning photos in any light.",
        category: "Phones",
        subcategory: "iphone",
        stock: 30,
        images: [
            "https://images.unsplash.com/photo-1678652197831-2d180705cd2c?auto=format&fit=crop&w=800&q=80",
        ],
        slug: "iphone-14",
        specs: [
            { label: "Chip", value: "A15 Bionic" },
            { label: "Screen", value: "6.1 Super Retina" },
            { label: "Safety", value: "Crash Detection" }
        ]
    },
];
