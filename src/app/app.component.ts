import { Component, ViewChild, OnInit } from '@angular/core';
import { 
  DxButtonComponent,
  DxSelectBoxComponent,
  DxDataGridComponent
 } from 'devextreme-angular';
import ArrayStore from "devextreme/data/array_store";
import DataSource from "devextreme/data/data_source";
import IItem from './IItem';
import IType from './IType';
import { LevelSelectorComponent } from './level-selector/level-selector.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(DxSelectBoxComponent) dropDown: DxSelectBoxComponent;
  title = 'app';
  dataSource = new DataSource({
    store: {
      type: 'array',
      key: 'id'
    }
  });
  constructor() {
    var arrayStore = <ArrayStore>this.dataSource.store();
    arrayStore.insert({
      id: '1',
      name: 'Test 1',
      type: 'normal'
    });
    arrayStore.insert({
      id: '2',
      name: 'Test 2',
      type: 'normal'
    });
  }
  ngOnInit(): void {
  }
}
