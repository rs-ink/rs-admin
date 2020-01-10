/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import BarChartIcon from '@material-ui/icons/BarChart';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';

export default [
    {
        id: "app.menu.pages",
        title: 'Pages',
        pages: [
            {
                id: "app.menu.overview",
                title: 'Overview',
                href: '/management/acts',
                icon: HomeIcon
            },
            {
                title: "楼盘活动",
                href: '/act',
                icon: BarChartIcon,
                children: [
                    {
                        title: "楼盘列表",
                        href: '/management/acts'
                    },
                    {
                        title: "新增楼盘",
                        href: '/management/act/create'
                    },
                ]
            }]
    },
    {
        title: '管理',
        pages: [
            {
                title: '退出',
                href: '/auth/logout',
                icon: PresentToAllIcon
            },
        ]
    }
];
