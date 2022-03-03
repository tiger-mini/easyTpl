import Me from '../views/me/index';
import Home from '../views/home/index';

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/me',
        name: 'me',
        component: Me
    },
    {
        path: '/report',
        name: 'report',
        component: () => import('../views/report/index')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about/index')
    }
]
