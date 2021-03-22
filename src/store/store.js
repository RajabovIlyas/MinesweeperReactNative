import {applyMiddleware, combineReducers, createStore} from 'redux';
import levelsReducer from './levelsReducer';
import levelReducer from './levelReducer';
import thunk from 'redux-thunk';


const reducers = combineReducers({
    levelsPage:levelsReducer,
    levelStart:levelReducer,
});

export default store = createStore(reducers, applyMiddleware(thunk));


window.store = store;
