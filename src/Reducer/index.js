// rootReducer.js

import Change from './IncrementAndDecrement';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    Change
});

export default rootReducer;
