
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
        title: 'grid',
        icon: 'Home',
        href: '/pages/grid-list'
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