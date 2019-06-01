import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index/index'
import Center from '@/components/center/center'
import Teacthers from '@/components/teacthers/teacthers'
import CallMe from '@/components/callme/callme'
import History from '@/components/history/history'
import studentStyle from '@/components/studentStyle/studentStyle'
import News from '@/components/news/news'
import NewsList1 from '@/components/news/newsList/newslist1'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/center',
            name: 'Center',
            component: Center
        },
        {
            path: '/teacther',
            name: 'Teacthers',
            component: Teacthers
        },
        {
            path: '/callme',
            name: 'CallMe',
            component: CallMe
        },
        {
            path: '/history',
            name: 'History',
            component: History
        },
        {
            path: '/student',
            name: 'studentStyle',
            component: studentStyle
        },
        {
            path: '/news',
            name: 'News',
            component: News
        },
        {
            path: '/newslist1',
            name: 'NewsList1',
            component: NewsList1
        },
    ]
})