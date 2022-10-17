import { Component, OnInit } from '@angular/core';
import { Donut } from '../donut';
import { DonutServiceService } from '../donut-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  donuts: Donut[] = [];

  constructor(private donutService: DonutServiceService) {}

  ngOnInit(): void {
    this.donutService.fetchDonuts().subscribe((res) => {
      res.results.map((donut) => {
        this.donuts.push(donut);
      });
      console.log(this.donuts);
    });
  }
}
