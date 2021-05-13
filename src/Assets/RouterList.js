import {AppImages} from './Images';
export const routerList = [
  {
    id: 11,
    title: 'home',
    route: 'Home',
    icon: AppImages.route_Home_selected,
  },
  {
    id: 12,
    title: 'stores',
    route: 'AllStores',
    icon: AppImages.store_menu_icon,
  },
  {
    id: 12,
    title: 'daily_deals',
    route: 'AllDeals',
    icon: AppImages.store_menu_icon,
  },
  {
    id: 13,
    title: 'my_account',
    member_access: true,
    icon: AppImages.route_UserDashboard_selected,
    child_routes: [
      {
        id: 14,
        title: 'my_account',
        is_parent_first: true,
        icon: AppImages.route_UserDashboard_selected,
      },
      {
        id: 15,
        title: 'overview',
        route: 'UserDashboard',
        icon: AppImages.route_UserDashboard_selected,
      },
      {
        id: 16,
        title: 'cashback_activities',
        icon: AppImages.cashback_activities,
        route: 'Clicks',
      },
      {
        id: 17,
        title: 'cashback_payment',
        icon: AppImages.cashback_payment,
        route: 'CashbackPayment',
      },
      {
        id: 18,
        title: 'missing_cashback',
        icon: AppImages.missing_cashback,
        route: 'MissingClaims',
      },
      {
        id: 19,
        title: 'fav',
        route: 'Favorites',
        icon: AppImages.favorite,
      },
      {
        id: 20,
        title: 'refer_n_earn',
        icon: AppImages.refer_n_earn_nav_icon,
        route: 'ReferNEarn',
      },
      {
        id: 21,
        title: 'share_n_earn',
        icon: AppImages.share_n_earn_icon,
        route: 'ShareNEarn',
      },
      {
        id: 22,
        title: 'account_settings',
        icon: AppImages.account_settings_icon,
        route: 'AccountSettings',
      },
    ],
  },
  {
    id: 23,
    title: 'categories',
    // route: 'UserDashboard',
    icon: AppImages.all_cat_nav_icon,
    child_routes: [
      {
        id: 24,
        title: 'categories',
        is_parent_first: true,
        // route: 'UserDashboard',
        icon: AppImages.all_cat_nav_icon,
      },
      {
        id: 25,
        title: 'store_categories',
        route: 'AllStoreCategories',
        icon: AppImages.store_cat_nav_icon,
      },
      {
        id: 26,
        title: 'coupon_categories',
        route: 'AllCouponCategories',
        icon: AppImages.offer_cat_nav_icon,
      },
      {
        id: 27,
        title: 'deal_categories',
        route: 'AllDealsCategories',
        icon: AppImages.offer_cat_nav_icon,
      },
    ],
  },
  {
    id: 28,
    title: 'refer_n_earn',
    route: 'ReferNEarn',
    icon: AppImages.refer_n_earn_nav_icon,
  },
  {
    id: 29,
    title: 'share_n_earn',
    route: 'ShareNEarn',
    icon: AppImages.share_n_earn_icon,
  },
  {
    id: 30,
    title: 'about_us',
    icon: AppImages.about_us_nav_icon,
    child_routes: [
      {
        id: 31,
        title: 'about_us',
        is_parent_first: true,
        icon: AppImages.about_us_nav_icon,
      },
      {
        id: 32,
        title: 'about_company',
        route: 'AboutUs',
        icon: AppImages.about_us_nav_icon,
      },
      {
        id: 33,
        title: 'privacy_policy',
        route: 'PrivacyPolicy',
        icon: AppImages.privacy_policy_nav_icon,
      },
      {
        id: 34,
        title: 'terms_of_use',
        route: 'TermsOfUse',
        icon: AppImages.terms_nav_icon,
      },
    ],
  },
  {
    id: 35,
    title: 'help',
    icon: AppImages.help_nav_icon,
    child_routes: [
      {
        id: 36,
        title: 'help',
        icon: AppImages.help_nav_icon,
        is_parent_first: true,
      },
      {
        id: 37,
        title: 'how_it_works',
        route: 'HowItWorks',
        icon: AppImages.hiw_nav_icon,
      },
      {
        id: 38,
        title: 'faqs',
        route: 'FAQs',
        icon: AppImages.help_nav_icon,
      },
      {
        id: 39,
        title: 'contact_us',
        route: 'ContactUs',
        icon: AppImages.contact_us_nav_icon,
      },
    ],
  },
  // {
  //   id: 40,
  //   title: 'change_language',
  //   route: 'LanguageSelect',
  //   icon: AppImages.change_language_1,
  // },
  {
    id: 41,
    title: 'log_out',
    member_access: true,
    icon: AppImages.log_out_nav_icon,
  },
];

const NavList = [
  {
    id: 111,
    title: 'cashback_activities',
    image: AppImages.cashback_activities,
    route: 'Clicks',
  },
  {
    id: 222,
    title: 'cashback_payment',
    image: AppImages.cashback_payment,
    route: 'CashbackPayment',
  },
  {
    id: 333,
    title: 'missing_cashback',
    image: AppImages.missing_cashback,
    route: 'MissingClaims',
  },
  {
    id: 444,
    title: 'fav',
    route: 'Favorites',
    image: AppImages.favorite,
  },
  {
    id: 555,
    title: 'refer_n_earn',
    image: AppImages.refer_n_earn_nav_icon,
    route: 'ReferNEarn',
  },
  {
    id: 666,
    title: 'share_n_earn',
    image: AppImages.share_n_earn_icon,
    route: 'ShareNEarn',
  },
  {
    id: 999,
    title: 'account_settings',
    image: AppImages.account_settings_icon,
    route: 'AccountSettings',
  },
  {
    id: 777,
    title: 'faqs',
    image: AppImages.help_nav_icon,
    route: 'FAQs',
  },
  {
    id: 888,
    title: 'contact_us',
    route: 'ContactUs',
    image: AppImages.contact_us_nav_icon,
  },
  {
    id: 1000,
    title: 'log_out',
    image: AppImages.log_out_nav_icon,
  },
];

const UserRoutes = [
  {
    id: 1111,
    title: 'clicks',
    route: 'Clicks',
  },
  {
    id: 2222,
    title: 'shopping',
    route: 'Shopping',
  },
  {
    id: 3333,
    title: 'referral',
    route: 'Referral',
  },
  {
    id: 4444,
    title: 'bonus',
    route: 'Bonus',
  },
  {
    id: 5555,
    title: 'cashback_payment_history',
    route: 'CashbackPaymentHistory',
  },
  {
    id: 6666,
    title: 'cashback_payment',
    route: 'CashbackPayment',
  },
  {
    id: 7777,
    title: 'create_new_claim',
    route: 'CreateClaim',
  },
  {
    id: 8888,
    title: 'personal_information',
    route: 'personal_information',
  },
  {
    id: 9999,
    title: 'change_password',
    route: 'change_password',
  },
  {
    id: 10000,
    title: 'email',
    route: 'email',
  },
  {
    id: 10001,
    title: 'mobile_number',
    route: 'mobile_number',
  },
  {
    id: 10002,
    title: 'view_all_claims',
    route: 'MissingClaims',
  },
  {
    id: 10003,
    title: 'your_referral_activities',
    route: 'ReferralActivities',
  },
  {
    id: 10004,
    title: 'invited_users',
    route: 'ReferralInvites',
  },
  {
    id: 10005,
    title: 'refer_n_earn',
    route: 'ReferNEarn',
  },
  {
    id: 10006,
    title: 'share_n_earn_history',
    route: 'ShareNEarnHistory',
  },
  {
    id: 10007,
    title: 'share_n_earn',
    route: 'ShareNEarn',
  },
  {
    id: 10008,
    title: 'view_all_claims',
    route: 'MissingClaims',
  },
];

export const get_nav_list = required_routes => {
  return NavList.filter(function (element) {
    return this.indexOf(element.id) !== -1;
  }, required_routes);
};

export const get_user_internal_nav_list = required_routes => {
  return UserRoutes.filter(function (element) {
    return this.indexOf(element.id) !== -1;
  }, required_routes);
};

export const get_route_name = slug => {
  const routes = {
    'all-stores': 'AllStores',
    'daily-deals': 'AllDeals',
    'all-store-categories': 'AllStoreCategories',
    'all-coupon-categories': 'AllCouponCategories',
    'coupon-category': 'CouponCatDetails',
    'store-category': 'StoreCatDetail',
    store: 'StoreDetails',
  };
  return routes[slug];
};

export const ModalRoutes = [
  {
    id: 101,
    title: 'Contact Us',
    route: 'ContactUs',
    image: AppImages.contactUs,
  },
  {
    id: 101,
    title: 'Terms of Use',
    route: 'TermsOfUse',
    image: AppImages.termsOfUse,
  },
  {
    id: 101,
    title: 'Privacy Policy',
    route: 'PrivacyPolicy',
    image: AppImages.privacyPolicy,
  },
  {
    id: 101,
    title: 'Rate Us',
    route: 'RateUs',
    image: AppImages.rateUs,
  },
  {
    id: 101,
    title: 'Join Us on Telegram',
    route: 'Telegram',
    image: AppImages.telegram,
  },
];
