import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRootReducer from './reducers/app.reducer';
import * as fromTodoActions from './actions/todo.actions';
import * as fromRandomUserActions from './actions/randomUser.actions';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private someData$: Observable<any>;


  constructor(
    private store: Store<fromRootReducer.WholeState>
  ) {}


  public addTodoAction() {
    this.store.dispatch(new fromTodoActions.AddTodoAction('whatever'));
    this.store.dispatch({ type: fromRandomUserActions.GET_DATA });
    this.someData$ = this.store.select('data');
  }
}
