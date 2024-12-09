import React from 'react'
import QuotesReview from '../assets/images/quotes-review.svg'
import Rating1 from '../assets/images/rating-1.svg'
import Rating2 from '../assets/images/rating-2.svg'
import MaleAvatar from '../assets/images/male-avatar.svg'
import GirlAvatar from '../assets/images/girl-avatar.svg'

const Clientreviews = () => {
  return (
    <section id="client-reviews">
    <div class="container">
        <div class="review-headline">
            <h2>Clients are </h2>
            <h2>Loving Our App</h2>
        </div>
        <div class="review-cards">
            <div>
                <img class="quote-img" src={QuotesReview} alt=""/>
                <div class="review-card">
                    <img class="ratings-img" src={Rating1} alt="4-star rating"/>
                    <p class="review-p-content">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum
                        sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi
                        vitae lectus hac hendrerit. Montes justo turpis sit amet.</p>
                    <div class="customer-avatar">
                        <img src={GirlAvatar} alt="girl avatar"/>
                        <div>
                            <p class="username">Fannie Summers</p>
                            <p class="work-tag">Designer</p>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <img class="quote-img" src={QuotesReview} alt=""/>
                <div class="review-card">
                    <img class="ratings-img" src={Rating2} alt="5-star rating"/>
                    <p class="review-p-content">Nunc senectus leo vel venenatis accumsan vestibulum
                        sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst
                        sit amet. Dictum pretium dolor tincidunt egestas eget nunc.</p>
                    <div class="customer-avatar">
                        <img src={MaleAvatar} alt="male avatar"/>
                        <div>
                            <p class="username">Albert Flores</p>
                            <p class="work-tag">Developer</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Clientreviews