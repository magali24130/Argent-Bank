import { configureStore, combineReducers } from '@reduxjs/toolkit';
import  authReducer  from '../Redux/Reducer/reducer';
import  userReducer  from '../Redux/Reducer/user.reducer';

const rootReducer = combineReducers({
   auth: authReducer,
   user: userReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true 
})

export default store
