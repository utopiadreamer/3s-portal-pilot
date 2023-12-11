'use client';
import { Dialog, TextField, DefaultButton, Icon, PrimaryButton } from '@fluentui/react';
import React, { FC, useState } from 'react';
import '../styles/TrainingSample.scss';

interface Props {
    onClose: () => void;
    onSave: (v: string) => void;
    hidden: boolean;
    content: string;
}

export const DialogSample: FC<Props> = (props: Props) => {
    const { onClose, onSave, hidden, content } = props;
    const [value, setValue] = useState(content);

    return (
        <Dialog
            containerClassName="sampleDialog"
            hidden={hidden}
            onDismiss={() => {
                onClose();
            }}
            minWidth={375}
            maxWidth={375}
            title={(
                <>
                    <Icon iconName="Preview" /> <span>{'dialogSample'}</span>
                </>
              )}
        >
            <TextField
                label={'name'}
                required
                value={value}
                onChange={(_e: any, v: any) => {
                    setValue(v ?? '');
                }}
            />
        </Dialog>
    );
};
