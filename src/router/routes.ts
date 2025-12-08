import type { AppRoute } from './types'

import LoginPage from '../components/auth/LoginPage.vue'
import RegisterPage from '../components/auth/RegisterPage.vue'
import Administration from '../pages/Administration.vue'
import HallOfFame from '../pages/HallOfFame.vue'
import History from '../pages/History.vue'
import QuanLySuKien from '../pages/organizations/admin/events/QuanLySuKien.vue'
import TrangChu from '../pages/organizations/admin/TrangChu.vue'
import QuanLyNguoiDung from '../pages/organizations/admin/users/QuanLyNguoiDung.vue'
import Teams from '../pages/Teams.vue'
import Achievement from '../pages/teams/Achievement.vue'
import Coach from '../pages/teams/Coach.vue'
import HistoryTeam from '../pages/teams/HistoryTeam.vue'
import Match from '../pages/teams/Match.vue'
import Player from '../pages/teams/Player.vue'
import YouthTeam from '../pages/teams/YouthTeam.vue'
import Tournaments from '../pages/Tournaments.vue'
import Home from '../views/Home.vue'

export const routes: AppRoute[] = [
    {
        path: '/quan-tri/trang-chu',
        name: 'TrangChu',
        component: TrangChu,
        meta: {
            title: 'GOS - Dream League Soccer'
        }
    },
    {
        path: '/quan-tri/nguoi-dung',
        name: 'QuanLyNguoiDung',
        component: QuanLyNguoiDung,
        meta: {
            title: 'GOS - Dream League Soccer'
        }
    },
    {
        path: '/quan-tri/su-kien',
        name: 'QuanLySuKien',
        component: QuanLySuKien,
        meta: {
            title: 'GOS - Dream League Soccer'
        }
    },
    {
        path: '/dang-ky-tai-khoan',
        name: 'RegisterPage',
        component: RegisterPage,
        meta: {
            title: 'ROUTE.TITLE.REGISTER'
        }
    },
    {
        path: '/dang-nhap',
        name: 'LoginPage',
        component: LoginPage,
        meta: {
            title: 'ROUTE.TITLE.LOGIN'
        }
    },
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
            title: 'ROUTE.TITLE.TOUR'
        }
    },
    {
        path: '/lich-su',
        name: 'History',
        component: History,
        meta: {
            title: 'ROUTE.TITLE.HISTORY'
        }
    },
    {
        path: '/bang-vang',
        name: 'HallOfFame',
        component: HallOfFame,
        meta: {
            title: 'ROUTE.TITLE.BOARD'
        }
    },
    {
        path: '/quan-tri',
        name: 'Administration',
        component: Administration,
        meta: {
            title: 'ROUTE.TITLE.ADMIN'
        }
    },
    {
        path: '/doi-tuyen',
        name: 'Teams',
        component: Teams,
        meta: {
            title: 'ROUTE.TITLE.TEAM'
        }
    },
    {
        path: '/doi-tuyen/lich-su',
        name: 'HistoryTeam',
        component: HistoryTeam,
        meta: {
            title: 'ROUTE.TITLE.HISTORY_TEAM'
        }
    },
    {
        path: '/doi-tuyen/thanh-tich',
        name: 'Achievement',
        component: Achievement,
        meta: {
            title: 'ROUTE.TITLE.ACHIEVEMENT'
        }
    },
    {
        path: '/doi-tuyen/ban-huan-luyen',
        name: 'Coach',
        component: Coach,
        meta: {
            title: 'ROUTE.TITLE.COACH'
        }
    },
    {
        path: '/doi-tuyen/tuyen-thu',
        name: 'Player',
        component: Player,
        meta: {
            title: 'ROUTE.TITLE.PLAYER'
        }
    },
    {
        path: '/doi-tuyen/tran-dau',
        name: 'Match',
        component: Match,
        meta: {
            title: 'ROUTE.TITLE.MATCH'
        }
    },
    {
        path: '/doi-tuyen/doi-tre',
        name: 'YouthTeam',
        component: YouthTeam,
        meta: {
            title: 'ROUTE.TITLE.YOUTH_TEAM'
        }
    }
]
