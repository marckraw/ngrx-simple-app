import * as fromRouter from '@ngrx/router-store';
import { combineReducers, compose } from '@ngrx/store';

import * as fromTodos from './todos.reducer';


export interface WholeState {
    router: fromRouter.RouterReducerState;
    todos: fromTodos.TodosState;
}

const reducers = {
    // router: fromRouter.routerReducer,
    todos: fromTodos.reducer,
};

const developmentReducer = compose(
    combineReducers,
)(reducers);

export function reducer(state: any, action: any) {
    return developmentReducer(state, action);
}
