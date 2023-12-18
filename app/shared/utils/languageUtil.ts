

import { Languages } from '../constants/constants';
import { StorageUtil } from './storageUtil';

export class LanguageUtil {
    public static GetStorageLang = () => {
        const localstorageval = StorageUtil.loadState('currentLanguage');
    
        if (localstorageval) {
            return localstorageval.toString();
        }
        return Languages.en;
    };
}