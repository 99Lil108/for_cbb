import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        Path:'/index',
        name:'index',
        component:()=>import
    }
]

export default router = createRouter({
    history:createWebHashHistory(),
    routes
})