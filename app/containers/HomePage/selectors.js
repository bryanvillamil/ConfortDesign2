import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the homePage state domain
 */

const selectHomePageDomain = state => state.homePage || initialState;

/**
 * Other specific selectors
 */
const selectAppDomain = state => state.app || {};

/**
 * Default selector used by HomePage
 */

const makeSelectHomePage = () =>
  createSelector(
    selectHomePageDomain,
    selectAppDomain,
    substate => substate,
  );

export default makeSelectHomePage;
export { selectHomePageDomain };
