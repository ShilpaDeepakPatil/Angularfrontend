import { Injectable } from '@angular/core';
//import { Carts} from '../shared/models/Carts';
import { Food } from '../shared/models/Food';
//import { CartItem } from '../shared/models/cartItem';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../shared/models/Cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  
  private baseUrl = 'http://localhost:8080/carts'; // Replace this with your Spring Boot backend URL
  //private updateUrl = 'http://localhost:8080/updatecarts'; 
  constructor(private httpClient: HttpClient) { }

  addCartItem(cart: Cart): Observable<Cart> {
    console.log(cart.name);
    return this.httpClient.post<Cart>(`${this.baseUrl}`, cart);
  }

  getCartList(): Observable<Cart[]>{
    return this.httpClient.get<Cart[]>(`${this.baseUrl}`);
  }

  updateCart(id: number, cart : Cart): Observable<Object> {
   return this.httpClient.put(`${this.baseUrl}/${id}`,cart);
  }

  removeFromCart(id:number): Observable<Object> {
    console.log(id);
    return this.httpClient.delete(`${this.baseUrl}/${id}`,{responseType: "text"});
  }
 
}





//frontend
/*private cart:Carts = new Carts();
 addToCart(food:Food) :void { 
  console.log("add to cart page is opemed");
  this.addcart(food); 
  let cartItem = this.cart.items.find(item => item.foods.id === food.id)
  if(cartItem)
  {
    this.changeQuantity(food.id, CartItem.quantity +1)
    return;
  }
  this.cart.items.push(new CartItem (food));
 }*/
//  removeFromCart(foodsId:number): void {
//   this.cart.items = this.cart.items.filter(item=> item.foods.id != foodsId)
//  }
//  changeQuantity(cart: Cart ) {
//   let cartItem =this.cart.items.find(item =>item.foods.id === foodId);
//   if(!cartItem) return;
//   cartItem.quantity= quantity;
//  }
//  getCart() : Carts{
//   return this.cart;
//  }


