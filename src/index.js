import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      speed: 800,
      // slidesToShow: 1,
      // slidesToScroll: 1,
      mobileFirst: true,
      pauseOnHover: true,
      fade: false,
      cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    };

    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <img
              src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_1200,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FHstkNlpikcMbVABdiNZo-tutorial-beginner%2Fpub%2FFSgHplcjyr3iC73iw4JZ.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_1200,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FHstkNlpikcMbVABdiNZo-tutorial-beginner%2Fpub%2FpqbWzOZlJQteTVWOKvUI.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              src="https://res.cloudinary.com/glide/image/fetch/f_auto,w_1200,c_limit/https%3A%2F%2Fstorage.googleapis.com%2Fglide-prod.appspot.com%2Fuploads-v2%2FHstkNlpikcMbVABdiNZo-tutorial-beginner%2Fpub%2FX0i6S9iiMX7AE5WDTb7r.jpg"
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
