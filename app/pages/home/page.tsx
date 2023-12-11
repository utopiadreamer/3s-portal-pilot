'use client';

import React from 'react';
import { useTranslation } from 'next-i18next'

export default function Page() {
  const { t } = useTranslation('common')
  return <div>{t('cancel')}</div>;
}

