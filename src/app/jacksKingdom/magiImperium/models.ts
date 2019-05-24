import { MagiType, ItemType } from './enums';

export class Player {
    name: string;
    magiType: MagiType;
    hp: number;
    mp: number;
    intelligence: number;
    spirit: number;
    src: string;
    faceSrc: string;
    gold: number;
}

export class ShopKeeper {
    name: string;
    greeting: string;
    goodbye: string;
    items: ShopItem[];
    src: string;
}

export class ShopItem {
    name: string;
    cost: number;
    itemType: ItemType;
    src: string;
}