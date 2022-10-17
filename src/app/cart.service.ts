import { Injectable } from '@angular/core';
import { Displaydonut } from './displaydonut';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private cart: Displaydonut[] = [];

  getCart(): Displaydonut[] {
    return this.cart;
  }

  addItemToCart(item: Displaydonut): void {
    this.cart.push(item);
    console.log(this.cart);
  }

  removeItemFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  getTotalCalories(): number {
    return this.cart.reduce((result, current) => (result += current.calories),0);
  }

  getTotalPrice(): number {
    return this.cart.length;
  }
}
