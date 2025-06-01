import { useRef, useEffect } from 'react'

const About = () => {
  const skillsRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const skills = entry.target.querySelectorAll('.skill-item')
            skills.forEach((skill, index) => {
              setTimeout(() => {
                skill.classList.add('scale-in')
              }, 100 * index)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 }
    )
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [])
  
  const skills = [
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'PHP', level: 75 },
    { name: 'Laravel', level: 70 },
    { name: 'WordPress', level: 85 },
  ]
  
  return (
    <section id="about" className="py-20 bg-background-alt">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
          <p>Get to know me and my skills</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Professional headshot" 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who am I?</h3>
            <p className="mb-4">
              I'm a passionate Freelance Web Developer with 3 years of experience crafting beautiful, functional websites and web applications. 
              With a focus on creating seamless user experiences, I help businesses and individuals establish a strong online presence.
            </p>
            <p className="mb-6">
              My journey began at a SaaS startup where I honed my skills in frontend development. Since then, I've worked with various clients 
              across different industries, helping them achieve their digital goals through custom web solutions.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">My Experience</h3>
            <ul className="mb-6">
              <li className="mb-2">• 2 years freelancing for clients across e-commerce, education, and healthcare</li>
              <li className="mb-2">• 1 year at a SaaS company developing web applications</li>
              <li>• Collaborated with startups to establish their online brand identity</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="skills-container" ref={skillsRef}>
              {skills.map((skill, index) => (
                <div key={index} className="skill-item opacity-0 mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-background rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${skill.level}%`, transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn btn-primary mt-6">Get In Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About