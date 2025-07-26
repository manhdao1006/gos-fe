import type { AppRoute } from './types'

import Administration from '../pages/Administration.vue'
import HallOfFame from '../pages/HallOfFame.vue'
import History from '../pages/History.vue'
import Teams from '../pages/Teams.vue'
import Tournaments from '../pages/Tournaments.vue'
import Home from '../views/Home.vue'

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
        path: '/tournaments',
        name: 'Tournaments',
        component: Tournaments,
        meta: {
            title: 'Giải đấu - GOS DLS'
        }
    },
    {
        path: '/lich-su',
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
    }
]
