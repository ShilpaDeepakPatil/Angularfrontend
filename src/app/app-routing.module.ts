import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UpdatecartComponent } from './updatecart/updatecart.component';
import { AddcartComponent } from './addcart/addcart.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'search/:searchItem',component:HomeComponent},
  {path:'tag/:tag', component:HomeComponent},
  {path:'food/:id',component:FoodpageComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'buy',component:BuyComponent},
  {path:'Contactus',component:ContactusComponent},
  {path:'updatecart', component:UpdatecartComponent},
  {path:'addcart',component:AddcartComponent},
 {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
