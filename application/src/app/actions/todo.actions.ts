import { Action } from '@ngrx/store';

export const ADD_TODO = '[Todos] Add Todo';
export const SOME_OTHER_ACTION = 'SOME_OTHER_ACTION';

export class AddTodoAction implements Action {
    readonly type = ADD_TODO;

    constructor(public payload: any) {}
}

export class SomeOtherAction implements Action {
    readonly type = SOME_OTHER_ACTION;

    constructor(public payload: any) {}
}


export type Actions = AddTodoAction | SomeOtherAction;
