import { LOAD_NEWS, SEARCH_NEWS } from './actionTypes';
import NYT_API_KEY from '../config/nytApiKey';

export const loadNews = () => {
  const req = fetch(`https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${NYT_API_KEY}`);
  return {
    type: LOAD_NEWS,
    payload: req.then(response => response.json())
  };
};

export const searchNews = searchTerm => ({
  type: SEARCH_NEWS,
  payload: searchTerm
});
