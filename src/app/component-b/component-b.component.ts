import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-component-b',
  template: `
    <h1>Component B</h1>
    <p>Data: {{ data }}</p>
  `,
})
export class ComponentB implements OnInit {
  data!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.data$.subscribe((data) => {
      this.data = data;
    });
  }
}