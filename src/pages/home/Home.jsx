import "./styles.css";
import CardFront from "../../assets/images/bg-card-front.png";
import CardBack from "../../assets/images/bg-card-back.png";
import CardLogo from "../../assets/images/card-logo.svg";

function Home() {
  return (
    <div className="home">
      <div className="left-side">
        <div className="card card_front">
          <img src={CardLogo} alt="card logo" className="card__logo" />
          <h3 className="card__number">0000 0000 0000 0000</h3>
          <div className="card__block">
            <p className="card__name">Jane Appleseed</p>
            <span className="card__date">00/00</span>
          </div>
        </div>
        <div className="card card_back">
          <span className="card__cvc">000</span>
        </div>
      </div>
      <div className="right-side">
        <form className="form">
          <label htmlFor="name" className="form__label">
            cardholder name
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="e.g. Jane Appleseed"
          />
          <label htmlFor="number" className="form__label">
            card number
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="e.g. 1234 5678 9123 0000"
          />
          <div className="form__block">
            <div>
              <label htmlFor="date" className="form__label">
                exp. date (mm/yy)
              </label>
              <input
                type="number"
                className="form__input-small"
                placeholder="MM"
              />
              <input
                type="number"
                className="form__input-small"
                placeholder="YY"
              />
            </div>
            <div>
              <label htmlFor="cvc" className="form__label">
                cvc
              </label>
              <input
                type="number"
                className="form__input-medium"
                placeholder="e.g. 123"
              />
            </div>
          </div>
          <button className="form__button">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
