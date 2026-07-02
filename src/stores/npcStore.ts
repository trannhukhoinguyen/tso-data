import { atom, computed } from 'nanostores';
import { persistentAtom } from '@nanostores/persistent';

export interface MyNpc {
    id: string;
    name: string;
    price: number;
    image: string;
    stock: number;
    slug: string;
}

export const myNpcs = persistentAtom<MyNpc[]>('my_npc', [], {
    encode: JSON.stringify,
    decode: JSON.parse,
});

export function addToMyNpcs(npc: MyNpc) {
    const items = myNpcs.get();
    const existingItem = items.find((item) => item.id === npc.id);

    if (!existingItem) {
        myNpcs.set([...items, npc]);
        return { success: true, message: `${npc.name} added to favorites` };
    }
    return { success: false, message: `${npc.name} is already in favorites` }; // Should not happen if we toggle
}

export function removeFromMyNpcs(npcId: string) {
    const items = myNpcs.get();
    const itemToRemove = items.find(item => item.id === npcId);
    myNpcs.set(items.filter((item) => item.id !== npcId));
    return { success: true, message: `${itemToRemove?.name || 'Product'} removed from favorites` };
}

export function toggleMyNpc(npc: MyNpc) {
    const items = myNpcs.get();
    const exists = items.some((item) => item.id === npc.id);

    if (exists) {
        return removeFromMyNpcs(npc.id);
    } else {
        return addToMyNpcs(npc);
    }
}

export function isMyNpc(npcId: string) {
    const items = myNpcs.get();
    return items.some((item) => item.id === npcId);
}

export const totalMyNpcs = computed(myNpcs, (items) => items.length);
