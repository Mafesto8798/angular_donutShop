import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Displaydonut } from '../displaydonut';
import { Donut } from '../donut';
import { DonutServiceService } from '../donut-service.service';

@Component({
  selector: 'app-donut-detail',
  templateUrl: './donut-detail.component.html',
  styleUrls: ['./donut-detail.component.css'],
})
export class DonutDetailComponent implements OnInit {
  displayDonut: Displaydonut = {} as Displaydonut;
  constructor(
    private route: ActivatedRoute,
    private donutService: DonutServiceService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    let id: number = Number(this.route.snapshot.paramMap.get('id'));
    this.donutService.fetchDonut(id).subscribe((res) => {
      this.displayDonut = res;
    });
  }

  addToCart(): void {
    this.cartService.addItemToCart(this.displayDonut);
  }
}
