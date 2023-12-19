'use client';

import i18n from '@/i18n';
import { DatePicker, DatesUtil } from '@pilot/components';
import { Label } from '@fluentui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation(['common']);
  const today = new Date();
  const [date, setDate] = useState<Date | undefined>(today);
  return (
    <div>
      <DatePicker
        label={t('date')}
        placeholder="__/__/____"
        value={date}
        firstWeekOfYear={1}
        showMonthPickerAsOverlay
        allowTextInput
        onSelectDate={(_dt: any) => {
          setDate(_dt ?? undefined);
          return true;
        }}
        maxDate={new Date()}
      />
      <br />
      <Label>
        Local Date:{' '}
        {DatesUtil.getLocalizedDateTime(
          'DateTime',
          today,
          i18n.language,
          false,
          true,
          true,
        )}
      </Label>
      <br />
      <Label>
        UTC Date:{' '}
        {DatesUtil.getLocalizedDateTime(
          'DateTime',
          today,
          i18n.language,
          true,
          true,
          true,
        )}
      </Label>
      <br />
      <Label>
        Cairo Date:{' '}
        {DatesUtil.getCairoTime(
          today,
          i18n.language,
          'Cairo',
          false,
          true,
        )}
      </Label>
    </div>
  );
}
