import { useRef, useEffect } from 'react'

const Testimonials = () => {
  const testimonialsRef = useRef(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const testimonials = entry.target.querySelectorAll('.testimonial')
            testimonials.forEach((testimonial, index) => {
              setTimeout(() => {
                testimonial.classList.add('fade-in')
              }, 200 * index)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    
    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current)
    }
    
    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current)
      }
    }
  }, [])
  
  const testimonials = [
    {
      id: 1,
      content: "Working with this developer was an absolute pleasure. They understood our vision perfectly and delivered a website that exceeded our expectations. Their attention to detail and responsiveness to feedback made the process smooth and enjoyable.",
      name: "Sarah Johnson",
      position: "CEO, EcoStyle Boutique",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 2,
      content: "Our e-commerce site needed a complete overhaul, and this developer delivered exactly what we needed. The new design is beautiful, user-friendly, and our sales have increased by 40% since launch. I highly recommend their services.",
      name: "Michael Rodriguez",
      position: "Marketing Director, TechGear",
      avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      id: 3,
      content: "As a photographer, I needed a portfolio website that would showcase my work in the best possible way. The custom solution provided was perfect - clean, elegant, and really puts the focus on my images. I couldn't be happier!",
      name: "Emily Chen",
      position: "Professional Photographer",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
  ]
  
  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <div className="section-title">
          <h2>Client Testimonials</h2>
          <p>What my clients say about working with me</p>
        </div>
        
        <div ref={testimonialsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial opacity-0">
              <div className="testimonial-content">
                <svg className="text-primary mb-4" width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.9999 9.00001C11.9999 4.58173 9.41813 1 4.99986 1V5C7.20898 5 7.99986 6.79086 7.99986 9.00001H4.99986V17H11.9999V9.00001Z" />
                  <path d="M22.9999 9.00001C22.9999 4.58173 20.4181 1 15.9999 1V5C18.209 5 18.9999 6.79086 18.9999 9.00001H15.9999V17H22.9999V9.00001Z" />
                </svg>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="testimonial-avatar"
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials