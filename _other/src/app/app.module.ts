import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Store, StoreModule, combineReducers, provideStore } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { compose } from '@ngrx/core/compose';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TodoListComponent } from './containers/todo-list/todo-list.component';
import { EditTodoComponent } from './containers/edit-todo/edit-todo.component';
import { TodoComponent } from './components/todo/todo.component';

import { reducer } from "./reducers/app.reducer";
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    EditTodoComponent,
    TodoComponent,
    LoginComponent
  ],
  imports: [
    // Angular
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    // Store
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    // Routing
    AppRoutingModule,
    RouterStoreModule.connectRouter(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
