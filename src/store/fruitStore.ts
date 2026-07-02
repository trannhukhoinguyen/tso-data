import { map } from 'nanostores';
// Import trực tiếp cấu hình mảng trái cây từ JSON
import rawFruitsData from '../data/events/fruits.json';

export interface FruitData {
    [key: string]: string;
}

// TỰ ĐỘNG DỰNG INITIAL VALUES TỪ FILE JSON
// Quét mảng trong file JSON để biến thành Object: { Durian: '0', Dragon_fruit: '0', ... }
const initialValues: FruitData = {};
rawFruitsData.forEach(fruit => {
    initialValues[fruit.id] = '0';
});

// Hàm bổ trợ đọc dữ liệu ban đầu an toàn từ localStorage (Tránh lỗi SSR)
function getSavedFruits(): FruitData {
    if (typeof window === 'undefined') return initialValues;

    const loadedData: FruitData = {};
    Object.keys(initialValues).forEach(id => {
        loadedData[id] = localStorage.getItem(`fruit_count_${id}`) || '0';
    });
    return loadedData;
}

// Khởi tạo Nano Store dạng map
export const fruitStore = map<FruitData>(getSavedFruits());

//--- CÁC ACTIONS ĐIỀU KHIỂN ---

// Cập nhật số lượng của 1 loại quả cụ thể
export function updateFruitCount(id: string, value: string) {
    let safeValue = value;
    if (parseInt(value) < 0 || !value) safeValue = '0';

    fruitStore.setKey(id, safeValue);
    localStorage.setItem(`fruit_count_${id}`, safeValue);
}

// Reset toàn bộ số lượng về 0 dựa theo danh sách JSON
export function resetAllFruits() {
    Object.keys(initialValues).forEach(id => {
        fruitStore.setKey(id, '0');
        localStorage.setItem(`fruit_count_${id}`, '0');
    });
}

// Nhập dữ liệu hàng loạt từ file JSON ngoài
export function importFruitData(jsonData: FruitData) {
    Object.keys(initialValues).forEach(id => {
        if (jsonData[id] !== undefined) {
            const val = jsonData[id].toString();
            fruitStore.setKey(id, val);
            localStorage.setItem(`fruit_count_${id}`, val);
        }
    });
}
