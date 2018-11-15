import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'

Vue.use(Router)

// 路由懒加载
const Index = (resolve) => {
    import('@/components/index/index').then((module) => {
        resolve(module)
    })
};

const Search = (resolve) => {
    import('@/components/search/search').then((module) => {
        resolve(module)
    })
};

const Login = (resolve) => {
    import('@/components/login/login').then((module) => {
        resolve(module)
    })
};

const LoginPhone = (resolve) => {
    import('@/components/login/loginphone').then((module) => {
        resolve(module)
    })
};

const Register = (resolve) => {
    import('@/components/login/register').then((module) => {
        resolve(module)
    })
};

const Video = (resolve) => {
    import('@/components/video/video').then((module) => {
        resolve(module)
    })
};

const Song = (resolve) => {
    import('@/components/song/song').then((module) => {
        resolve(module)
    })
};

const Release = (resolve) => {
    import('@/components/release/release').then((module) => {
        resolve(module)
    })
};


export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/index',
            component: Index
        },
        {
            path: '/index',
            component: Index
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/loginphone',
            component: LoginPhone
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/video',
            component: Video
        },
        {
            path: '/song',
            component: Song
        },
        {
            path: '/release',
            component: Release
        }
    ]
})





