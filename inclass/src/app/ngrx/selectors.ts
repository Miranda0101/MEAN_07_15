import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './state';
// createFeatrueSelector -> for a specific feature state
// select all state associate with feature counter
export const selectCounterSelector =
  createFeatureSelector<CounterState>('counter');

export const selectCount = createSelector(selectCounterSelector,
    (state: CounterState) => {
        return state.count;
    }
);
