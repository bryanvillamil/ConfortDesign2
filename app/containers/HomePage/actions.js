/*
 *
 * HomePage actions
 *
 */

import { DEFAULT_ACTION, GET_PROJECTS, SET_PROJECTS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function getDataProjects(data) {
  return {
    type: GET_PROJECTS,
    data,
  };
}

export function setProjects(data) {
  return {
    type: SET_PROJECTS,
    data,
  };
}
