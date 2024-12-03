import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import SignupView from '@/views/signupView.vue'
import SelectAccountTypeView from '@/views/SelectAccountTypeView.vue'
import AddStudentDetailsView from '@/views/StudentSetupViews/AddSudentDetailsView.vue'
import ConrifmOtpView from '@/views/StudentSetupViews/confirmOtpView.vue'
import AccountCreatedSuccess from '@/components/AccountCreatedSuccess.vue'
import AccountView from '@/views/AccountView/AccountView.vue';
import TransferView from '@/views/TransferView.vue'
import BeneficiaryView from '@/views/BeneficiaryView.vue'
import HistoryView from '@/views/HistoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: WelcomeView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView,
    },
    {
      path: '/accountType',
      name: 'selectAccountTypeView',
      component: SelectAccountTypeView,
    },
    {
      path: '/student/addDetails',
      name: 'addStudentDetailsView',
      component: AddStudentDetailsView
    },
    {
      path: '/student/confirmOtp',
      name: 'confirmStudentOtpView',
      component: ConrifmOtpView
    },
    {
      path: '/student/account/success',
      name: 'studentAccountSuccessView',
      component: AccountCreatedSuccess
    },
    {
      path: '/account/view',
      name: 'accountView',
      component: AccountView
    },
    {
      path: '/account/transfer',
      name: 'transferView',
      component: TransferView
    },
    {
      path: '/account/beneficiaries',
      name: 'Beneficiaries',
      component: BeneficiaryView
    },
    {
      path: '/account/history',
      name: 'History',
      component: HistoryView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
})

export default router
