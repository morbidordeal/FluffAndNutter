export function oneOf(items: any[]){
    return items[Math.floor(items.length * Math.random())];
}