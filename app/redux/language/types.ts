export interface Language {
  lang: string;
  langIso4: string;
  isRtl: boolean;
}

export interface LanguageState {
  language: Language;
}

export const CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: string;
}

export type LanguageActionTypes = ChangeLanguageAction;
