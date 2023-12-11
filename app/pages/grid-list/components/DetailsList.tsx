import React, { FC } from "react";
import { useTranslation } from 'next-i18next'

interface Props {}

export const DetailsList: FC<Props> = (props: Props) => {
  const { t } = useTranslation('common')
  return <div>{t('save')}</div>;
};
