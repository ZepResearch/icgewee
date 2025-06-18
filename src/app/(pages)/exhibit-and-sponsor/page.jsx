import React from 'react'
import ExhibitSponsorPage from './Content'
import { exhibitSponsorMetadata } from '@/components/metadata'

export const metadata = exhibitSponsorMetadata
function page() {
  return (
    <div><ExhibitSponsorPage/></div>
  )
}

export default page