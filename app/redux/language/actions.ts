
'use client';

import i18n from '@/i18n';
/* eslint-disable import/no-extraneous-dependencies */

import { setRTL } from '@fluentui/react';
import { useTranslation } from 'next-i18next';
import { CHANGE_LANGUAGE, LanguageActionTypes } from './types';

export const isRtlLanguage = (lang: string): boolean => {
  return lang === 'ar';
};

// TypeScript infers that this function is returning SendMessageAction
export function ChangeLanguage(language: string): LanguageActionTypes {
  // const { i18n } = useTranslation();
  
  setRTL(isRtlLanguage(language), true);
  i18n.changeLanguage(language);
  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
}
