import { useState } from 'react'
import { AboutStory } from './components/AboutStory'
import { ContactSection } from './components/ContactSection'
import { FloatingDock } from './components/FloatingDock'
import { Footer } from './components/Footer'
import { GallerySection } from './components/GallerySection'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Preloader } from './components/Preloader'
import { ReviewsSection } from './components/ReviewsSection'
import { StayRooms } from './components/StayRooms'
import { TrekFoodJourney } from './components/TrekFoodJourney'
import { STAY_OPTIONS } from './data/homestayData'

export function App() {
  const [selectedStay, setSelectedStay] = useState(STAY_OPTIONS[0].name)

  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSelectStay = (stayName: string) => {
    setSelectedStay(stayName)
    scrollToContact()
  }

  return (
    <div className="min-h-screen bg-[#0E1B16] text-[#F6F2EA]">
      <Preloader />
      <Navbar />
      <main>
        <Hero onEnquireClick={scrollToContact} />
        <AboutStory />
        <StayRooms onSelectStay={handleSelectStay} />
        <TrekFoodJourney />
        <GallerySection />
        <ReviewsSection />
        <ContactSection preselectedStay={selectedStay} />
      </main>
      <Footer />
      <FloatingDock />
    </div>
  )
}

export default App
