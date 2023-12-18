import { setRTL } from '@fluentui/react';
import {
    CHANGE_LOCALE,
    SWAP_BACK_DROP_VISIBILITY,
    SWAP_MODAL_VISIBILITY,
    SHOW_EXPIRE_ALERT,
    SET_API_RESPONSE,
} from '../StoreCommon/actions';
import { IReducerAction } from '../StoreCommon/Contract/BaseModel/IReducerAction';
import { ISettingsState } from '../StoreCommon/Contract/Setting/SettingsState';
import i18n from '../../i18n';
import { Languages, Directions } from '../../constants/Constants';
import ResponseDTO from '../../Logic/Models/Response/ResponseDTO';

const SettingsState = {
    currentLang: {
        lang: '',
        isRtl: false,
        dir: '',
    },
    loading: false,
    expired: false,
    ApiResponse: new ResponseDTO(),
};

const IsRtlLanguage = (lang: string): boolean => {
    return lang === Languages.ar;
};

export default (
    state: ISettingsState = SettingsState,
    action: IReducerAction
) => {
    switch (action.type) {
        case CHANGE_LOCALE: {
            if (state.currentLang.lang === action.payload) {
                return state;
            }
            const isRtl = IsRtlLanguage(action.payload);
            setRTL(isRtl);
            i18n.changeLanguage(action.payload);
            return {
                ...state,
                currentLang: {
                    lang: action.payload,
                    isRtl,
                    dir: action.payload === Languages.ar ? Directions.RTL : Directions.LTR,
                },
            };
        }
        case SWAP_BACK_DROP_VISIBILITY: {
            return { ...state, loading: action.payload };
        }
        case SWAP_MODAL_VISIBILITY: {
            return { ...state, modal: action.payload };
        }
        case SHOW_EXPIRE_ALERT: {
            return { ...state, expired: action.payload };
        }
        case SET_API_RESPONSE: {
            return { ...state, ApiResponse: action.payload };
        }
        default:
            return { ...state };
    }
};
