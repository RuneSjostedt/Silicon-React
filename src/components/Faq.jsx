import React from 'react'
import FaqIcon from '../assets/images/faq-icon-msg.svg'

const Faq = () => {
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
                <div className="faq-card">
                    <button className="accordion">
                        <h4>Is any of my personal information stored in the App?</h4>
                        <div id="accordion-btn" className="btn-circle"><i className="fa-regular fa-angle-down fa-sm"></i></div>
                    </button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                </div>
                <div className="faq-card">
                    <button className="accordion">
                        <h4>What formats can I download my transaction history in?</h4>
                        <div id="accordion-btn-1" className="btn-circle"><i className="fa-regular fa-angle-down fa-sm"></i></div>
                    </button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                </div>
                <div className="faq-card">
                    <button className="accordion">
                        <h4>Can I schedule future transfers?</h4>
                        <div id="accordion-btn" className="btn-circle"><i className="fa-regular fa-angle-down fa-sm"></i></div>
                    </button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                </div>
                    <div className="faq-card">
                    <button className="accordion">
                        <h4>When can I use Banking App services?</h4>
                        <div id="accordion-btn" className="btn-circle"><i className="fa-regular fa-angle-down fa-sm"></i></div>
                    </button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                </div>
                <div className="faq-card">
                    <button className="accordion">
                        <h4>Can I create my own password that is easy for me to remember?</h4>
                        <div id="accordion-btn" className="btn-circle"><i className="fa-regular fa-angle-down fa-sm"></i></div>
                    </button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                </div>
                <div className="faq-card">
                    <button className="accordion">
                        <h4>What happens if I forget or lose my password?</h4>
                        <div id="accordion-btn" className="btn-circle"><i className="fa-regular fa-angle-down fa-sm"></i></div>
                    </button>
                    <div className="panel">
                        <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
</section>
  )
}

export default Faq