import React from 'react'
import ComplaintsPolicy from './Content'
export const metadata = {
  title: 'Complaints Policy -International Conference on Gender Equality, Women Empowerment & Entrepreneurship',
  description: 'Join ICGEWEE 2025 in Singapore. A 2-day multidisciplinary conference bringing together 1000+ academics and professionals from 50+ countries for cutting-edge research in applied science, engineering, and management.',
  keywords: ['ICGEWEE', 'applied science conference', 'engineering conference', 'management conference', 'academic conference Singapore', 'research conference 2025'],
  alternates: {
    canonical: 'https://www.ICGEWEE.org/complaints-policy',
  },
  openGraph: {
    title: 'ICGEWEE 2025 - International Conference on Gender Equality, Women Empowerment & Entrepreneurship',
    description: 'Join ICGEWEE 2025 in Singapore. A premier academic conference featuring 30+ workshops and global researchers.',
   
    type: 'website',
    locale: 'en_US',
    site_name: 'ICGEWEE 2025',
  },
}

function page() {
  return (
    <div>
      <ComplaintsPolicy/>
    </div>
  )
}

export default page
