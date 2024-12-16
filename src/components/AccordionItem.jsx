import React, { useState } from 'react'

const AccordionItem = ({item}) => {
    const [isOpen, SetIsOpen] = useState(false)

    const toggleAccordion = () => {
        SetIsOpen(!isOpen)
    }

  return (
    <div className="faq-card">
    <button className={`accordion ${isOpen ? 'active': ''} `} onClick={toggleAccordion}>
        <h4>{item.title}</h4>
        <div id="accordion-btn" className="btn-circle"><i className={`fa-regular ${isOpen ? 'fa-angle-up fa-sm' : 'fa-angle-down fa-sm'}`}></i></div>
    </button>
    {
        isOpen && (
            <div className={`panel ${isOpen ? 'active': ''} `}>
                <p>{item.content}</p>
            </div>
        )
    }
</div>
  )
}

export default AccordionItem