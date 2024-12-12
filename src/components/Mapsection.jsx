// import React from 'react'
import GoogleMaps from '../assets/images/googlemaps.svg'
import MapPoint from '../assets/images/map-point.svg'
import CallIcon from '../assets/images/call-icon.svg'
import TimeIcon from '../assets/images/time-icon.svg'
import Facebook from '../assets/images/facebook.svg'
import Twitter from '../assets/images/twitter.svg'
import Instagram from '../assets/images/instagram.svg'
import Youtube from '../assets/images/youtube.svg'


const Mapsection = () => {
  return (
    <section id="map-section">
    <div className="container">
    <div className="container-map">
        <div className="map-section">
            <img src={GoogleMaps} alt="Map" className="map-image"/>
        </div>
        <div className="info-section">
            <div className="medical-center">
                <h2>Medical Center 1</h2>
                <p><img src={MapPoint} alt=""/> 4517 Washington Ave, Manchester, Kentucky 39495</p>
                <p><img src={CallIcon} alt=""/> (406) 555-0120</p>
             
                <ul>
                    <li><img src={TimeIcon} alt=""/>Mon – Fri: 9:00 am – 22:00 pm</li>
                    <li>Sat – Sun: 9:00 am – 20:00 pm</li>
                </ul>
            </div>
            <div className="medical-center">
                <h2>Medical Center 2</h2>
                <p><img src={MapPoint} alt=""/> 2464 Royal Ln, Mesa, New Jersey 45463</p>
                <p><img src={CallIcon} alt=""/> (406) 544-0123</p>
               
                <ul>
                    <li><img src={TimeIcon} alt=""/>Mon – Fri: 9:00 am – 22:00 pm</li>
                    <li>Sat – Sun: 9:00 am – 20:00 pm</li>
                </ul>
            </div>
            <div className="social-icons">
                <a href="#"><img src={Facebook} alt="Facebook"/></a>
                <a href="#"><img src={Twitter} alt="Twitter"/></a>
                <a href="#"><img src={Instagram} alt="Instagram"/></a>
                <a href="#"><img src={Youtube} alt="YouTube"/></a>
            </div>
        </div>
    </div>
</div>
</section>
  )
}

export default Mapsection