import QuotesReview from '../assets/images/quotes-review.svg'
import StarRating from './StarRating'
const Testimonial = ({item}) => {
  return (
    <div className="review-cards">
    <div>
        <img className="quote-img" src={QuotesReview} alt=""/>
        <div className="review-card">
           <StarRating starRating={item.starRating} />
            <p className="review-p-content">{item.comment}</p>
            <div className="customer-avatar">
                <img src={item.avatarUrl} alt={item.avatarUrl}/>
                <div>
                    <p className="username">{item.author}</p>
                    <p className="work-tag">{item.jobRole}</p>
                </div>
            </div>

        </div>
    </div>
</div>
  )
}

export default Testimonial