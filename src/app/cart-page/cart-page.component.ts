import { Component, OnInit } from '@angular/core';
//import { Carts } from '../shared/models/Carts';
import { CartService } from '../services/cart.service';
//import { CartItem } from '../shared/models/cartItem';
import { FoodService } from '../services/food/food.service';
import { Food} from '../shared/models/Food';
import { Route, Router } from '@angular/router';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit{
 cart!: Cart[];
 id! :number;
// cart: Cart = new Cart();
  constructor(private cartService:CartService,private foodService:FoodService,private router:Router) {
  
        this.setCart();
  }
  ngOnInit(): void {
    this.getCarts();
  }
private getCarts(){
    this.cartService.getCartList().subscribe(data => {this.cart = data;
    });
}
setCart() {
  //this.cart= this.cartService.getCart();
}
removeFromCart(id:number) {
 // this.cartService.removeFromCart(cartItem.foods.id);
this.cartService.removeFromCart(id).subscribe({next:(data)=> {this.getCarts(); 
console.log("item deleted")},
error:(error)=>{console.log(error)}})
// this.router.navigateByUrl('/cart-page');
}
changeQuantity(cart:Cart,quantitystring: string) {
  console.log("change quantity");
      cart.quantity = parseInt(quantitystring);
      this.cartService.updateCart(cart.id, cart).subscribe({next:(data)=> {
      this.getCarts();
      alert("cart edited successfully.......")
    },
    error:(error)=>{console.log(error)}})
   console.log(cart);
this.router.navigateByUrl('/cart-page');
//this.cartService.updateCart(this.id, cart);
  }
}