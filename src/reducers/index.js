import { combineReducers } from 'redux'
import list from './list'
import category from './category'

const reducer = combineReducers({
  list,
  category
});

export default reducer;
