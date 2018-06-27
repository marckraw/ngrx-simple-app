import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
// import { reducer } from './reducers/app.reducer';
import { reducer } from './reducers/todos.reducer';
import { randomUserReducer } from './reducers/randomUser.reducer';
import { SomeDataEffects } from './effects/someData.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({
      todos: reducer,
      data: randomUserReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    EffectsModule.forRoot([SomeDataEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
