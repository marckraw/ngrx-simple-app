import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { LoginComponent } from './containers/login/login.component';
import { EditTodoComponent } from './containers/edit-todo/edit-todo.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: TodoListComponent },
      { path: 'login', component: LoginComponent },
      { path: 'edit/:id', component: EditTodoComponent },
      { path: 'new', component: EditTodoComponent },
      //{ path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
