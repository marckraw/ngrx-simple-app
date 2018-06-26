import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRootReducer from './reducers/app.reducer';
import * as fromTodoActions from './actions/todo.actions';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private store: Store<fromRootReducer.WholeState>
  ) {}


  public addTodoAction() {
    console.log('addTodoAction function from component');
    this.store.dispatch(new fromTodoActions.AddTodoAction('whatever'));
  }
}
