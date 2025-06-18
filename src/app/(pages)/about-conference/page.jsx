import React from 'react'
import AboutConference from './Content'
import { aboutConferenceMetadata } from '@/components/metadata'

export const metadata = aboutConferenceMetadata
function page() {
  return (
    <div><AboutConference/></div>
  )
}

export default page