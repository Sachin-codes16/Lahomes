import path from 'path';
import React from 'react'
import { lazy } from 'react';
const Dashboard = lazy(() => import('../app/(admin)/dashboards/analytics/page.jsx'));
const PropertyAddPage = lazy(() => import('../app/(admin)/property/add/page.jsx'));
const PropertyGridPage = lazy(() => import('../app/(admin)/property/grid/page.jsx'));
const ChatPage = lazy(() => import('../app/(admin)/messages/page.jsx'));
const ListViewPage = lazy(() => import('../app/(admin)/agents/list-view1/components/page.jsx'));
const CustomerAddPage = lazy(() => import('../app/(admin)/customers/add/page.jsx'));
const ListViewPage1 = lazy(() => import('../app/(admin)/agents/list-view/components/page.jsx'));
const GridViewPage = lazy(() => import('../app/(admin)/agents/grid-view/page.jsx'));
const Homepage = React.lazy(() => import('../components/homepage.jsx'));
const Navigate = React.lazy(() => import('react-router-dom').then(module => ({ default: module.Navigate })));
const AuthSignIn = lazy(() => import('@/app/(other)/auth/sign-in/page'));
const AuthSignUp = lazy(() => import('@/app/(other)/auth/sign-up/page'));
const ResetPassword = lazy(() => import('@/app/(other)/auth/reset-password/page'));
const LockScreen = lazy(() => import('@/app/(other)/auth/lock-screen/page'));
const ComingSoon = lazy(() => import('@/app/(other)/coming-soon/page'));
const Maintenance = lazy(() => import('@/app/(other)/maintenance/page'));
const Error404 = lazy(() => import('@/app/(other)/(error-pages)/404-error/page'));
const TenantReport = lazy(() => import('../app/(admin)/Report/Tenants Report/Components/Tenants report.jsx'));
const initialRoutes = [{
  path: '/',
  name: 'root',
  element: <Navigate to="/dashboards" />
}];
  
const routes = [{
  path: '/dashboards',
  name: 'Analytics',
  element: <Dashboard />
},
{
  path: '/landlord/add-property',
  name: 'Add Property',
  element: <PropertyAddPage />
},

{
  path: '/landlord/property-grid',
  name: 'Property Grid',
  element: <PropertyGridPage />
},
{
  path: '/messages',
  name: 'Messages',
  element: <ChatPage />
},
{
  path: '/list',
  name: 'tenants  List View',
  element: <ListViewPage />
},

{
  path: '/add leads',
  name: 'Add leads',
  element: <CustomerAddPage />
},
{
  path: '/landlord-list',
  name: 'landlord List',
  element: <ListViewPage1 />
},
{
  path: '/Tenants',
  name: 'Tenants  Dashboard',
  element: <GridViewPage />
},
{
  path: '/Tenants-report',
  name: 'Tenants  Report',
  element: <TenantReport />
}
];

export const authRoutes = [{
  name: 'Sign In',
  path: '/auth/sign-in',
  element: <AuthSignIn />
}, {
  name: 'Sign Up',
  path: '/auth/sign-up',
  element: <AuthSignUp />
}, {
  name: 'Reset Password',
  path: '/auth/reset-password',
  element: <ResetPassword />
}, {
  name: 'Lock Screen',
  path: '/auth/lock-screen',
  element: <LockScreen />
}, {
  name: '404 Error',
  path: '/404-error',
  element: <Error404 />
}, {
  name: 'Maintenance',
  path: '/maintenance',
  element: <Maintenance />
}, {
  name: 'Coming Soon',
  path: '/coming-soon',
  element: <ComingSoon />
}];
export const appRoutes = [...initialRoutes, ...routes, authRoutes];