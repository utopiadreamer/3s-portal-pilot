
import { LayoutMenuItem } from '../../models/layout/LayoutMenuItem';


const MenuItems: LayoutMenuItem[] = [
    {
        id: 'home',
        title: 'home',
        icon: 'Home',
        href: '/pages/home'
    },
    {
        id: 'controls',
        title: 'controls',
        icon: 'Home',
        href: '/pages/controls-form'
    },
    {
        id: 'grid',
        title: 'User List',
        icon: 'Home',
        href: '/pages/users-list'
    },
    {
        id: 'dates',
        title: 'dates',
        icon: 'Home',
        href: '/pages/dates-form'
    },
    {
        id: 'users',
        title: 'users with server',
        icon: 'Home',
        href: '/users/server'
    },
    {
        id: 'usersClient',
        title: 'users with client',
        icon: 'Home',
        href: '/users/client'
    },
    {
        id: 'api',
        title: 'api',
        icon: 'Home',
        href: '/pages/call-api'
    },
    {
        id: 'dashboard',
        title: 'dashboard',
        icon: 'Home',
        href: '/dashboard'
    },
    {
        id: 'validation',
        title: 'validation',
        icon: 'News',
        href: '/pages/validation-form',
        subItems: [
            {
                id: 'SearchCoreTaxpayer',
                icon: 'AppIconDefaultAdd',
                title: 'form-components.RegisterProfile',
                href: '/searchcoretaxpayer',
            },
            {
                id: 'SearchTaxpayer',
                icon: 'SearchAndApps',
                title: 'menu.SearchTaxpayer',
                href: '/searchtaxpayer',
            },
            {
                id: 'SearchUser',
                icon: 'ProfileSearch',
                title: 'menu.SearchUser',
                href: '/searchuser',
            },
        ],    
    }
];
export default MenuItems;