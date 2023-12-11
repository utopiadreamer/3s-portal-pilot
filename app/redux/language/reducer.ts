import { CHANGE_LANGUAGE, LanguageActionTypes, LanguageState } from './types';
import { isRtlLanguage } from './actions';


const langToIso4 = (lang: string): string => {
  switch (lang) {
    case 'ar':
      return 'ar-EG';
    case 'en':
      return 'en-GB';
    default:
      return 'en-GB';
  }
};
const initialState: LanguageState = {
  language: { lang: '', langIso4: '', isRtl: false },
};

export function languageReducer(
  state = initialState,
  action: LanguageActionTypes
) {
  switch (action.type) {
    case CHANGE_LANGUAGE: {
      if (state.language.lang === action.payload) {
        return state;
      }
      const isRtl = isRtlLanguage(action.payload);
      return {
        ...state,
        language: {
          lang: action.payload,
          langIso4: langToIso4(action.payload),
          isRtl,
        },
      };
    }
    default:
      return state;
  }
}
