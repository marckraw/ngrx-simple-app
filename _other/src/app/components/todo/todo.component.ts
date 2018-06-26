import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent {
  @Input() todo: Todo;
  @Output() edit = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() done = new EventEmitter();

  constructor() { }

  // This should definitely use a date object

}
