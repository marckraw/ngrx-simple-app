import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as fromRoot from '../../reducers/app.reducer';
import * as fromTodos from '../../reducers/todos.reducer';
import * as todo from '../../actions/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent implements OnInit {
  todos$: Observable<fromTodos.State>;

  constructor(
    private router: Router,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit() {
    this.todos$ = this.store.select<fromTodos.State>('todos').map(
      todos => { return {
        ids: todos.ids.filter(id => !todos.entities[id].archived),
        entities: todos.entities
      }}
    );
  }

  edit(id: number) {
    this.router.navigate(['/edit', id])
  }

  delete(id: number) {
    this.store.dispatch(new todo.RemoveTodoAction(id));
  }

  done(id: number) {
    this.store.dispatch(new todo.ArchiveTodoAction(id));
  }

}
