import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { ColumnModule } from 'src/app/models/column.module';
import { BoardModel } from '../../models/board.module';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
})
export class MainviewComponent implements OnInit {
  constructor() {}

  board: BoardModel = new BoardModel('Test Board', [
    new ColumnModule('Ideas', ['Some random idea', 'New idea']),
    new ColumnModule('Reaserch', [
      'How to cook the fish and chips',
      'New course of CSS',
    ]),
    new ColumnModule('Todo', ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new ColumnModule('Done', ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']),
  ]);

  ngOnInit(): void {}



  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
