import { ChevronDown } from 'lucide-react'
import AnimatedText from './AnimatedText'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToWork = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-[#030712] pt-16 border-b border-transparent dark:border-zinc-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedText 
          text="FIRDAUS MANALU" 
          el="h1"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white mb-8"
        />
        <div className="w-16 h-0.5 bg-black dark:bg-white mx-auto mb-8"></div>
        <AnimatedText
          text="Software Developer & Cybersecurity Enthusiast"
          el="h2"
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
        />
        <AnimatedText
          text="Undergraduate IT student crafting secure, scalable applications with modern technologies. Passionate about building digital solutions that make a difference."
          el="p"
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        />
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 mb-16">
          <button 
            onClick={scrollToWork}
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-300"
          >
            EXPLORE MY WORK
          </button>
          <button 
            onClick={scrollToContact}
            className="text-black dark:text-white hover:underline flex items-center space-x-2"
          >
            <span>GET IN TOUCH</span>
            <span>→</span>
          </button>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">SCROLL</span>
          <button onClick={scrollToAbout} className="animate-bounce">
            <ChevronDown size={24} className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero