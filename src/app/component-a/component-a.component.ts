import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-component-a',
  template: `
    <h1>Component A</h1>
    <input type="text" [(ngModel)]="data">
    <button (click)="updateData()">Update Data</button>
  `,
})
export class ComponentA implements OnInit {
  data!: string;

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  updateData() {
    this.dataService.updateData(this.data);
  }
}