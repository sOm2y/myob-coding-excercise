
import { createStore, combineReducers } from 'redux';
import payslipReducer from './reducers/payslipReducer';

const rootReducer = combineReducers({

  PayslipReducer: payslipReducer,

});

function configureStore() {
  let store = createStore(
    rootReducer,
    // Redux debug tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return { store };
}

export default configureStore;