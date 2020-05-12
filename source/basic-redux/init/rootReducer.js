
import { combineReducers } from 'redux';
import { galleryReducer } from '../bus/gallery/reducer';

export const rootReducer = combineReducers({
    gallery: galleryReducer,
});
