import { Action } from '@ngrx/store';

// Get the model
import { Todo } from '../models/todo.model';

// All actions relevant to todos for use in reducers and dispatches
export const ADD_TODO =       '[Todos] Add Todo';
export const REMOVE_TODO =    '[Todos] Remove Todo';
export const EDIT_TODO =      '[Todos] Edit Todo';
export const ARCHIVE_TODO =   '[Todos] Archive Todo';
export const UNARCHIVE_TODO = '[Todos] Unarchive Todo';

// Add todo to state
export class AddTodoAction implements Action {
  // Readonly is a typescript modifier for properties that prevents mutation
  readonly type = ADD_TODO;

  constructor(public payload: Todo) { }
}

// Remove todo from state
export class RemoveTodoAction implements Action {
  readonly type = REMOVE_TODO;

  constructor(public payload: number) { }
}

// Edit single todo
export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public payload: {id: number, todo: Todo}) { }
}

// Archive single todo
export class ArchiveTodoAction implements Action {
  readonly type = ARCHIVE_TODO;

  constructor(public payload: number) { }
}

// Unarchive single todo
export class UnarchiveTodoAction implements Action {
  readonly type = UNARCHIVE_TODO;

  constructor(public payload: number) { }
}

// This union makes it easier for reducers to use only certain action types
export type Actions
  = AddTodoAction
  | RemoveTodoAction
  | EditTodoAction
  | ArchiveTodoAction
  | UnarchiveTodoAction;
