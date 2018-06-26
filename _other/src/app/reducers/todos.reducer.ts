import { Action } from '@ngrx/store';
import { omit } from 'lodash';

import * as todo from '../actions/todo.actions';
import { Todo } from "../models/todo.model";

export interface State {
  ids: number[];
  entities: { [id: number]: Todo };
}

export const initialState: State = {
  ids: [
    1,
    2,
    3,
  ],
  entities: {
    1: {
      task: 'Test 1',
      year: 2017,
      month: 5,
      day: 6,
      hour: 19,
      min: 17,
      archived: false
    },
    2: {
      task: 'Test 2',
      year: 2017,
      month: 5,
      day: 7,
      hour: 13,
      min: 45,
      archived: false
    },
    3: {
      task: 'Test 3',
      year: 2017,
      month: 5,
      day: 7,
      hour: 21,
      min: 30,
      archived: false
    }
  }
}

export function reducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case todo.ADD_TODO:
      let id = Math.max(...state.ids) + 1;
      return {
        ids: [...state.ids, id],
        entities: {
          ...state.entities,
          [id]: action.payload
        }
      };
    case todo.REMOVE_TODO:
      return {
        ids: state.ids.filter(id => id !== action.payload),
        // Lodash omit function
        entities: omit(state.entities, action.payload)
      }
    case todo.EDIT_TODO:
      return {
        ids: state.ids,
        entities: {
          ...state.entities,
          [action.payload.id]: action.payload.todo
        }
      }
    case todo.ARCHIVE_TODO:
      return {
        ids: state.ids,
        entities: {
          ...state.entities,
          [action.payload]: {
            ...state.entities[action.payload],
            archived: true
          }
        }
      }
    case todo.UNARCHIVE_TODO:
      return {
        ids: state.ids,
        entities: {
          ...state.entities,
          [action.payload]: {
            ...state.entities[action.payload],
            archived: false
          }
        }
      }
    default:
      return state;
  }
}
