import React from 'react'
import AppImg from '../assets/images/app-img.svg'
import CreditCard from '../assets/images/credit-card.svg'
import SheildCard from '../assets/images/shield-card.svg'
import BarsGraphic from '../assets/images//bars-graphic-card.svg'
import CommunicationCard from '../assets/images//communication-card.svg'
import WalletCard from '../assets/images/wallet-card.svg'
import HappyCard from '../assets/images/happy-card.svg'

function Appfeatures() {
  return (
    <section id="Appfeatures">
    <div className="container">
        <div className="img-apps">
            <img src={AppImg} alt="app img"/>
        </div>
        <div className="appcontent">
            <div className="featureheadline">
                <h2>App Features</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas.
                    Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at
                    nec lacus.</p>
            </div>
            <div className="featurelist">
                <div className="featurebox">
                    <div className="cards-primary"><img src={CreditCard} alt=""/></div>
                    <div className="feature-text-box">
                        <h3>Easy Payments</h3>
                        <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
                    </div>
                </div>
                <div className="featurebox">
                    <div className="cards-primary"><img src={SheildCard} alt=""/></div>
                    <div className="feature-text-box">
                        <h3>Data Security</h3>
                        <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non. </p>
                    </div>
                </div>
                <div className="featurebox">
                    <div className="cards-primary"><img src={BarsGraphic} alt=""/></div>
                    <div className="feature-text-box">
                        <h3>Cost Statistics</h3>
                        <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
                    </div>
                </div>
                <div className="featurebox">
                    <div className="cards-primary"><img src={CommunicationCard} alt=""/></div>
                    <div className="feature-text-box">
                        <h3>Support 24/7</h3>
                        <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris</p>
                    </div>
                </div>
                <div className="featurebox">
                    <div className="cards-primary"><img src={WalletCard} alt=""/></div>
                    <div className="feature-text-box">
                        <h3>Regular Cashback</h3>
                        <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.
                        </p>
                    </div>
                </div>
                <div className="featurebox">
                    <div className="cards-primary"><img src={HappyCard} alt=""/></div>
                    <div className="feature-text-box">
                        <h3>Top Standards</h3>
                        <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis
                            dolor arcu.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Appfeatures