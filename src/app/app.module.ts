import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentA } from './component-a/component-a.component';
import { ComponentB } from './component-b/component-b.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentA,
    ComponentB
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
