import { createAction } from "@ngrx/store";

// type: [Source] Event
export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const reset = createAction('[Counter] Reset');