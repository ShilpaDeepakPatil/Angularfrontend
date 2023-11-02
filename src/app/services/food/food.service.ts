import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from 'src/app/shared/models/Tag';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getAll() {
    throw new Error('Method not implemented.');
  }


  getFoodById(id:number) :Food{
    return this.getAll().find(foods=> foods.id == id)!;
  }

  getAllFoodsByTag(tag:string): Food[] {
    return tag == "All"? 
  this.getAll() : this.getAll().filter(foods => foods.tags?.
  includes(tag));
  }

  getAllTag() :Tag[] {
    return [
     {name:'All', count: 8 },
     {name:'FastFood', count: 4 },
     {name:'Pizza', count: 1 },
     {name:'Lunch', count: 3 },
     {name:'Slowfood', count: 1 },
     {name:'Humburger', count: 1 },
     {name:'Fry',  count: 1 },
     {name:'CoolItems', count: 1 },
     {name:'desert', count: 1 }
    ];  
  }


getAll() :Food[] {
  return [
  /* '/assets/burgerking.jpg',
    '/assets/vegmachurian.jpg',
    '/assets/pizza.jpg',
    '/assets/rassmalai.jpg',
    '/assets/meat ball.jpg',
    '/assets/friedrice.jpg',
    '/assets/iice.jpg',
    '/assets/cooldrinks.jpg'
  ]
}
} */
{
      id:1,
      name:'Burgerking',
      cookTime:'10-20 min',
      price:10,
      favorite:false,
      origins:['mexican'],
      star:4,
      imageUrl:'assets/burger2.jpg',
      tags:['FastFood','Humburger','Lunch'],
     
    },
    {
      id:2,
          name:'Machurian',
          cookTime:'15-20 min',
          price:30,
          favorite:false,
          origins:['chainese'],
          star:5,
          imageUrl:'assets/vegmachurian.jpg',
          tags:['FastFood','machurian','Lunch'],
      },
  {
  id:3,
      name:'Pizza',
      cookTime:'10-25 min',
      price:30,
      favorite:false,
      origins:['italian'],
      star:4,
      imageUrl:'assets/pizza.jpg',
      tags:['FastFood','Pizza','Lunch'],
  },
  {
    id:4,
        name:'Rassmalai',
        cookTime:'15-20 min',
        price:40,
        favorite:false,
        origins:['indian'],
        star:3,
        imageUrl:'/assets/rassmalai.jpg',
        tags:['desert','rassmalai','dinner'],
    },
    {
      id:5,
          name:'Meatball',
          cookTime:'10-15 min',
          price:50,
          favorite:false,
          origins:['italy'],
          star:4,
          imageUrl:'/assets/meat ball.jpg',
          tags:['Slowfood','meatball','dinner']
      },
          {
      id:6,
          name:'Friedrice',
          cookTime:'15-20 min',
          price:60,
          favorite:false,
          origins:['italy'],
          star:5,
          imageUrl:'assets/friedrice.jpg',
          tags:['FastFood','Fry','dinner'],
      },
          {
      id:7,
          name:'Icecream',
          cookTime:'20-25 min',
          price:70,
          favorite:false,
          origins:['indian'],
          star:3,
          imageUrl:'assets/iice.jpg',
          tags:['Aftermeal','coolItems','dinner'],
      },
     {
      id:8,
          name:'Cooldrinks',
          cookTime:'10-15 min',
          price:80,
          favorite:false,
          origins:['indian'],
          star:2,
          imageUrl:'assets/cooldrinks.jpg',
          tags:['Aftermeal','CoolItems','cooldrink'],
      },
    ];
  }
}