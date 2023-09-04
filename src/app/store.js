import CounterReducer from "./Features/Counter/reducer";
import {combineReducers, createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


let rootReducers = combineReducers({
    counter: CounterReducer
})

const composeEnhancers = window._REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose; 
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));
export default store;