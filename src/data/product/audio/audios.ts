export interface Audio {
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

export const audios: Audio[] = [
    {
        id: "2",
        name: "Sony WH-1000XM5",
        title: "Sony WH-1000XM5",
        price: 399,
        description: "Industry-leading noise cancellation, exceptional sound quality, and crystal-clear hands-free calling. The WH-1000XM5 headphones rewrite the rules for distraction-free listening and ultra-clear call quality.",
        category: "Audio",
        stock: 12,
        images: [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "sony-wh-1000xm5",
        badge: "Bestseller",
        discount: 10,
        specs: [
            { label: "Battery Life", value: "Up to 30 hours" },
            { label: "Noise Cancelling", value: "Industry Leading" },
            { label: "Bluetooth", value: "v5.2" },
            { label: "Weight", value: "250g" }
        ]
    },
    {
        id: "12",
        name: "AirPods Max",
        title: "AirPods Max",
        price: 549,
        description: "A perfect balance of exhilarating high-fidelity audio and the effortless magic of AirPods.",
        category: "Audio",
        stock: 10,
        images: [
            "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&w=800&q=80"
        ],
        slug: "airpods-max",
        badge: "Premium Audio",
        specs: [
            { label: "Driver", value: "Dynamic" },
            { label: "ANC", value: "Active" },
            { label: "Spatial", value: "Head Tracking" }
        ]
    },
    {
        id: "13",
        name: "Bose QuietComfort Ultra",
        title: "Bose QuietComfort Ultra",
        price: 429,
        description: "World-class noise cancellation, quieter than ever before. Breakthrough spatial audio for more immersive listening.",
        category: "Audio",
        stock: 18,
        images: [
            "https://m.media-amazon.com/images/I/51ZR4lyxBHL.jpg",
        ],
        slug: "bose-qc-ultra",
        specs: [
            { label: "Battery", value: "24 Hours" },
            { label: "Modes", value: "Quiet/Aware" },
            { label: "Comfort", value: "Plush" }
        ]
    },
    {
        id: "14",
        name: "Sonos Era 100",
        title: "Sonos Era 100",
        price: 249,
        description: "Next-gen acoustics and new levels of connectivity transform any room with the finely tuned stereo sound and rich bass.",
        category: "Audio",
        stock: 22,
        images: [
            "https://culturageek.com.ar/wp-content/uploads/2024/12/566898-Era-100-Pro_Mount-Ceiling_Black-309023-original-1733603775_11zon.webp",
        ],
        slug: "sonos-era-100",
        specs: [
            { label: "Type", value: "Smart Speaker" },
            { label: "Voice", value: "Alexa Built-in" },
            { label: "Connect", value: "WiFi/BT" }
        ]
    },
];
