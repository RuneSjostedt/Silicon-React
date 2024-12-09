import React from 'react'
import CheckCircle from '../assets/images/check-circle.svg'
import MoneyGraph from '../assets/images/money-graph.svg'
import ContactCards from '../assets/images/contacts-cards-img.svg'
import CreditCard from '../assets/images/credit-card.svg'
import WalletCard from '../assets/images/wallet-card.svg'


      const Stylei = {
        color: 'white'
      };



const Makeyourmoney = () => {
  return (
    <section id="make-your-money">
    <div className="container">
        <div className="money-text-box">
            <h2>Make your money <br/> transfer simple and clear</h2>
            <div className="p-money">
                <div className="img-para-box">
                    <img src={CheckCircle} alt="checkcircle"/>
                    <p>Banking transactions are free for you</p>
                </div>
                <div className="img-para-box">
                    <img src={CheckCircle} alt="checkcircle"/>
                    <p>No monthly cash commission</p>
                </div>
                <div className="img-para-box">
                    <img src={CheckCircle} alt="checkcircle"/>
                    <p>Manage payments and transactions online</p>
                </div>
            </div>
            <a href="#" className="btn-primary">
                <span>Learn more</span>
                <i className="fa-light fa-arrow-right" style={Stylei}></i>
            </a>
        </div>
        <div className="img-graph">
            <img src={MoneyGraph} alt=""/>
        </div>
        <div className="img-contacts">
            <img src={ContactCards} alt=""/>
        </div>
        <div className="recieve-payments">
            <h2>Receive payment from <br/> international bank details</h2>
            <div className="p-recieve">
                <div className="p-box">
                    <div className="cards-primary"><img src={CreditCard} alt=""/></div>
                    <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
                </div>
                <div className="p-box">
                    <div className="cards-primary"><img src={WalletCard} alt=""/></div>
                    <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
                </div>
            </div>
            <a href="#" className="btn-primary">
                <span>Learn more</span>
                <i className="fa-light fa-arrow-right" style={Stylei}></i>
            </a>
        </div>
    </div>
</section>
  )
}

export default Makeyourmoney