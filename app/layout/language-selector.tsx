'use client';

import i18n from '@/i18n';
import { useTranslation } from 'next-i18next';
import { useEffect } from 'react';
import { ChangeLanguage } from '../redux/language/actions';

const LanguageSelector = () => {
  const { t } = useTranslation('common');

  const changeLanguage = (lng: any) => {
    ChangeLanguage(lng);
  };

  return (
    <div>
      {i18n.language.startsWith('ar') && (
        <button onClick={() => changeLanguage('en')}>{t('language')}</button>
      )}
      {i18n.language.startsWith('en') && (
        <button onClick={() => changeLanguage('ar')}>{t('language')}</button>
      )}
    </div>
  );
};

export default LanguageSelector;
