import { Injectable } from '@angular/core';
import { BreedService } from './breed.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  getBreedDetails,
  getBreedDetailsFailure,
  getBreedDetailsSuccess,
  getBreedList,
  getBreedListFailure,
  getBreedListSuccess,
} from './breed.actions';
import { catchError, concatMap, map, of } from 'rxjs';

@Injectable()
export class BreedEffects {
  constructor(private actions$: Actions, private breedService: BreedService) {}

  getBreedList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBreedList),
      concatMap(() => {
        return this.breedService.getBreedList().pipe(
          map((breeds) => getBreedListSuccess({ breeds })),
          catchError((e) => of(getBreedListFailure({ error: e })))
        );
      })
    );
  });

  getBreedDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBreedDetails),
      concatMap((action) => {
        return this.breedService.getBreedDetails(action.name).pipe(
          map((breedDetails) => getBreedDetailsSuccess({ breedDetails })),
          catchError((e) => of(getBreedDetailsFailure({ error: e })))
        );
      })
    );
  });
}
