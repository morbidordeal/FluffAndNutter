import { ShopKeeper, Item, Player } from './models';
import { ItemType, MagiType } from './enums';
import { heal } from './utils';

export const potion: Item = {
    name: "Potion",
    itemType: ItemType.Consumable,
    cost: 10,
    src: "item-potion.jpg",
    description: "A delicious potion (+10 HP)",
    consumeEffect: (player: Player) => {heal(player,10);},
    equipEffect: null
};

export const tatteredRobe: Item = {
    name: "Tattered Robe",
    itemType: ItemType.Garment,
    cost: 75,
    src: "item-tattered-robe.jpg",
    description: "The tattered old robes of a forgotten beggar (+5 Max HP)",
    consumeEffect: null,
    equipEffect: (player: Player) => {player.maxHp += 5}
};

export const forestMan: ShopKeeper = {
    name: "Belthus",
    greeting: "Greetings, magic man.... Fancy seeing you in this neck of the woods. What would you like?",
    goodbye: "Farewell, traveller. Beware the wild woods....",
    items: [
        potion, tatteredRobe
    ],
    src: "shopkeeper-belthus.jpg",
    textColor: "green"
}

export const classes: any[] = [{
    name: MagiType.Wizard,
    description: "A student of the ways of magic and power, eternal seeker of greater glories.",
    src: "../../assets/images/class-wizard.jpg",
    faceSrc: "../../assets/images/face-wizard.jpg",
    perks: [
        "+10% Intelligence",
        "+10% MP"
    ]
},
{
    name: MagiType.MedicineMan,
    description: "A sacred healer, brother to all, master of pills and herbs.",
    src: "../../assets/images/class-medicine-man.jpg",
    faceSrc: "../../assets/images/face-medicine-man.jpg",
    perks: [
        "+20% HP"
    ]
},
{
    name: MagiType.Shaman,
    description: "An adventurer who dives into the spirit realm to encounter untold beings.",
    src: "../../assets/images/class-shaman.jpg",
    faceSrc: "../../assets/images/face-shaman.jpg",
    perks: [
        "+10% Spirit",
        "-10% Artifact Cost"
    ]
},
{
    name: MagiType.Sorcerer,
    description: "A born prodigy, naturally skilled in spells and conjurings.",
    src: "../../assets/images/class-sorcerer.jpg",
    faceSrc: "../../assets/images/face-sorcerer.jpg",
    perks: [
        "+10% Resistance (All Elements)"
    ]
},
{
    name: MagiType.Warlock,
    description: "A champion of the dark arts: brother of demons and consumer of chaos.",
    src: "../../assets/images/class-warlock.jpg",
    faceSrc: "../../assets/images/face-warlock.jpg",
    perks: [
        "+20% Dark Spell Damage"
    ]
},
{
    name: MagiType.Seer,
    description: "A prophetic vizier who peers deeply into reality and possible futures.",
    src: "../../assets/images/class-seer.jpg",
    faceSrc: "../../assets/images/face-seer.jpg",
    perks: [
        "+20% Intelligence"
    ]
}];