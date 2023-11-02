import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,NonNullableFormBuilder, AbstractControl, } from '@angular/forms'; 
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  form = new FormGroup({
    //name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z')])
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    phoneno: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    state: new FormControl('',Validators.required), 
    country: new FormControl('',Validators.required)


 });
  
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    alert("login successfully!!!");
  }
  


}