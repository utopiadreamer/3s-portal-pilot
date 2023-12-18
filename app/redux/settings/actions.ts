import { setRTL } from '@fluentui/react';
import SettingsHandler from '../../Logic/Business/Settings/SettingsHandler';
import {
    CHANGE_LOCALE,
    SWAP_BACK_DROP_VISIBILITY,
    SWAP_MODAL_VISIBILITY,
    SHOW_EXPIRE_ALERT,
    SET_API_RESPONSE,
} from '../StoreCommon/actions';
import i18n from '../../i18n';
import { Languages } from '../../constants/Constants';

export const changeLocale = (lang: string) => {
    i18n.changeLanguage(lang);
    SettingsHandler.SetLocaleLocalstorage(lang);
    setRTL(lang === Languages.ar);
    return {
        type: CHANGE_LOCALE,
        payload: lang,
    };
};
export const SwapBackDropVisibility = (isvisible: boolean) => {
    return {
        type: SWAP_BACK_DROP_VISIBILITY,
        payload: isvisible,
    };
};
export const SwapModalVisibility = (notificationmodel: any) => {
    return {
        type: SWAP_MODAL_VISIBILITY,
        payload: notificationmodel,
    };
};

export const ShowExpireAlert = (expired: any) => {
    return {
        type: SHOW_EXPIRE_ALERT,
        payload: expired,
    };
};

export const SetApiResponse = (response: any) => {
    return {
        type: SET_API_RESPONSE,
        payload: response,
    };
};
