import { useState } from "react";
import "./styles.css";
import CardLogo from "../../assets/images/card-logo.svg";

function Home() {
  const [cardName, setCardName] = useState("Jane Appleseed");
  const [cardNumber, setCardNumber] = useState("0000 0000 0000 0000");
  const [cardMonth, setCardMonth] = useState("00");
  const [cardYear, setCardYear] = useState("00");
  const [cardCvc, setCardCvc] = useState("000");

  const formatCardNumber = (input) => {
    const normalizedInput = input.replace(/\s/g, "");
    let formattedNumber = "";

    for (let i = 0; i < normalizedInput.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedNumber += " ";
      }
      formattedNumber += normalizedInput[i];
    }

    return formattedNumber;
  };

  return (
    <div className="home">
      <div className="left-side">
        <div className="card card_front">
          <img src={CardLogo} alt="card logo" className="card__logo" />
          <h3 className="card__number">{formatCardNumber(cardNumber)}</h3>
          <div className="card__block">
            <p className="card__name">{cardName}</p>
            <span className="card__date">
              {cardMonth}/{cardYear}
            </span>
          </div>
        </div>
        <div className="card card_back">
          <span className="card__cvc">{cardCvc}</span>
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
            onChange={(e) => setCardName(e.target.value)}
            maxLength="26"
          />
          <label htmlFor="number" className="form__label">
            card number
          </label>
          <input
            type="text"
            className="form__input"
            placeholder="e.g. 1234 5678 9123 0000"
            onChange={(e) => {
              const input = e.target.value.replace(/ /g, "");
              const formattedInput = input.padEnd(16, "0");
              setCardNumber(formattedInput);
            }}
            maxLength="16"
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
                onChange={(e) => setCardMonth(e.target.value)}
                min="1"
                max="12"
              />
              <input
                type="number"
                className="form__input-small"
                placeholder="YY"
                onChange={(e) => setCardYear(e.target.value)}
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
                onChange={(e) => setCardCvc(e.target.value)}
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
