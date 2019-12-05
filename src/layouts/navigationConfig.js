/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React from 'react';
import {colors} from '@material-ui/core';
import BarChartIcon from '@material-ui/icons/BarChart';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ChatIcon from '@material-ui/icons/ChatOutlined';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import FolderIcon from '@material-ui/icons/FolderOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LockOpenIcon from '@material-ui/icons/LockOpenOutlined';
import MailIcon from '@material-ui/icons/MailOutlined';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import PeopleIcon from '@material-ui/icons/PeopleOutlined';
import PersonIcon from '@material-ui/icons/PersonOutlined';
import ReceiptIcon from '@material-ui/icons/ReceiptOutlined';
import SettingsIcon from '@material-ui/icons/SettingsOutlined';
import ViewModuleIcon from '@material-ui/icons/ViewModule';

import {Label} from 'components';

export default [
    {
        id: "app.menu.pages",
        title: 'Pages',
        pages: [
            {
                id: "app.menu.overview",
                title: 'Overview',
                href: '/overview',
                icon: HomeIcon
            },
            {
                id: "app.menu.dashboard",
                title: 'Dashboards',
                href: '/dashboards',
                icon: DashboardIcon,
                children: [
                    {
                        id: "app.menu.dashboard.default",
                        title: 'Default',
                        href: '/dashboards/default'
                    },
                    {
                        id: "app.menu.dashboard.analytics",
                        title: 'Analytics',
                        href: '/dashboards/analytics'
                    }
                ]
            },
            {
                id: 'app.menu.management',
                title: 'Management',
                href: '/management',
                icon: BarChartIcon,
                children: [
                    {
                        id: 'app.menu.management.customers',
                        title: 'customers',
                        href: '/management/customers'
                    },
                    {
                        id: 'app.menu.management.summary',
                        title: 'summary',
                        href: '/management/customers/1/summary'
                    },
                    {
                        id: 'app.menu.management.projects',
                        title: 'Projects',
                        href: '/management/projects'
                    },
                    {
                        id: 'app.menu.management.orders',
                        title: 'Orders',
                        href: '/management/orders'
                    },
                    {
                        id: 'app.menu.management.order.detail',
                        title: 'Order Details',
                        href: '/management/orders/1'
                    }
                ]
            },
            {
                id: 'app.menu.social',
                title: 'Social Feed',
                href: '/social-feed',
                icon: PeopleIcon
            },
            {
                id: 'app.menu.social.profile',
                title: 'Profile',
                href: '/profile',
                icon: PersonIcon,
                children: [
                    {
                        id: 'app.menu.social.profile.timeline',
                        title: 'Timeline',
                        href: '/profile/1/timeline'
                    },
                    {
                        id: 'app.menu.social.profile.connections',
                        title: 'Connections',
                        href: '/profile/1/connections'
                    },
                    {
                        id: 'app.menu.social.profile.projects',
                        title: 'Projects',
                        href: '/profile/1/projects'
                    },
                    {
                        id: 'app.menu.social.profile.reviews',
                        title: 'Reviews',
                        href: '/profile/1/reviews'
                    }
                ]
            },
            {
                id: 'app.menu.projects',
                title: 'Project',
                href: '/projects',
                icon: FolderIcon,
                children: [
                    {
                        id: 'app.menu.projects.browse',
                        title: 'Browse',
                        href: '/projects'
                    },
                    {
                        id: 'app.menu.projects.create',
                        title: 'Create',
                        href: '/projects/create'
                    },
                    {
                        id: 'app.menu.projects.overview',
                        title: 'Overview',
                        href: '/projects/1/overview'
                    },
                    {
                        id: 'app.menu.projects.files',
                        title: 'Files',
                        href: '/projects/1/files'
                    },
                    {
                        id: 'app.menu.projects.activity',
                        title: 'Activity',
                        href: '/projects/1/activity'
                    },
                    {
                        id: 'app.menu.projects.subscribers',
                        title: 'Subscribers',
                        href: '/projects/1/subscribers'
                    }
                ]
            },
            {
                id: 'app.menu.invoices',
                title: 'Invoice',
                href: '/invoices/1',
                icon: ReceiptIcon
            },
            {
                id: 'app.menu.board',
                title: 'Kanban Board',
                href: '/kanban-board',
                icon: ListAltIcon
            },
            {
                id: 'app.menu.mail',
                title: 'Mail',
                href: '/mail',
                icon: MailIcon,
                label: () => (
                    <Label
                        color={colors.red[500]}
                        shape="rounded"
                    >
                        2
                    </Label>
                )
            },
            {
                id: 'app.menu.chat',
                title: 'Chat',
                href: '/chat',
                icon: ChatIcon,
                label: () => (
                    <Label
                        color={colors.red[500]}
                        shape="rounded"
                    >
                        4
                    </Label>
                )
            },
            {
                id: 'app.menu.calendar',
                title: 'Calendar',
                href: '/calendar',
                icon: CalendarTodayIcon,
                label: () => <Label color={colors.green[500]}>New</Label>
            },
            {
                id: 'app.menu.settings',
                title: 'Settings',
                href: '/settings',
                icon: SettingsIcon,
                children: [
                    {
                        id: 'app.menu.settings.general',
                        title: 'General',
                        href: '/settings/general'
                    },
                    {
                        id: 'app.menu.settings.subscription',
                        title: 'Subscription',
                        href: '/settings/subscription'
                    },
                    {
                        id: 'app.menu.settings.notifications',
                        title: 'Notifications',
                        href: '/settings/notifications'
                    },
                    {
                        id: 'app.menu.settings.security',
                        title: 'Security',
                        href: '/settings/security'
                    }
                ]
            },
            {
                id: 'app.menu.auth',
                title: 'Authentication',
                href: '/auth',
                icon: LockOpenIcon,
                children: [
                    {
                        id: 'app.menu.auth.login',
                        title: 'Login',
                        href: '/auth/login'
                    },
                    {
                        id: 'app.menu.auth.register',
                        title: 'Register',
                        href: '/auth/register'
                    }
                ]
            },
            {
                id: 'app.menu.errors',
                title: 'Errors',
                href: '/errors',
                icon: ErrorIcon,
                children: [
                    {
                        id: 'app.menu.errors.401',
                        title: 'Error 401',
                        href: '/errors/error-401'
                    },
                    {
                        id: 'app.menu.errors.404',
                        title: 'Error 404',
                        href: '/errors/error-404'
                    },
                    {
                        id: 'app.menu.errors.500',
                        title: 'Error 500',
                        href: '/errors/error-500'
                    }
                ]
            }
        ]
    },
    {
        id: 'app.menu.support',
        title: 'Support',
        pages: [
            {
                id: 'app.menu.support.presentation',
                title: 'Presentation',
                href: '/presentation',
                icon: PresentToAllIcon
            },
            {
                id: 'app.menu.support.started',
                title: 'Getting started',
                href: '/getting-started',
                icon: CodeIcon
            },
            {
                id: 'app.menu.support.changelog',
                title: 'Changelog',
                href: '/changelog',
                icon: ViewModuleIcon,
                label: () => <Label color={colors.blue['500']}>v1.2.0</Label>
            }
        ]
    }
];
