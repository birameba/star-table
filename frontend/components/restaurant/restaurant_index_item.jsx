import React from 'react';
import { Link } from 'react-router-dom';

class RestaurateurIndexItem extends React.Component {
  constructor(props){
    super(props);

    this.getStar = this.getStar.bind(this);
  }

getStar() {
    let starCount = this.props.restaurant.star;
    if (starCount === 3) {
      return(
        <div className="restaurant-star">
          <img src='http://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
          <img src='http://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
          <img src='http://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
        </div>
      );
    } else if(starCount === 2) {
      return(
        <div className="restaurant-star">
          <img src='http://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
          <img src='http://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
        </div>
      );
    } else {
      return(
        <div className="restaurant-star">
          <img src='http://res.cloudinary.com/chengzii/image/upload/c_scale,w_20/v1523389939/star.png' />
        </div>
      );
    }
  }

  render(){
    let restaurant = this.props.restaurant;
    let sum = 0;
    for (var i = 0; i < restaurant.ratingArr.length; i++) {
      sum += restaurant.ratingArr[i];
    }

    let aveRating;
    if (sum === 0) {
      aveRating = "No rating yet!";
    } else {
      aveRating = Math.round(sum / restaurant.ratingArr.length * 10) / 10;
    }

    return (
      <li className="restaurant-li">
          <div className="restaurant-logo-container">
            <img src="https://image.freepik.com/free-vector/restaurant-logo-template_1236-155.jpg"/>
          </div>
          <ul className="restaurant-detail-ul">
            <li>
              <Link to={`/restaurants/${restaurant.id}`} className="restaurant-name">
                <h5>{restaurant.name}</h5>
                {this.getStar()}
              </Link>
            </li>
            <li>Rating: {aveRating}</li>
            <li>Cuisine: {restaurant.cuisine}</li>
            <li>Address: {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zipcode}</li>
            <li>Contact: {restaurant.phoneNumber}</li>
          </ul>
      </li>
    );
  }
}

export default RestaurateurIndexItem;