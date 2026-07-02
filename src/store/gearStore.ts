import { atom, computed } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export interface MyGear {
    id: string;
    name: string;
    price: number;
    image: string;
    stock: number;
    slug: string;
}

export const myGears = persistentAtom<MyGear[]>('my_gears', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export function addToMyGears(gear: MyGear) {
    const items = myGears.get();
    const existingItem = items.find((item) => item.id === gear.id);

    if (!existingItem) {
        myGears.set([...items, gear]);
        return { success: true, message: `${gear.name} added to favorites` };
    }
    return { success: false, message: `${gear.name} is already in favorites` }; // Should not happen if we toggle
}

export function removeFromMyGears(gearId: string) {
    const items = myGears.get();
    const itemToRemove = items.find(item => item.id === gearId);
    myGears.set(items.filter((item) => item.id !== gearId));
    return { success: true, message: `${itemToRemove?.name || 'Product'} removed from favorites` };
}

export function toggleMyGear(gear: MyGear) {
    const items = myGears.get();
    const exists = items.some((item) => item.id === gear.id);

    if (exists) {
        return removeFromMyGears(gear.id);
    } else {
        return addToMyGears(gear);
    }
}

export function isMyGear(gearId: string) {
    const items = myGears.get();
    return items.some((item) => item.id === gearId);
}

export const totalMyGears = computed(myGears, (items) => items.length);
