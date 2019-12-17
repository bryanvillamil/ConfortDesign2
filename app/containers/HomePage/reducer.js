/*
 *
 * HomePage reducer
 *
 */
import produce from 'immer';
import { DEFAULT_ACTION, SET_PROJECTS } from './constants';

export const initialState = {
  dataProjects: [],
};

/* eslint-disable default-case, no-param-reassign */
const homePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_PROJECTS:
        draft.dataProjects = action.data;
        break;
      case DEFAULT_ACTION:
        break;
    }
  });

export default homePageReducer;
