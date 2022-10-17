import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Displaydonut } from '../displaydonut';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  displayCart: Displaydonut[] = this.cartService.getCart();
  totalCalories: number = this.cartService.getTotalCalories();
  totalPrice: number = this.cartService.getTotalPrice();
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.displayCart = this.cartService.getCart();
    this.totalCalories = this.cartService.getTotalCalories();
  }

  refresh(): void {
    this.totalCalories = this.cartService.getTotalCalories();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
