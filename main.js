const { createApp } = Vue

// objekt pre jednotlive stranky
import Home from "./pages/Home.js"
import PostForm from "./pages/PostForm.js"

// definicia route - url adries
const routes = [
    { name: 'home', path: "/", component: Home },
    { name: 'postForm', path: "/post/form", component: PostForm },
]

// definicia/vytvorenie router
const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp({
    setup() {
        return {}
    }
}).use(router).mount('#app')
