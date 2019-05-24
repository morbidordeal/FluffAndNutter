import { Player, Item } from './models';
import { MagiType } from './enums';

export function consume(player: Player, item: Item){
    item.consumeEffect(player);
}

export function equip(player: Player, item: Item){
    item.equipEffect(player);
}

export function calculateIntelligence(player: Player){
    return player.intelligence * intelligenceMultiplier(player);
}

export function calculateSpirit(player: Player){
    return player.spirit * spiritMultiplier(player);
}

export function calculateMaxHP(player: Player){
    return round(player.maxHp * hpMultiplier(player));
}

export function calculateMaxMP(player: Player){
    return round(player.maxMp * mpMultiplier(player));
}

export function intelligenceMultiplier(player: Player): number{
    let baseMultiplier = 1.0;
    if (player.magiType === MagiType.Seer) {
        baseMultiplier += 0.2;
    }
    if (player.magiType === MagiType.Wizard) {
        baseMultiplier += 0.1;
    }
    return baseMultiplier;
}

export function hpMultiplier(player: Player): number{
    let baseMultiplier = 1.0;
    if (player.magiType === MagiType.MedicineMan) {
        baseMultiplier += 0.2;
    }
    return baseMultiplier;
}

export function mpMultiplier(player: Player): number{
    let baseMultiplier = 1.0;
    if (player.magiType === MagiType.Wizard) {
        baseMultiplier += 0.1;
    }
    return baseMultiplier;
}

export function spiritMultiplier(player: Player): number{
    let baseMultiplier = 1.0;
    if (player.magiType === MagiType.Shaman) {
        baseMultiplier += 0.1;
    }
    return baseMultiplier;
}

export function round(num: number): number{
    return Math.round(num * 100) / 100;
}

export function heal(player: Player, amount: number){
    player.hp = Math.min(player.maxHp, player.hp + amount);
}