import { createFeature, createReducer, on } from '@ngrx/store';
import { BreedState } from './breed.model';
import {
  getBreedListSuccess,
  getBreedDetailsSuccess,
  getBreedList,
  getBreedDetails,
  getBreedListFailure,
  getBreedDetailsFailure,
} from './breed.actions';

export const initialState: BreedState = {
  breedList: [],
  breedDetails: null,
  loading: false,
};

export const breedReducer = createFeature({
  name: 'breedState',
  reducer: createReducer(
    initialState,
    on(getBreedList, (state) => ({
      ...state,
      loading: true,
    })),

    on(getBreedListSuccess, (state, { breeds }) => ({
      ...state,
      loading: false,
      breedList: breeds,
    })),

    on(getBreedListFailure, (state) => ({
      ...state,
      loading: false,
    })),

    on(getBreedDetails, (state) => ({
      ...state,
      loading: true,
    })),

    on(getBreedDetailsSuccess, (state, { breedDetails }) => {
      return {
        ...state,
        loading: false,
        breedDetails,
      };
    }),

    on(getBreedDetailsFailure, (state) => ({
      ...state,
      loading: false,
    }))
  ),
});
