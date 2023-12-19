'use client';

import { Form, TextField, ValidationType } from '@pilot/components';
import { PrimaryButton } from '@fluentui/react';
import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Page() {
  const { t } = useTranslation('common');

  const form = new Form({});
  
  const [formData, setFormData] = useState({
    nameOpt: '',
    nameReq: '',
    emailOpt: '',
    emailReq: ''
  });
  const [isFormValid, setIsFormValid] = useState<boolean>(form.isValid);

  form.onValidityChanged = (isValid: boolean) => setIsFormValid(isValid);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <TextField
        label={t('Optional Name')}
        name="nameOpt"
        value={formData.nameOpt}
        onChange={handleInputChange}
      />
      <TextField
        label={t('Required Name')}
        name="nameReq"
        value={formData.nameReq}
        onChange={handleInputChange}
        required
        validations={[ValidationType.Required]}
        validationForm={form}
      />
      <TextField
        label={t('Optional Email')}
        name="emailOpt"
        value={formData.emailOpt}
        onChange={handleInputChange}
        validations={[ValidationType.Email]}
        validationForm={form}
      />
      <TextField
        label={t('Required Email')}
        name="emailReq"
        value={formData.emailReq}
        onChange={handleInputChange}
        required
        validations={[ValidationType.Required, ValidationType.Email]}
        validationForm={form}
      />
      {/* <DatesRange /> */}
      <PrimaryButton
        text="submit"
        style={{ background: isFormValid ? 'blue' : 'gray', color: 'white' }}
        disabled={!isFormValid}
        onClick={() => alert(JSON.stringify(formData))}
      />
    </div>
  );
}
