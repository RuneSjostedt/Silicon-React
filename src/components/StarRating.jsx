import React from 'react';

const StarRating = ({ starRating }) => {
    const maxStars = 5;
    const filledStars = Math.min(starRating, maxStars);
    const emptyStars = maxStars - filledStars;

    return (
        <div className="star-rating">
            {
                [...Array(filledStars)].map((_, index) => (
                    <i 
                        key={index} 
                        className="fa-sharp fa-solid fa-star" 
                        style={{ color: '#FFD700' }} // Softer golden yellow
                    ></i>
                ))
            }
            {
                [...Array(emptyStars)].map((_, index) => (
                    <i 
                        key={index} 
                        className="fa-sharp fa-regular fa-star" 
                        style={{ color: '#D3D3D3' }} // Light gray for empty stars
                    ></i>
                ))
            }
        </div>
    );
}

export default StarRating;