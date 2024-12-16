// import React from 'react'

import Testimonial from './Testimonial'
import { useEffect, useState } from 'react'
import StarRating from './StarRating'
const Clientreviews = () => {
    const [testimonials, setTestimonials] = useState([])

    const getTestimonials = async () => {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials')
      const data = await res.json()
      setTestimonials(data)
    }

    useEffect(() => {
      getTestimonials()
    }, [])

  return (
    <section id="client-reviews">
    <div className="container">
        <div className="review-headline">
            <h2>Clients are </h2>
            <h2>Loving Our App</h2>
        </div>
        <div className="review-cards">
        
        {
          testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} item={testimonial}/>
        ))
        }

     

        </div>
    </div>
</section>
  )
}

export default Clientreviews