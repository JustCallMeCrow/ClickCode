import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodigatorService {

  private _counter: number;
  constructor(private http: HttpClient) {

  }

  increaseCount():void {
    this._counter++;
  }
  getCount():number {
    return this._counter;
  }
  getCountFromFile():number {
    this.http.get('../../assets/counter.json')

    return 0;
  }

  ngOnDestroy() {

  }
}
