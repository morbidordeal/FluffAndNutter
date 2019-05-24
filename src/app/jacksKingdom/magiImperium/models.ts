import { MagiType, ItemType } from './enums';

export class Player {
    name: string;
    magiType: MagiType;
    maxHp: number;
    hp: number;
    maxMp: number;
    mp: number;
    intelligence: number;
    spirit: number;
    src: string;
    faceSrc: string;
    gold: number;
    inventory: Item[];
}

export class ShopKeeper {
    name: string;
    greeting: string;
    goodbye: string;
    items: Item[];
    src: string;
    textColor: string;
}

export class Item {
    name: string;
    cost: number;
    itemType: ItemType;
    src: string;
    description: string;
    consumeEffect: any;
    equipEffect: any;
}