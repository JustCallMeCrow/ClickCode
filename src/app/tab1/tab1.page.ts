import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  constructor(private http: HttpClient) {}
  private counter: number;

  ngOnInit() {
    this.start();
  }
  
  increaseCount():void {
    this.counter++;
  }
  getCounter(): any {
      return this.http.get('../../assets/counter.json');
  }

  start() {
    this.getCounter()
      .subscribe((data) => this.counter = data.counter);
  }
}
