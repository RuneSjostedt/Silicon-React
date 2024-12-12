// import React from 'react'
import Iphone1 from '../assets/images/iPhone 12-1.svg'
import Iphone2 from '../assets/images/iPhone 12-2.svg'
import Iphone3 from '../assets/images/iPhone 12-how-3.svg'

const Howdoesitwork = () => {
  return (
    <section id="how-does-it-work">
    <div className="container">
        <div className="subheadline-how">
            <h2>How Does It Work?</h2>
        </div>
        <div className="three-mobiles">
            <img src={Iphone1} alt=""/>
            <img src={Iphone2} alt=""/>
            <img src={Iphone3} alt=""/>
        </div>
        <div className="trans-subheadline">
            <h3>Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique </p>
            <p>quisque hac in consectetur condimentum.</p>
        </div>
    </div>
</section>
  )
}

export default Howdoesitwork