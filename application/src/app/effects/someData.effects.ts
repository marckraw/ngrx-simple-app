import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of} from 'rxjs';
import { switchMap, catchError, map } from 'rxjs/operators';

import * as fromRandomUserACtions from '../actions/randomUser.actions';

@Injectable()
export class SomeDataEffects {

    constructor(private http: HttpClient, private actions$: Actions) {}

    @Effect()
    getData$: Observable<Action> = this.actions$
        .pipe(
            ofType(fromRandomUserACtions.GET_DATA),
            switchMap(() => this.http.get('https://randomuser.me/api/')
                .pipe(
                    map(data => ({ type: fromRandomUserACtions.GET_DATA_SUCCESS, payload: data })),
                    catchError(() => of({ type: fromRandomUserACtions.GET_DATA_FAILED }))
                ))
        );
}
