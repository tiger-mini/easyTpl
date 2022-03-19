export default [
    {
        path: '/me',
        name: 'me',
        component: () => import('./index')
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('./setting')
    }
];
