import { Action } from '@ngrx/store';

import * as fromTodoActions from '../actions/todo.actions';


export interface Todos {
    id: number;
    task: string;
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    archived: boolean;
}

export interface TodosState {
    todos: Todos[];
}

export const initialState: TodosState = {
    todos: [
        {
            id: 1,
            task: 'Test 1',
            year: 2017,
            month: 5,
            day: 6,
            hour: 19,
            min: 17,
            archived: false,
        },
        {
            id: 2,
            task: 'Test 1',
            year: 2018,
            month: 7,
            day: 2,
            hour: 23,
            min: 21,
            archived: false,
        }
    ]
};

export function reducer(state: TodosState = initialState, action: Action): TodosState {
    switch (action.type) {
        case fromTodoActions.ADD_TODO:
            console.log('ADD_TODO action dispatched');
            console.dir(action);
            console.log(action.payload);
            return {
                ...state,
            };

        default:
            return state;
    }
}
