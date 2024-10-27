import React from 'react'
import { Footer, Navigation, Savedbar } from 'components/common/layout/'
import Episode_card from '@/components/common/Episode_card'
import {
  FOSS_section,
  Hero,
  Latest_ep,
  Logos,
  Newsletter_section,
} from '@/components/landing'
import EpisodeSection from '@/components/landing/Episode_section'
import Popular_ep_sec from '@/components/landing/popular_epi_sec'

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Popular_ep_sec />
      <Latest_ep />
      <EpisodeSection />
      <FOSS_section />
      <Episode_card />
      <Logos />
      <Newsletter_section />
      <Footer />
    </div>
  )
}

export default Home
