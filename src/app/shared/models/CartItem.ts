import { Food } from "./Food";

export class CartItem {
    static quantity: number;
    constructor(food: Food) {
        this.foods= food;
       // this.price;  //javascript code, u can write this method1
    }
    foods: Food;
    quantity:number = 1;
    get price(): number {
        return this.foods.price * this.quantity;
    }
}