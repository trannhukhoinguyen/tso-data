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
        id: "9",
        name: "Samsung Galaxy S24 Ultra",
        title: "Samsung Galaxy S24 Ultra",
        price: 1299,
        description: "Unleash your creativity, productivity, and possibilities. With a built-in S Pen and the most powerful processor yet.",
        category: "Phones",
        subcategory: "android",
        stock: 20,
        images: [
            "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "samsung-galaxy-s24-ultra",
        badge: "AI Ready",
        specs: [
            { label: "Camera", value: "200MP" },
            { label: "Zoom", value: "100x" },
            { label: "Pen", value: "Included" }
        ]
    },
    {
        id: "10",
        name: "Google Pixel 8 Pro",
        title: "Google Pixel 8 Pro",
        price: 999,
        description: "The all-pro phone engineered by Google. It has a polished aluminum frame and matte back glass, and it comes in elegant colors.",
        category: "Phones",
        subcategory: "android",
        stock: 15,
        images: [
            "https://lh3.googleusercontent.com/22AC6Qcb5-4qN6QJTkBzGK2N5kS5AZyuss9AcAQzAuxjHqGz3VfI5-MSXsKDzuUuePoqHAmyAFyewt9CdNyw3oQikUDY7dTSmyDsVPo=rw-e365-w842-v1",
            "https://tecnopolis.com.bo/cdn/shop/files/8-PRO.png?v=1763581431"
        ],
        slug: "google-pixel-8-pro",
        badge: "Smartest",
        specs: [
            { label: "Chip", value: "Tensor G3" },
            { label: "OS", value: "Android 14" },
            { label: "AI", value: "Gemini Nano" }
        ]
    },
];
