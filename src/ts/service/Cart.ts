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
        const totalSum = this._items.reduce(function(sum, currentItem){
            return sum + currentItem.price
        }, 0)

        return totalSum;
    }

    totalSumDiscount(percentage: number): number{
        let sum = this.totalSum()

        return sum - sum * (percentage/100);
    }

    deleteItem(id: number): void{
        this._items = this._items.filter(item => item.id !==id);
    }
}
