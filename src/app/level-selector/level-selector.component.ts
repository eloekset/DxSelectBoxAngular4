import { Component, ViewChild, OnInit, Input } from '@angular/core';
import { IType } from '../IType';
import { 
  DxSelectBoxComponent
 } from 'devextreme-angular';

@Component({
  selector: 'level-selector',
  templateUrl: './level-selector.component.html',
  styleUrls: ['./level-selector.component.css']
})
export class LevelSelectorComponent implements OnInit {
  @ViewChild('dx-select-box') selectBox: DxSelectBoxComponent;
  levels: IType[] = [{ type: 'easy'}, {type:'normal'}, {type:'hard'}];
  @Input()
  type: string;
  @Input()
  isEditable: boolean;
  constructor() { 

  }

  ngOnInit() {
  }

}
