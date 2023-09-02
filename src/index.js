import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import "./index.css";

class ReactSlickDemo extends React.Component {
  render() {
    var settings = {
      dots: true,
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
            <img src="http://placekitten.com/g/400/200" alt="" />
          </div>
          <div>
            <img src="http://placekitten.com/g/400/200" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("container"));
