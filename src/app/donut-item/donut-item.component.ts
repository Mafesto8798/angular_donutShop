import { Component, OnInit, Input } from '@angular/core';
import { Donut } from '../donut';

@Component({
  selector: 'app-donut-item',
  templateUrl: './donut-item.component.html',
  styleUrls: ['./donut-item.component.css'],
})
export class DonutItemComponent implements OnInit {
  @Input() donut: Donut = {} as Donut;
  constructor() {}

  ngOnInit(): void {}
}
