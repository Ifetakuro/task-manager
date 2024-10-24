import trophy from "../../../assets/images/trophy.png";
import "./advert.css";

const Advert = () => {
  return (
    <div className="advert">
      <div>
        <img src={trophy} alt="trophy" />
      </div>
      <div className="description">
        <span>Go Pro Upgrade Now</span>
      </div>

      <span className="currency-box">$1</span>
    </div>
  );
};

export default Advert;
