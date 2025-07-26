import type { AppRoute } from './types'

// Import các components
import Home from '../views/Home.vue'
import Guides from '../views/Guides.vue'
import Community from '../views/Community.vue'
import Resources from '../views/Resources.vue'
import Contact from '../views/Contact.vue'

// Import các pages chi tiết
import Tournaments from '../pages/Tournaments.vue'
import History from '../pages/History.vue'
import HallOfFame from '../pages/HallOfFame.vue'
import Administration from '../pages/Administration.vue'
import Teams from '../pages/Teams.vue'

export const routes: AppRoute[] = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'GOS - Dream League Soccer'
        }
    },
    {
        path: '/guides',
        name: 'Guides',
        component: Guides,
        meta: {
            title: 'Hướng dẫn - DLS Blog'
        }
    },
    {
        path: '/community',
        name: 'Community',
        component: Community,
        meta: {
            title: 'Cộng đồng - DLS Blog'
        }
    },
    {
        path: '/resources',
        name: 'Resources',
        component: Resources,
        meta: {
            title: 'Tài nguyên - DLS Blog'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: 'Liên hệ - DLS Blog'
        }
    },
    // Routes cho các trang chi tiết
    {
        path: '/tournaments',
        name: 'Tournaments',
        component: Tournaments,
        meta: {
            title: 'Hệ thống giải đấu - DLS Blog'
        }
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        meta: {
            title: 'Lịch sử ra đời - DLS Blog'
        }
    },
    {
        path: '/hall-of-fame',
        name: 'HallOfFame',
        component: HallOfFame,
        meta: {
            title: 'Bảng vàng - DLS Blog'
        }
    },
    {
        path: '/administration',
        name: 'Administration',
        component: Administration,
        meta: {
            title: 'Ban quản trị - DLS Blog'
        }
    },
    {
        path: '/teams',
        name: 'Teams',
        component: Teams,
        meta: {
            title: 'Đội tuyển - DLS Blog'
        }
    },
    // Route 404
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound.vue'),
        meta: {
            title: 'Không tìm thấy - DLS Blog'
        }
    }
]
