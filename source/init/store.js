
import { createStore } from 'redux';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { enhancedStore, sagaMV } from './middleware/core';

export const store = createStore(rootReducer, enhancedStore);

sagaMV.run(rootSaga);
