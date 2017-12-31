import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, ViewChild } from '@angular/core';
import { 
  DxSelectBoxModule,
  DxButtonModule,
  DxDataGridModule
} from 'devextreme-angular';

import { AppComponent } from './app.component';
import { LevelSelectorComponent } from './level-selector/level-selector.component';


@NgModule({
  declarations: [
    AppComponent,
    LevelSelectorComponent
  ],
  imports: [
    BrowserModule,
    DxSelectBoxModule,
    DxButtonModule,
    DxDataGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
