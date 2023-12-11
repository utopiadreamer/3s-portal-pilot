'use client';

import { useTranslation } from 'next-i18next';

const LanguageSelector = () => {
  const { i18n, t } = useTranslation('common');

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
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
