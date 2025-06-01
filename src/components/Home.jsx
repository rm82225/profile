import { useEffect, useRef } from 'react'

const Home = () => {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const cta = ctaRef.current

    title.classList.add('slide-in-left')
    
    setTimeout(() => {
      subtitle.classList.add('slide-in-right')
    }, 300)
    
    setTimeout(() => {
      cta.classList.add('fade-in')
    }, 600)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 ref={titleRef} className="opacity-0">
              <span className="text-primary">RM</span> WEBDEVS
            </h1>
            <p ref={subtitleRef} className="text-xl mb-6 text-secondary opacity-0">
              Crafting beautiful, responsive websites and web applications that deliver exceptional user experiences.
            </p>
            <div ref={ctaRef} className="flex gap-4 opacity-0">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-outline">Contact Me</a>
            </div>
          </div>
          <div className="hero-image opacity-0 slide-in-right">
            <img 
              src="https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Hero image showing a developer workspace" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home