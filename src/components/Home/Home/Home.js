import { faProductHunt } from "@fortawesome/free-brands-svg-icons";
import {
  faGift,
  faMoneyCheck,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import chooseimg from "../../Shared/Images/choiceImg.png";
import delivery from "../../Shared/Images/delivery.png";
import offer from "../../Shared/Images/offer.png";
import Review from "../../Pages/Review/Review";
import Banner from "../Banner/Banner";
import "./Home.css";
import Products from "../../Pages/Products/Products";

const Home = () => {
  return (
    <div className="homePage" id="home">
      <Banner />
      {/* products */}
      <Products />
      <Review />
      {/* why buy our product part */}
      <div class="container text-center">
        <h3 className="mb-5">
          Why Choose Us{" "}
          <FontAwesomeIcon icon={faQuestionCircle}></FontAwesomeIcon>
        </h3>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 p-4">
          <div class="col body-part">
            <h4>
              <FontAwesomeIcon icon={faProductHunt}></FontAwesomeIcon> Make
              Prodcuts According To Your Choice
            </h4>
            <img className="img-fluid w-50" src={chooseimg} alt="" />
          </div>
          <div class="col body-part">
            <h4>
              <FontAwesomeIcon icon={faMoneyCheck}></FontAwesomeIcon> Cash On
              Delivery
            </h4>
            <img className="img-fluid w-50" src={delivery} alt="" />
          </div>
          <div class="col body-part">
            <h4>
              <FontAwesomeIcon icon={faGift}></FontAwesomeIcon> First Buy
              Discount{" "}
            </h4>
            <img className="img-fluid w-50" src={offer} alt="" />
          </div>
          <div class="col body-part">
            <h4>
              <FontAwesomeIcon icon={faGift}></FontAwesomeIcon> Regular
              Customer's Special Discount{" "}
            </h4>
            <img className="img-fluid w-50" src={offer} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
