/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import {
    Checkbox,
    ChoiceGroup,
    DatePicker,
    Dropdown,
    Label,
    MessageBar,
    TextField,
    Toggle,
    VirtualizedComboBox,
    CommandBar,
    IComboBox,
    ICommandBarItemProps,
    Icon,
    IDropdownOption,
    MessageBarType,
    PrimaryButton,
    Spinner,
    SpinnerSize,
} from '@fluentui/react';
import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next'
import { DialogSample } from './components/DialogSample';
import './styles/TrainingSample.scss';

interface Props {
    type?: string;
}

export default function ControlsForm(props: Props) {
    const { type } = props;
    const { t } = useTranslation(['controls-form', 'common']);
    const [value, setValue] = useState('test77777777777777777777777');
    const [checked, setChecked] = useState(false);
    const [choice, setChoice] = useState('1');
    const [powerOn, setPowerOn] = useState(false);
    const [date, setDate] = useState<Date | undefined>(undefined);
    const [timeFrom, setTimeFrom] = useState<string>();
    const [hideMessageBar, setHideMessageBar] = useState(false);
    const [spinnerOn, setSpinnerOn] = useState(false);
    const [hideDialog, setHideDialog] = useState(true);
    const [selectedKey, setSelectedKeys] = useState<string>();
    const [selectedChoices, setSelectedChoices] = useState<string[]>([]);
    const [docTypes, setDocTypes] = useState<IDropdownOption[]>();

    const _onSelectActiveFromTime = (time: string | undefined): void => {
        setTimeFrom(time);
    };

    const choices = [
        {
            key: '1',
            text: t('choice1'),
        },
        {
            key: '2',
            text: t('choice2'),
        },
        {
            key: '3',
            text: t('choice3'),
        },
        {
            key: '4',
            text: t('choice4'),
        },
    ];

    const onSelectChoices = (
        event: React.FormEvent<IComboBox>,
        item?: IDropdownOption
    ): void => {
        if (item) {
            setSelectedChoices(
                item.selected
                    ? [...selectedChoices, item.key as string]
                    : selectedChoices.filter((key) => key !== item.key)
            );
        }
    };

    const getCommandBar = () => {
        const reportItem = {
            key: 'ReportIssue',
            text: t('common:save'),
            iconProps: { iconName: 'FileComment' },
            onClick: () => {
                alert('Save');
            },
        };
        const exportItem = {
            key: 'Export',
            text: t('common:cancel'),
            iconProps: { iconName: 'DownloadDocument' },
            onClick: () => {
                alert('Cancel');
            },
        };
        const receiptCommandBar: ICommandBarItemProps[] = [
            {
                key: 'ClearFilters',
                className: 'commandAction',
                text: t('common:clearFilters'),
                iconProps: { iconName: 'ClearFilter' },
                disabled: true,
                onClick: () => {},
            },
        ];
        receiptCommandBar.push(exportItem);
        receiptCommandBar.push(reportItem);
        return receiptCommandBar;
    };

    useEffect(() => {
        const types = [
            {
                key: '1',
                text: t('invoice'),
            },
            {
                key: '2',
                text: t('receipt'),
            },
        ];
        setDocTypes(types);
    }, []);

    return (
        <div className="container">
            <div className="line">
                <div className="box">
                    <Label required>{t('common:save')}</Label>
                    <br />
                    <Icon iconName="save" />
                </div>
                <div className="box">
                    <TextField
                    id='test'
                        label={t('name')}
                        required
                        value={value}
                        onChange={(_e: any, v: any) => {
                            setValue(v ?? '');
                        }}
                    />
                </div>
                <div className="box" />
                <div className="box" />
            </div>
            <div className="line">
                <div className="box" />
                <div className="box">
                    <Checkbox
                        label={t('confirm')}
                        checked={checked}
                        onChange={(_: any, chk: any) => {
                            setChecked(chk ?? false);
                            alert(chk ? 'True' : 'False');
                        }}
                    />
                </div>
                <div className="box">
                    <ChoiceGroup
                        selectedKey={choice}
                        options={choices}
                    />
                </div>
                <div className="box">
                    <Toggle
                        label={t('powerStatus')}
                        checked={powerOn}
                        offText={t('off')}
                        onText={t('on')}
                        onChange={(_: any, v: any) => {
                            setPowerOn(v ?? false);
                        }}
                    />
                </div>
            </div>
            <div className="line">
                <div className="box">
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
                </div>
                <div className="box">
                    <Label>{t('time')}</Label>
                </div>
                
                <div className="box">
                    <PrimaryButton
                        text={t('showDialog')}
                        onClick={() => {
                            setHideDialog(false);
                        }}
                    />
                    {!hideDialog && (
                        <DialogSample
                            onClose={() => setHideDialog(true)}
                            onSave={(v) => setValue(v)}
                            hidden={hideDialog}
                            content={value}
                        />
                    )}
                </div>


                <div className="box">
                    <PrimaryButton
                        text={t(spinnerOn ? 'stop' : 'start')}
                        iconProps={{ iconName: spinnerOn ? 'pause' : 'play' }}
                        onClick={() => {
                            setSpinnerOn(!spinnerOn);
                        }}
                    >
                        {spinnerOn && <Spinner size={SpinnerSize.medium} />}
                    </PrimaryButton>
                </div>
            </div>
            <div className="line">
                <div className="box">
                    <MessageBar
                        messageBarType={MessageBarType.error}
                        hidden={hideMessageBar}
                        onDismiss={() => setHideMessageBar(true)}
                    >
                        {t('error')}
                    </MessageBar>
                    <br />
                    <MessageBar
                        messageBarType={MessageBarType.blocked}
                        hidden={hideMessageBar}
                        onDismiss={() => setHideMessageBar(true)}
                        truncated
                        isMultiline={false}
                        className="blocked"
                    >
                        <div>
                            <b>{t('shortMessage')}</b>
                            {t('longMessage')}
                        </div>
                    </MessageBar>
                    <br />
                    <MessageBar
                        messageBarType={MessageBarType.info}
                        hidden={hideMessageBar}
                        onDismiss={() => setHideMessageBar(true)}
                    >
                        {t('info')}
                    </MessageBar>
                    <br />
                    <MessageBar
                        messageBarType={MessageBarType.success}
                        hidden={hideMessageBar}
                        onDismiss={() => setHideMessageBar(true)}
                    >
                        {t('success')}
                    </MessageBar>
                </div>
                <div className="box">
                    <Dropdown
                        label={t('type')}
                        required
                        selectedKey={selectedKey}
                        options={docTypes ?? []}
                        multiSelect={false}
                    />
                </div>
                <div className="box">
                    <VirtualizedComboBox
                        multiSelectDelimiter=","
                        multiSelect
                        selectedKey={selectedChoices}
                        autoComplete="on"
                        required
                        options={choices ?? []}
                        label={t('type')}
                        onChange={(_e: React.FormEvent<IComboBox>, option: any) => {
                            onSelectChoices(_e, option);
                        }}
                    />
                </div>
                <div className="box">
                    <CommandBar farItems={getCommandBar()} items={[]} />
                </div>
            </div>
        </div>
    );
};
