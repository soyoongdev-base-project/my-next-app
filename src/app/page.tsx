import { Metadata } from 'next'
import Layout from '~/components/layout'

export const metadata: Metadata = {
  title: 'Phụng Nguyên Garment - Thời Trang Cao Cấp và Chất Lượng',
  description:
    'Phụng Nguyên Garment sản xuất và phân phối thời trang cao cấp với chất lượng vượt trội và dịch vụ chuyên nghiệp.',
  keywords: 'Công ty may mặc, thời trang cao cấp, đồng phục công sở, thời trang dạo phố, Phụng Nguyên Garment',
  icons: 'https://phungnguyengarment.vn/assets/company-factory.jpg'
}

export default function Home() {
  return (
    <Layout>
      <>Home page</>
    </Layout>
  )
}
