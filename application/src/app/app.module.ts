import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
// import { reducer } from './reducers/app.reducer';
import { reducer } from './reducers/todos.reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos: reducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
