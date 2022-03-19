import Me from './index';

export default [
    {
        path: '/me',
        name: 'me',
        component: Me
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('./setting')
    }
];
