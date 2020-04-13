const ROUTERS = [
    {
        path: '/', component: "@/layouts/common",
        routes: [
            { path: '/', redirect: '/home'},
            { path: '/home', component: '@/pages/home/home' }
        ]
    }
];




export default ROUTERS;