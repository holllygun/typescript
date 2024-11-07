import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    totalSum(): number {
        let sum = 0
        for (const item of this._items) {
            sum += item.price;
        }
        return sum;
    }

    totalSumDiscount(percentage: number): number{
        let sum = 0
        for (const item of this._items) {
            sum += item.price;
        }
        return sum - sum * (percentage/100);
    }

    deleteItem(id: number): void{
        this._items = this._items.filter(item => item.id !==id);
    }
}
// Для функций обязательно:

// Указание типов параметров
// Указание типа возвращаемого значения (если функция ничего не возвращает, то должен быть указан тип void)