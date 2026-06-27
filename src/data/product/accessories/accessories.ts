export interface Accessories {
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

export const accessories: Accessories[] = [
    {
        id: "4",
        name: "Logitech MX Master 3S",
        title: "Logitech MX Master 3S",
        price: 99,
        description: "An icon, remastered. Meet MX Master 3S – an iconic mouse remastered for ultimate tactility, performance, and flow. Feel every moment of your workflow with even more precision, tactility, and performance.",
        category: "Accessories",
        stock: 50,
        images: [
            "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80",
            "https://www.mastecnologia.com.ar/images/productos/17101.png"
        ],
        slug: "logitech-mx-master-3s",
        badge: "Essential",
        discount: 0,
        specs: [
            { label: "DPI", value: "8000" },
            { label: "Buttons", value: "7 Programmable" },
            { label: "Battery", value: "Rechargeable" },
            { label: "Connectivity", value: "Logi Bolt / BT" }
        ]
    },
    {
        id: "16",
        name: "Apple Magic Trackpad",
        title: "Apple Magic Trackpad",
        price: 129,
        description: "Wireless and rechargeable, it includes the full range of Multi-Touch gestures and Force Touch technology.",
        category: "Accessories",
        stock: 40,
        images: [
            "https://images.unsplash.com/photo-1522204538344-922f76ecc041?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "magic-trackpad",
        specs: [
            { label: "Surface", value: "Glass" },
            { label: "Connect", value: "Bluetooth" },
            { label: "Color", value: "White/Black" }
        ]
    },
    {
        id: "17",
        name: "Samsung T7 Shield 2TB",
        title: "Samsung T7 Shield 2TB",
        price: 159,
        description: "Rugged durability. Fast speeds. The T7 Shield gives you superior performance on the go, even in challenging environmental conditions.",
        category: "Accessories",
        stock: 100,
        images: [
            "https://http2.mlstatic.com/D_NQ_NP_646728-CBT96610611509_102025-O.webp",
        ],
        slug: "samsung-t7-shield",
        specs: [
            { label: "Speed", value: "1000MB/s" },
            { label: "Rating", value: "IP65" },
            { label: "Port", value: "USB-C" }
        ]
    },
    {
        id: "19",
        name: "Fujifilm X100V",
        title: "Fujifilm X100V",
        price: 1399,
        description: "The fifth iteration in Fujifilm's X100 series, blending classic dial-based design with the most advanced mobile technology.",
        category: "Accessories",
        stock: 3,
        images: [
            "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
        ],
        slug: "fujifilm-x100v",
        badge: "Limited",
        specs: [
            { label: "Sensor", value: "APS-C" },
            { label: "Lens", value: "23mm F2" },
            { label: "Video", value: "4K" }
        ]
    },
];
