import { lazy } from 'react'

const AboutPage = lazy(() => import('~/app/about/page'))
const ServicePage = lazy(() => import('~/app/service/page'))
const ProductPage = lazy(() => import('~/app/product/page'))
const PostPage = lazy(() => import('~/app/post/page'))
const CareerPage = lazy(() => import('~/app/career/page'))

export interface RouteType {
  key: string
  name: string
  path: string
  breadcrumb: string
  component: React.LazyExoticComponent<() => JSX.Element> | React.ReactNode | any
}

export const routes: RouteType[] = [
  { key: '1', name: 'Giới thiệu', path: '/about', breadcrumb: 'Giới thiệu', component: AboutPage },
  { key: '2', name: 'Dịch vụ', path: '/service', breadcrumb: 'Dịch vụ', component: ServicePage },
  { key: '3', name: 'Sản phẩm', path: '/product', breadcrumb: 'Sản phẩm', component: ProductPage },
  {
    key: '4',
    name: 'Tin tức & Sự kiện',
    path: '/post',
    breadcrumb: 'Tin tức & Sự kiện',
    component: PostPage
  },
  {
    key: '5',
    name: 'Tuyển dụng',
    path: '/career',
    breadcrumb: 'Tuyển dụng',
    component: CareerPage
  }
]

export default routes
