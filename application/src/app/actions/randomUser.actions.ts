import { Action } from '@ngrx/store';

export const GET_DATA = '[Random User] Add Todo';
export const GET_DATA_SUCCESS = '[Random User] GET_DATA_SUCCESS';
export const GET_DATA_FAILED = '[Random User] GET_DATA_FAILED';

export class GetDataAction implements Action {
    readonly type = GET_DATA;
}

export class GetDataSuccessAction implements Action {
    readonly type = GET_DATA_SUCCESS;

    constructor(public payload: any) {}
}

export class GetDataFailedAction implements Action {
    readonly type = GET_DATA_FAILED;

    constructor(public payload: any) {}
}


export type Actions = GetDataAction | GetDataSuccessAction | GetDataFailedAction;
