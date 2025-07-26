import type { AppRoute } from './types'

// Import các components
import Community from '../views/Community.vue'
import Contact from '../views/Contact.vue'
import Guides from '../views/Guides.vue'
import Home from '../views/Home.vue'
import Resources from '../views/Resources.vue'

// Import các pages chi tiết
import Administration from '../pages/Administration.vue'
import HallOfFame from '../pages/HallOfFame.vue'
import History from '../pages/History.vue'
import Teams from '../pages/Teams.vue'
import Tournaments from '../pages/Tournaments.vue'

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
            title: 'Giải đấu - GOS DLS'
        }
    },
    {
        path: '/history',
        name: 'History',
        component: History,
        meta: {
            title: 'Lịch sử - GOS DLS'
        }
    },
    {
        path: '/hall-of-fame',
        name: 'HallOfFame',
        component: HallOfFame,
        meta: {
            title: 'Bảng vàng - GOS DLS'
        }
    },
    {
        path: '/administration',
        name: 'Administration',
        component: Administration,
        meta: {
            title: 'Ban quản trị - GOS DLS'
        }
    },
    {
        path: '/teams',
        name: 'Teams',
        component: Teams,
        meta: {
            title: 'Đội tuyển - GOS DLS'
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
