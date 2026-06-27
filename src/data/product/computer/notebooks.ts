export interface Notebook {
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

export const notebooks: Notebook[] = [
    {
        id: "1",
        name: "MacBook Pro 16 M3 Max",
        title: "MacBook Pro 16 M3 Max",
        price: 3499,
        description: "The most powerful MacBook Pro ever. With the lightning-fast M3 Max chip, advanced thermal architecture, and a stunning Liquid Retina XDR display, it's designed for those who demand the absolute best in performance and portability.",
        category: "Computers",
        subcategory: "notebooks",
        stock: 5,
        images: [
            "https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "macbook-pro-16-m3-max",
        badge: "Premium",
        discount: 5,
        specs: [
            { label: "Processor", value: "Apple M3 Max" },
            { label: "Memory", value: "32GB Unified" },
            { label: "Storage", value: "1TB SSD" },
            { label: "Display", value: "16.2-inch XDR" }
        ]
    },
    {
        id: "5",
        name: "iPad Pro M2",
        title: "iPad Pro M2",
        price: 799,
        description: "Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil features. Powerful new features in iPadOS. The ultimate iPad experience.",
        category: "Computers",
        subcategory: "notebooks",
        stock: 15,
        images: [
            "https://i.guim.co.uk/img/media/23b25aa93e573bc0b016c0e6e9233bc51da92c54/0_240_5261_3156/master/5261.jpg?width=1200&quality=85&auto=format&fit=max&s=5f0115e164644ebfdbc3c86ee86c163b",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQonjUvhTVx33qjjjCrRp68MDRAlt_1uqA9YA&s"
        ],
        slug: "ipad-pro-m2",
        badge: "Pro",
        discount: 0,
        specs: [
            { label: "Chip", value: "Apple M2" },
            { label: "Display", value: "Liquid Retina" },
            { label: "Camera", value: "12MP Ultra Wide" },
            { label: "Storage", value: "256GB" }
        ]
    },
    {
        id: "6",
        name: "Dell XPS 15",
        title: "Dell XPS 15",
        price: 1899,
        description: "High-performance laptop with a stunning 4K OLED display and premium build quality.",
        category: "Computers",
        subcategory: "notebooks",
        stock: 10,
        images: [
            "https://images-cdn.ubuy.qa/634ea45745ed0860dc58d75b-dell-xps-15-9510-laptop-2021.jpg",
        ],
        slug: "dell-xps-15",
        specs: [
            { label: "Processor", value: "Intel i9" },
            { label: "RAM", value: "32GB" },
            { label: "Screen", value: "15.6 OLED" }
        ]
    },
    {
        id: "7",
        name: "MacBook Air 15",
        title: "MacBook Air 15",
        price: 1299,
        description: "Impossibly thin and incredibly fast. The 15-inch MacBook Air gives you more room for what you love with a spacious Liquid Retina display.",
        category: "Computers",
        subcategory: "notebooks",
        stock: 25,
        images: [
            "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "macbook-air-15",
        badge: "New",
        specs: [
            { label: "Chip", value: "M2" },
            { label: "Battery", value: "18 Hours" },
            { label: "Weight", value: "3.3 lbs" }
        ]
    },
    {
        id: "8",
        name: "ASUS ROG Zephyrus G14",
        title: "ASUS ROG Zephyrus G14",
        price: 1499,
        description: "Powerful gaming in a compact chassis. Features the latest Ryzen processors and RTX graphics for gaming on the go.",
        category: "Computers",
        subcategory: "notebooks",
        stock: 8,
        images: [
            "https://www.cnet.com/a/img/resize/69c350f19a0bd245ab8f60a98e456fa9dc67ee42/hub/2024/02/05/e716f8f8-a7a4-418c-9b14-0b210d9dfc72/asus-rog-zephyrus-g14-2024-5409.jpg?auto=webp&fit=crop&height=1200&width=1200",
        ],
        slug: "asus-rog-zephyrus-g14",
        badge: "Gaming",
        specs: [
            { label: "GPU", value: "RTX 4060" },
            { label: "CPU", value: "Ryzen 9" },
            { label: "Screen", value: "120Hz" }
        ]
    },
];

