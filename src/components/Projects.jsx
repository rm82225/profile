import { useState, useRef, useEffect } from 'react'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  const projectsRef = useRef(null)
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A fully responsive e-commerce website with product listings, cart functionality, and secure checkout.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 2,
      title: 'Portfolio for Photographer',
      category: 'wordpress',
      image: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Custom WordPress theme for a professional photographer with gallery and booking system.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'Task Management App',
      category: 'app',
      image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'A productivity application for managing tasks, projects and team collaboration.',
      technologies: ['React', 'Redux', 'Firebase', 'Material UI'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Modern website for a local restaurant featuring menu, reservations and online ordering.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 5,
      title: 'Real Estate Listings',
      category: 'wordpress',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Property listing website for a real estate agency with property search and agent profiles.',
      technologies: ['WordPress', 'PHP', 'JavaScript', 'Google Maps API'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
    {
      id: 6,
      title: 'Weather Dashboard',
      category: 'app',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      description: 'Interactive weather dashboard showing forecast data with beautiful visualizations.',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com',
    },
  ]
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const projectCards = entry.target.querySelectorAll('.project-card')
            projectCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-in')
              }, 150 * index)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [filter]) // Re-run when filter changes
  
  return (
    <section id="projects" className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p>Showcasing some of my recent work</p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex gap-4 flex-wrap justify-center">
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'all' ? 'bg-primary text-white' : 'bg-background-alt'}`}
              onClick={() => setFilter('all')}
            >
              All Projects
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'web' ? 'bg-primary text-white' : 'bg-background-alt'}`}
              onClick={() => setFilter('web')}
            >
              Websites
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'app' ? 'bg-primary text-white' : 'bg-background-alt'}`}
              onClick={() => setFilter('app')}
            >
              Web Apps
            </button>
            <button 
              className={`px-4 py-2 rounded-full ${filter === 'wordpress' ? 'bg-primary text-white' : 'bg-background-alt'}`}
              onClick={() => setFilter('wordpress')}
            >
              WordPress
            </button>
          </div>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card opacity-0">
              <img 
                src={project.image}
                alt={project.title}
                className="project-img"
              />
              <div className="project-overlay">
                <h3 className="project-title">{project.title}</h3>
                <p className="mb-2">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="project-tech-item">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveLink} target="_blank" rel="noopener" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener" className="project-link">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects