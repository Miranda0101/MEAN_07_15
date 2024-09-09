import { createReducer, on } from '@ngrx/store';
import { CounterState, initialState } from './state';
import { decrement, increment, reset } from './action';

// on Each action, what function to execute
export const counterReducer = createReducer(
  initialState,
  on(increment, (state: CounterState) => ({ ...state, count: state.count + 1 })),
  on(decrement, (state: CounterState)=>({...state, count: state.count - 1})),
  on(reset, (state: CounterState)=>({...state, count: 0}))
);
