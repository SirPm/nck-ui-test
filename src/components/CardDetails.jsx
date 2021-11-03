import React, { useState } from "react";
import "../App.css";
import MasterCard from "../assets/masterCard.png";
import CardTypes from "../assets/cardTypes.png";

const CardDetails = () => {
	const [cardState, setCardState] = useState({
		cardNo: "",
		expiryDate: "",
		securityCode: "",
		postalCode: "",
	});

	const handleInputChange = (evt) => {
		const { name, value } = evt.target;

		let isnum = /^\d+$/.test(value);

		if (isnum) {
			setCardState({
				...cardState,
				[name]: value,
			});
		} else {
			evt.preventDefault();
		}
	};

	return (
		<div className="card-details">
			<div className="card-info-div">
				<div className="card-details-header">
					<h3>Payment Information</h3>
					<p>Choose your method of payment</p>
				</div>
				<div className="card">
					<img src={MasterCard} alt="master card" />
				</div>
			</div>
			<form className="card-form">
				<div className="card-details-header-2">
					<div className="card-types-div">
						<img className="card-types" src={CardTypes} alt="card types" />
					</div>
				</div>
				<div className="group-input-div">
					<div className="input-div">
						<label htmlFor="">Credit card number</label>
						<input type="text" name="cardNo" onChange={handleInputChange} value={cardState.cardNo} />
					</div>
					<div className="input-div">
						<label htmlFor="">Expiration date</label>
						<input type="text" name="expiryDate" onChange={handleInputChange} value={cardState.expiryDate} />
					</div>
				</div>
				<br />
				<br />
				<div className="group-input-div">
					<div className="input-div">
						<label htmlFor="">Security code</label>
						<input type="text" name="securityCode" onChange={handleInputChange} value={cardState.securityCode} />
					</div>
					<div className="input-div">
						<label htmlFor="">Postal code</label>
						<input type="text" name="postalCode" onChange={handleInputChange} value={cardState.postalCode} />
					</div>
				</div>
				<label className="checkbox-container">
					<span>Use this card for next time purchase</span>
					<input type="checkbox" name="" />
					<span className="checkmark"></span>
				</label>
				<button className="submit-btn">Add card</button>
			</form>
		</div>
	);
};

export default CardDetails;
