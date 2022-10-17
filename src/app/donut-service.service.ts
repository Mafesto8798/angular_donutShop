import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Displaydonut } from './displaydonut';
import { Donut } from './donut';
import { DonutResponse } from './donut-response';

@Injectable({
  providedIn: 'root',
})
export class DonutServiceService {
  constructor(private httpClient: HttpClient) {}

  private donuts: Donut[] = [];

  fetchDonuts(): Observable<DonutResponse> {
    return this.httpClient.get<DonutResponse>(
      'https://grandcircusco.github.io/demo-apis/donuts.json'
    );
  }

  fetchDonut(id: number): Observable<Displaydonut> {
    return this.httpClient.get<Displaydonut>(
      `https://grandcircusco.github.io/demo-apis/donuts/${id}.json`
    );
  }

  getDonuts(): Donut[] {
    return this.donuts;
  }

  getDonutById(id: number): Donut {
    return this.donuts.filter((donut) => donut.id == id)[0];
  }
}
