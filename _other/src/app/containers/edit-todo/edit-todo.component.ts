import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import * as fromRoot from '../../reducers/app.reducer';
import * as fromTodos from '../../reducers/todos.reducer';
import * as todo from '../../actions/todo.actions';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditTodoComponent implements OnInit {
  public editForm = this.fb.group({
    task: ['', Validators.compose([
      Validators.required,
      Validators.maxLength(200)])],
    year: ['', Validators.required],
    month: ['', Validators.required],
    day: ['', Validators.required],
    hour: ['', Validators.required],
    min: ['', Validators.required]
  })

  public editId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<fromRoot.State>,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => {
        this.editId = +params['id'];
        return this.store.select<fromTodos.State>('todos').map(
          todos => todos.entities[this.editId]
        )
      })
      .subscribe((todo: Todo) => {
        // Set the form to the todo values for editting
        if (todo) this.editForm.patchValue(todo);
    });
  }

  submit() {
    if (this.editForm.valid) {
      if (isNaN(this.editId))
        this.store.dispatch(new todo.AddTodoAction(this.editForm.value));
      else
        this.store.dispatch(new todo.EditTodoAction({id: this.editId, todo: this.editForm.value}));
      this.router.navigate(['/']);
    }
  }

}
