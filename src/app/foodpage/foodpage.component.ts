import { Component, OnInit } from '@angular/core';
import { Food} from '../shared/models/Food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/models/Cart';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
  food! :Food;

  cart: Cart = new Cart();
  constructor(private activatedRoute:ActivatedRoute,
    private cartService:CartService,private foodService: FoodService,
    private router:Router)  
    { 
      activatedRoute.params.subscribe((params)=>{
        if(params['id'])
        this.food= foodService.getFoodById(params['id'])
      })   
    }
    
  ngOnInit(): void {
  
  }
  addToCart() {
    console.log(this.food.name);
    this.cart.name= this.food.name;
    this.cart.id= this.food.id;
    this.cart.price= this.food.price;
    //this.cart.quantity= 1;
    this.cartService.addCartItem(this.cart).subscribe(data => {
      console.log(data);
      this.goToCartList();
    })
    //error => console.log(error));
  }

  goToCartList() {

    this.router.navigateByUrl('/cart-page');

  }
  onSubmit() {
  this.addToCart();
    alert("added to the cart successfully!!!!");
}
}
