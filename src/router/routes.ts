import type { AppRoute } from './types'

import Administration from '../pages/Administration.vue'
import HallOfFame from '../pages/HallOfFame.vue'
import History from '../pages/History.vue'
import Teams from '../pages/Teams.vue'
import Achievement from '../pages/teams/Achievement.vue'
import Coach from '../pages/teams/Coach.vue'
import HistoryTeam from '../pages/teams/HistoryTeam.vue'
import Player from '../pages/teams/Player.vue'
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
        path: '/giai-dau',
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
        path: '/bang-vang',
        name: 'HallOfFame',
        component: HallOfFame,
        meta: {
            title: 'Bảng vàng - GOS DLS'
        }
    },
    {
        path: '/quan-tri',
        name: 'Administration',
        component: Administration,
        meta: {
            title: 'Ban quản trị - GOS DLS'
        }
    },
    {
        path: '/doi-tuyen',
        name: 'Teams',
        component: Teams,
        meta: {
            title: 'Đội tuyển - GOS DLS'
        }
    },
    {
        path: '/doi-tuyen/lich-su',
        name: 'HistoryTeam',
        component: HistoryTeam,
        meta: {
            title: 'Lịch sử tuyển GOS'
        }
    },
    {
        path: '/doi-tuyen/thanh-tich',
        name: 'Achievement',
        component: Achievement,
        meta: {
            title: 'Thành tích tuyển GOS'
        }
    },
    {
        path: '/doi-tuyen/ban-huan-luyen',
        name: 'Coach',
        component: Coach,
        meta: {
            title: 'Ban huấn luyện GOS'
        }
    },
    {
        path: '/doi-tuyen/tuyen-thu',
        name: 'Player',
        component: Player,
        meta: {
            title: 'Tuyển thủ GOS'
        }
    }
]
