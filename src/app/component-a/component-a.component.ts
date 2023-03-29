
import { Component } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-component-a',
  template: `
  <h1>Component A</h1>
  <div id="one" [(ngModel)]="data">CLICK FOR DATA TRANSFER<div>
  <button (click)="updateData()">SUBMIT</button>
  
  `
})
export class ComponentAComponent {
  data: string = "Data Transfer Received"
  constructor(private dataService: DataService){}
  updateData(){
    this.dataService.updateData(this.data)
  }
}
