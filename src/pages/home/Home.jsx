import { useState } from "react";
import "./styles.css";
import CardLogo from "../../assets/images/card-logo.svg";
import IconComplete from "../../assets/images/icon-complete.svg";

function Home() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCvc, setCardCvc] = useState("");

  const [cardNameError, setCardNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [cardDateError, setCardDateError] = useState("");
  const [cardCvcError, setCardCvcError] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);

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

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let formIsValid = true;

    if (!/^[A-Za-z -']{3,}$/.test(cardName)) {
      setCardNameError("Please enter a cardholder name");
      formIsValid = false;
    } else {
      setCardNameError("");
    }

    if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
      setCardNumberError("Please enter a valid 16-digit card number");
      formIsValid = false;
    } else {
      setCardNumberError("");
    }

    const currentYear = new Date().getFullYear() % 100;
    if (
      cardYear < currentYear ||
      cardYear > 99 ||
      cardMonth < 1 ||
      cardMonth > 12
    ) {
      setCardDateError("Can't be blank");
      formIsValid = false;
    } else {
      setCardDateError("");
    }

    if (cardCvc.length !== 3) {
      setCardCvcError("Can't be blank");
      formIsValid = false;
    } else {
      setCardCvcError("");
    }

    setIsFormValid(formIsValid);
  };

  const handleContinueButtonClick = () => {
    setIsFormValid(false);
  };

  return (
    <div className="home">
      <div className="left-side">
        <div className="card card_front">
          <img src={CardLogo} alt="card logo" className="card__logo" />
          <h3 className="card__number">
            {cardNumber.trim() !== ""
              ? formatCardNumber(cardNumber)
              : "0000 0000 0000 0000"}
          </h3>
          <div className="card__block">
            <p className="card__name">
              {cardName.trim() !== "" ? cardName : "Jane Appleseed"}
            </p>
            <span className="card__date">
              {cardMonth.trim() !== "" ? cardMonth : "00"}/
              {cardYear.trim() !== "" ? cardYear : "00"}
            </span>
          </div>
        </div>
        <div className="card card_back">
          <span className="card__cvc">
            {cardCvc.trim() !== "" ? cardCvc : "000"}
          </span>
        </div>
      </div>
      <div className="right-side">
        {isFormValid ? (
          <div className="success-block">
            <img
              src={IconComplete}
              alt="success image"
              className="success-block__image"
            />
            <h2 className="success-block__title">Thank you!</h2>
            <p className="success-block__subtitle">
              We've added your card details
            </p>
            <button
              className="success-block__btn"
              onClick={handleContinueButtonClick}
            >
              Continue
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={handleFormSubmit}>
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
            <span className="form__error">{cardNameError}</span>
            <label htmlFor="number" className="form__label">
              card number
            </label>
            <input
              type="text"
              className="form__input"
              placeholder="e.g. 1234 5678 9123 0000"
              onChange={(e) => {
                const input = e.target.value.replace(/ /g, "");
                setCardNumber(input);
              }}
              maxLength="16"
            />
            <span className="form__error">{cardNumberError}</span>
            <div className="form__block">
              <div className="form__block-small">
                <label htmlFor="date" className="form__label">
                  exp. date (mm/yy)
                </label>
                <input
                  type="number"
                  className="form__input-small"
                  placeholder="MM"
                  onChange={(e) => setCardMonth(e.target.value)}
                />
                <input
                  type="number"
                  className="form__input-small"
                  placeholder="YY"
                  onChange={(e) => setCardYear(e.target.value)}
                />
                <span className="form__error">{cardDateError}</span>
              </div>
              <div className="form__block-small">
                <label htmlFor="cvc" className="form__label">
                  cvc
                </label>
                <input
                  type="number"
                  className="form__input-medium"
                  placeholder="e.g. 123"
                  onChange={(e) => setCardCvc(e.target.value)}
                  min="100"
                />
                <span className="form__error">{cardCvcError}</span>
              </div>
            </div>
            <button className="form__button">Confirm</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Home;
