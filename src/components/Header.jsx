import { useState, useEffect } from 'react'

const Header = ({ theme, toggleTheme, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#" className="logo">
          <span className="text-primary">Web</span>Developer
        </a>

        <nav>
          <ul className="nav-links">
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}>Home</a></li>
            <li><a href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</a></li>
            <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</a></li>
            <li><a href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</a></li>
            <li><a href="#testimonials" className={`nav-link ${activeSection === 'testimonials' ? 'active' : ''}`}>Testimonials</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</a></li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <svg xmlns="http://www.w3.org/2000/svg\" width="24\" height="24\" viewBox="0 0 24 24\" fill="none\" stroke="currentColor\" strokeWidth="2\" strokeLinecap="round\" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            )}
          </button>

          <div 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} 
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-menu-links">
          <li><a href="#home" className={`mobile-menu-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</a></li>
          <li><a href="#about" className={`mobile-menu-link ${activeSection === 'about' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>About</a></li>
          <li><a href="#projects" className={`mobile-menu-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
          <li><a href="#services" className={`mobile-menu-link ${activeSection === 'services' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Services</a></li>
          <li><a href="#testimonials" className={`mobile-menu-link ${activeSection === 'testimonials' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" className={`mobile-menu-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Header