import { map } from 'nanostores';
import { supabase } from '../lib/supabase';
import rawFruitsData from '../data/events/fruits.json';

export interface FruitData {
    [key: string]: string;
}

// 1. Dựng giá trị ban đầu trống từ file JSON cấu hình
const initialValues: FruitData = {};
rawFruitsData.forEach(fruit => {
    initialValues[fruit.id] = '0';
});

// Khởi tạo Nano Store dạng map
export const fruitStore = map<FruitData>(initialValues);

//--- CÁC ACTIONS ĐỒNG BỘ ĐÁM MÂY (CLOUD) ---

// 2. Hàm tải dữ liệu tự động từ Supabase khi mở thiết bị lên
export async function loadDataFromCloud() {
    try {
        const { data, error } = await supabase
            .from('fruit_event')
            .select('fruit_id, quantity');

        if (error) throw error;

        if (data && data.length > 0) {
            const cloudData: FruitData = { ...initialValues };
            data.forEach(row => {
                cloudData[row.fruit_id] = row.quantity.toString();
            });
            // Cập nhật trạng thái Store -> UI tự động đổi màu xanh đỏ lập tức
            fruitStore.set(cloudData);
        }
    } catch (err) {
        console.error("Lỗi khi tải data từ Supabase:", err);
    }
}

// 3. Hàm cập nhật số lượng và tự đồng bộ lên Supabase ngầm
export async function updateFruitCount(id: string, value: string) {
    let safeValue = value;
    if (parseInt(value) < 0 || !value) safeValue = '0';

    // Cập nhật Local UI trước để tạo cảm giác mượt mà tức thì (Optimistic UI)
    fruitStore.setKey(id, safeValue);

    // Gửi ngầm dữ liệu lên Supabase đám mây
    const { error } = await supabase
        .from('fruit_event')
        .upsert(
            { fruit_id: id, quantity: parseInt(safeValue) },
            { onConflict: 'fruit_id' } // Đảm bảo trùng fruit_id sẽ ghi đè thay vì tạo dòng mới
        );

    if (error) console.error("Lỗi đồng bộ Supabase:", error);
}

// 4. Reset toàn bộ dữ liệu về 0 trên cả Cloud
export async function resetAllFruits() {
    // Reset UI về 0 trước
    fruitStore.set({ ...initialValues });

    // Cập nhật đồng loạt trên Supabase
    const upsertData = Object.keys(initialValues).map(id => ({
        fruit_id: id,
        quantity: 0
    }));

    const { error } = await supabase
        .from('fruit_event')
        .upsert(upsertData, { onConflict: 'fruit_id' });

    if (error) console.error("Lỗi khi reset trên Cloud:", error);
}
