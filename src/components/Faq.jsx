// import React from 'react'
import { useEffect, useState } from 'react'
import FaqIcon from '../assets/images/faq-icon-msg.svg'
import AccordionItem from './AccordionItem'

const Faq = () => {
    const [accordions, setAccordions] = useState([])

   const fetchFaq = async () => {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq')
        const data = await res.json()
        setAccordions(data)
   }

    useEffect(() =>{
        fetchFaq()
    }, [])

  return (
    <section id="faq">
    <div className="container">
        <div className="faq-section-1">
            <div className="faq-headline">
                <h2>Any questions? <br/> Check out the FAQs</h2>
            </div>
            <p className="faq-p">Still have unanswered questions and need to get <br/>in touch?</p>
                <div className="faq-contact-cards">
                    <div className="faq-contact-card">
                        <img src={FaqIcon} alt="" className="faq-img"/>
                        <p>Still have  questions?</p>
                        <a className="contact-box-1" href="">
                        <span>contact us</span>
                        <i className="fa-regular fa-arrow-right fa-xs"></i>
                         </a>
                    </div>
                    <div className="faq-contact-card">
                        <img src={FaqIcon} alt="" className="faq-img"/>
                        <p>Don't like phone calls?</p>
                        <a className="contact-box-2" href="">
                        <span>contact us</span>
                        <i className="fa-regular fa-arrow-right fa-xs"></i>
                         </a>
                    </div>
                </div>
        </div>
        <div className="faq-section-2">
            <div className="faq-cards">

            {
                accordions.map(item => (
                    <AccordionItem key={item.id} item={item}/>
                ))
            }

          

            </div>
        </div>
    </div>
</section>
  )
}

export default Faq