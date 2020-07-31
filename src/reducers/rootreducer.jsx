import { combineReducers } from 'redux';
import { userReducer, uiReducer,fundeeReducer,dataReducer,blogReducer } from './allReducers';

const rootreducer = combineReducers({
  user: userReducer,
  data: dataReducer,
  ui: uiReducer,
  fundee:fundeeReducer,
  blog:blogReducer
});

export default rootreducer;