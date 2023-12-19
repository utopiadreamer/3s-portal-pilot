/* eslint-disable react-hooks/exhaustive-deps */
import {
    Language,
    DetailsList,
    FilterType,
    FilteredColumn,
    SortedColumnInfo,
    DatesUtil
} from '@pilot/components';
import {
    DetailsListLayoutMode,
    IOverflowSetItemProps,
    SelectionMode,
} from '@fluentui/react';
import React, { FC, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { UserDto } from '@/app/models/users/User';
import Link from 'next/link';

interface GridProps {
    reload?: boolean;
    useFilters?: boolean;
    currentLanguage: Language;
    forceResetFilter?: boolean;
    onReload: () => void;
    onGridBind?: (complaintsNum: UserDto[] | undefined) => void;
    onGridChanged?: (filteredColumns: FilteredColumn[]) => void;
    onActionClick: (action: string, item: UserDto) => void;
    loadData: (pn: number, ps: number, filterCols?: FilteredColumn[], sortedCol?: SortedColumnInfo) => void;
}

const UsersList: FC<GridProps> = (
    props: GridProps
) => {
    const { t } = useTranslation(['complaints']);
    const {
        currentLanguage: currentLanguageProps,
        useFilters,
        forceResetFilter,
        reload,
        onReload,
        onGridBind,
        onGridChanged,
        onActionClick,
        loadData
    } = props;
    const [filters, setFilters] = useState<FilteredColumn[]>([]);
    const [pageSize, setPageSize] = useState<number>(10);
    const [metaData, setMetaData] = useState<UserDto>();
    const [currentPage, setCurrentPage] = useState<number>(0);
    const [enableShimmer, setEnableShimmer] = useState<boolean>(false);
    const [currentLanguage, setCurrentLanguage] =
        useState<Language>(currentLanguageProps);
    const [complaints, setComplaints] = useState<
        UserDto[] | undefined
    >();

    const prevForceResetFilterValue = useRef<boolean | undefined>(false);

    const issueTypes = [
        {
            key: '1',
            text: t('TotalAmountNotMatched'),
        },
        {
            key: '2',
            text: t('Other'),
        },
    ];

    const statuses = [
        { key: 'Pending', text: t('status.pending') },
        { key: 'Retracted', text: t('status.retracted') },
        { key: 'Resolved', text: t('status.resolved') },
        { key: 'Cancelled', text: t('status.cancelled') },
    ];

    const gridColumns = [
        {
            key: 'sent',
            name: 'sent',
            nameAsJsx: <>{t('sent')}</>,
            fieldName: 'sent',
            minWidth: 55,
            maxWidth: 55,
            isRowHeader: true,
            isResizable: true,
            isSorted: true,
            isSortedDescending: true,
            allowSorting: true,
            data: 'string',
            isPadded: true,
            onRender: ({ birthDate }: UserDto) => {
                return (
                    <div className="horizontal">
                        <span>
                            <div className="griCellTitleGray">
                                {DatesUtil.getLocalizedDateTime(
                                    'Date',
                                    birthDate,
                                    currentLanguageProps.langIso4
                                )}
                            </div>
                            <div className="griCellSubTitle">
                                {DatesUtil.getLocalizedDateTime(
                                    'Time',
                                    birthDate,
                                    currentLanguageProps.langIso4
                                )}
                            </div>
                        </span>
                    </div>
                );
            },
        },
        {
            key: 'id',
            name: t('id'),
            fieldName: 'id',
            filterOption: useFilters
                ? {
                      placeholder: '',
                      useFilterButton: false,
                      type: FilterType.Text,
                      fieldNames: [
                          {
                              fieldName: 'id',
                              displayName: t('id'),
                          },
                      ],
                  }
                : undefined,
            minWidth: 120,
            maxWidth: 120,
            isRowHeader: true,
            isResizable: true,
            onRender: ({ id }: UserDto) => {
                return (
                    <div className="issueLinkDetails">
                            {id}
                    </div>
                );
            },
        },
        {
            key: 'sentBy',
            name: t('sentBy'),
            fieldName: 'sentBy ',
            minWidth: 120,
            maxWidth: 120,
            isRowHeader: true,
            isResizable: true,
            onRender: ({
                firstname,
                lastname,
                id
            }: UserDto) => {
                return (
                    <Link href={`${'/users/client/'}${id}`}>{`${firstname} ${lastname}`}</Link>
                );
            },
        },
        {
            key: 'name',
            name: 'name ',
            nameAsJsx: (
                <>
                    {t('name')}
                    {' /'}
                    <br />
                    {t('issueType')}
                </>
            ),
            fieldName: 'name',
            isRowHeader: true,
            isResizable: true,
            minWidth: 140,
            maxWidth: 140,
            filterOption: {
                placeholder: '',
                type: FilterType.Custom,
                useFilterButton: false,
                fieldNames: [
                    {
                        fieldName: 'name',
                        displayName: t('name'),
                        type: FilterType.Text,
                    },
                    {
                        fieldName: 'issueType',
                        displayName: t('issueType'),
                        type: FilterType.Enum,
                        options: issueTypes,
                    },
                ],
            }
        },
        {
            key: 'context',
            name: t('context'),
            fieldName: 'phone',
            isRowHeader: true,
            isResizable: true,
            minWidth: 130,
            maxWidth: 130,
        }
    ];

    const onNbItemPerPageChanged = (nbItemPerPage: number) => {
        setPageSize(nbItemPerPage);
        setCurrentPage(1);
        loadData(1, nbItemPerPage, filters);
        return true;
    };
    const onChanged = (
        pageIndex: number,
        filteredColumns: FilteredColumn[],
        sortedColumn?: SortedColumnInfo
    ) => {
        setFilters(filteredColumns);
        setCurrentPage(pageIndex + 1);
        loadData(pageIndex + 1, pageSize, filteredColumns, sortedColumn);

        if (onGridChanged) onGridChanged(filteredColumns);
        return false;
    };

    const performLoading = () => {
        loadData(currentPage, pageSize, filters);
    };

    useEffect(() => {
        if (currentLanguageProps.lang) {
            setCurrentLanguage(currentLanguageProps);
            if (
                currentLanguage.lang &&
                currentLanguage.lang !== currentLanguageProps.lang
            )
                performLoading();
        }
    }, [currentLanguageProps]);

    useEffect(() => {
        if (reload) {
            performLoading();
        }
    }, [reload]);

    return (
        <DetailsList
            className="complaintsGrid"
            columns={gridColumns ?? []}
            items={complaints}
            selectionMode={SelectionMode.none}
            onChanged={(
                pageIndex: number,
                filteredColumn: FilteredColumn[],
                sortedColumn?: SortedColumnInfo
            ) => {
                // to avoid reload page if forceResetFilter changed from true to false
                if (
                    !(forceResetFilter ?? true) &&
                    prevForceResetFilterValue.current !== forceResetFilter
                ) {
                    prevForceResetFilterValue.current = forceResetFilter;
                    return false;
                }
                onChanged(pageIndex, filteredColumn, sortedColumn);
                prevForceResetFilterValue.current = forceResetFilter;
                return false;
            }}
            forceResetFilter={forceResetFilter}
            layoutMode={DetailsListLayoutMode.justified}
            enableShimmer={!complaints || enableShimmer}
            noItemsPlaceholder={<span>{t('no-records')}</span>}
            onNbItemPerPageChanged={onNbItemPerPageChanged}
            labels={{
                resultPerPage: t('common:nbItemPerPage'),
                totalRecord: t('common:totalRecord'),
            }}
        />
    );
};
export default UsersList;
