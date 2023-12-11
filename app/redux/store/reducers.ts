import { getLibraryReducers } from '@3s/components';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    ...getLibraryReducers()
});

export default reducers;
