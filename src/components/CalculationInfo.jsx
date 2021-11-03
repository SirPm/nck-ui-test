import React from "react";
import "../App.css";

const CalculationInfo = () => {
	return (
		<div className="calc-info-div">
			<div className="sub-calc-div">
				<div className="sub-calc-div-info">
					<p>Subtotal</p>
					<p>₦2,497.00</p>
				</div>
				<div className="sub-calc-div-info">
					<p>Estimated TAX</p>
					<p>₦119.64</p>
				</div>
				<div className="sub-calc-div-info">
					<p>
						Promotional Code: <span>Z4KXLM9A</span>
					</p>
					<p>₦-60.00</p>
				</div>
			</div>
			<div className="complete-payment">
				<button>Complete payment</button>
				<p>Total:&nbsp;₦2,556.64</p>
			</div>
		</div>
	);
};

export default CalculationInfo;
