import { createSelector } from 'reselect';
import { reshapeNewsData, filterNewsBySearchTerm } from '../util/dataTransformations';

const newsSelector = state => state.news;

const reshapeNewsSelector = createSelector(
  [newsSelector],
  reshapeNewsData
);

export const allNewsSelector = createSelector(
  [reshapeNewsSelector],
  newsItems => newsItems
);

const searchTermSelector = state => state.searchTerm;

const caseInsensitiveSearchTermSelector = createSelector(
  searchTermSelector,
  searchTerm => searchTerm.toLowerCase()
);

export const searchNewsSelector = createSelector(
  [reshapeNewsSelector, caseInsensitiveSearchTermSelector],
  filterNewsBySearchTerm
);
