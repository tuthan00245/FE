import {
    AccountInfo,
    Cart,
    CheckOut,
    Home,
    Login,
    Product,
    ProductDetail,
    Register,
    WishList
} from '../pages'

const publicRoutes = [
    {path: '/', component: Home},
    

    {path: '/shop/product', component: Product},
    {path: '/shop/checkout', component: CheckOut},
    {path: '/shop/cart', component: Cart},
    {path: '/shop/wishlist', component: WishList},
    {path: '/shop/products/:id', component: ProductDetail},
    
    
    {path: '/account/:pathname', component: AccountInfo},
];

const restrictRoutes=[
    {path: '/sign_in', component: Login},
    {path: '/sign_up', Component: Register}
]

export {publicRoutes,restrictRoutes};
