/* eslint-disable react/no-multi-comp */
/* eslint-disable react/display-name */
import React, {lazy} from 'react';
import {Redirect} from 'react-router-dom';

import AuthLayout from './layouts/Auth';
import ErrorLayout from './layouts/Error';
import DashboardLayout from './layouts/Dashboard';
import OverviewView from './views/Overview';
import PresentationView from './views/Presentation';
import {Logout} from 'views/Logout'

const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/management/acts"/>
    },
    {
        path: '/auth',
        component: AuthLayout,
        routes: [
            {
                path: '/auth/login',
                exact: true,
                component: lazy(() => import('views/Login'))
            },
            {
                path: '/auth/register',
                exact: true,
                component: lazy(() => import('views/Register'))
            },
            {
                path: '/auth/logout',
                exact: true,
                component: Logout
            },
            {
                component: () => <Redirect to="/errors/error-404"/>
            }
        ]
    },
    {
        path: '/errors',
        component: ErrorLayout,
        routes: [
            {
                path: '/errors/error-401',
                exact: true,
                component: lazy(() => import('views/Error401'))
            },
            {
                path: '/errors/error-404',
                exact: true,
                component: lazy(() => import('views/Error404'))
            },
            {
                path: '/errors/error-500',
                exact: true,
                component: lazy(() => import('views/Error500'))
            },
            {
                component: () => <Redirect to="/errors/error-404"/>
            }
        ]
    },
    {
        route: '*',
        component: DashboardLayout,
        routes: [
            {
                path: '/management/acts',
                exact: true,
                component: lazy(() => import('views/ActivityList'))
            },
            {
                path: '/management/act/create',
                exact: true,
                component: lazy(() => import('views/ActivityCreate'))
            },
            {
                path: '/management/act/detail',
                exact: true,
                component: lazy(() => import('views/ActivityCreate'))
            },
            {
                path: '/management/orders/:id',
                exact: true,
                component: lazy(() => import('views/ActivityOrderList'))
            },
            {
                path: '/management/projects',
                exact: true,
                component: lazy(() => import('views/ProjectManagementList'))
            },
            {
                path: '/management/orders/:id',
                exact: true,
                component: lazy(() => import('views/OrderManagementDetails'))
            },
            {
                path: '/overview',
                exact: true,
                component: OverviewView
            },
            {
                path: '/presentation',
                exact: true,
                component: PresentationView
            },
            {
                path: '/profile/:id',
                exact: true,
                component: lazy(() => import('views/Profile'))
            },
            {
                path: '/profile/:id/:tab',
                exact: true,
                component: lazy(() => import('views/Profile'))
            },
            {
                path: '/projects/create',
                exact: true,
                component: lazy(() => import('views/ProjectCreate'))
            },
            {
                path: '/projects/:id',
                exact: true,
                component: lazy(() => import('views/ProjectDetails'))
            },
            {
                path: '/projects/:id/:tab',
                exact: true,
                component: lazy(() => import('views/ProjectDetails'))
            },
            {
                path: '/projects',
                exact: true,
                component: lazy(() => import('views/ProjectList'))
            },
            {
                path: '/settings',
                exact: true,
                component: lazy(() => import('views/Settings'))
            },
            {
                path: '/settings/:tab',
                exact: true,
                component: lazy(() => import('views/Settings'))
            },
            {
                path: '/social-feed',
                exact: true,
                component: lazy(() => import('views/SocialFeed'))
            },
            {
                path: '/getting-started',
                exact: true,
                component: lazy(() => import('views/GettingStarted'))
            },
            {
                component: () => <Redirect to="/errors/error-404"/>
            }
        ]
    }
];

export default routes;
