import { Action } from '@ngrx/store';

import * as fromtRandomUserActions from '../actions/randomUser.actions';


export const initialState: any = {
    data: [],
};

export function randomUserReducer(state: any = initialState, action: Action): any {
    switch (action.type) {
        case fromtRandomUserActions.GET_DATA_SUCCESS:
            return {
                data: action.payload.results[0],
            };

        default:
            return state;
    }
}
