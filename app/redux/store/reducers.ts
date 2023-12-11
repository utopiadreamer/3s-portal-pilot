import { getLibraryReducers } from '@3s/components';
import { combineReducers } from 'redux';
import { languageReducer } from '../language/reducer';

const reducers = combineReducers({
    ...getLibraryReducers(),
    language: languageReducer
});

export default reducers;
