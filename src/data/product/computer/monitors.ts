export interface Monitor {
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

export const monitors: Monitor[] = [
    {
        id: "18",
        name: "Dell UltraSharp 27",
        title: "Dell UltraSharp 27",
        price: 499,
        description: "Experience captivating details and true-to-life color on this 27-inch QHD monitor with InfinityEdge.",
        category: "Computers",
        subcategory: "monitors",
        stock: 12,
        images: [
            "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80",
        ],
        slug: "dell-ultrasharp-27",
        specs: [
            { label: "Res", value: "2560x1440" },
            { label: "Panel", value: "IPS" },
            { label: "Ports", value: "USB-C Hub" }
        ]
    },
    {
        id: "20",
        name: "LG C3 OLED 42",
        title: "LG C3 OLED 42",
        price: 899,
        description: "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6.",
        category: "Computers",
        subcategory: "monitors",
        stock: 6,
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80",

        ],
        slug: "lg-c3-oled-42",
        badge: "Display",
        specs: [
            { label: "Type", value: "OLED" },
            { label: "Refresh", value: "120Hz" },
            { label: "HDR", value: "Dolby Vision" }
        ]
    }
];

