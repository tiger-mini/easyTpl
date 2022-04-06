import Me from './index';

export default [
    {
        path: '/me',
        name: '我',
        component: Me,
    },
    {
        path: '/setting',
        name: '设置',
        component: () => import('./setting'),
    },
];
