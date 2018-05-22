import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  searchReviews = () => {
    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results
    }))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <input onChange={this.handleChange} />
        <button onClick={ this.searchReviews }>Search Reviews</button>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}
