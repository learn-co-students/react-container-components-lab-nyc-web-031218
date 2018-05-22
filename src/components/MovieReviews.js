import React from 'react'

const renderReviews = (reviews) => {
  return reviews.map(review => {
    return <div key={review.display_title} className="review">
      <h3>{review.headline}</h3>
      <h5>{review.byline}</h5>
      <p>{review.summary_short}</p>
    </div>
  })
}

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {renderReviews(props.reviews)}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
