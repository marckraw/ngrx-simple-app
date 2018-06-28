// import { Action } from '@ngrx/store';
import * as fromtRandomUserActions from '../actions/randomUser.actions';

interface Action {
    type: string;
    payload: any;
}

export const initialState: any = {
    data: [],
};

export function randomUserReducer(state: any = initialState, action: Action): any {
    switch (action.type) {
        case fromtRandomUserActions.GET_DATA_SUCCESS:
            return {
                ...action.payload.results[0],
            };

        default:
            return state;
    }
}
