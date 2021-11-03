import React from "react";
import "../App.css";
import Dp from "../assets/dp.png";

const Navbar = () => {
	return (
		<nav className="nav-bar">
			<ul>
				<li>
					<a href="!#">trips</a>
				</li>
				<li>
					<a href="!#">recently viewed</a>
				</li>
				<li>
					<a href="!#">bookings</a>
				</li>
			</ul>

			<div className="nav-dp">
				<img src={Dp} alt="dp" />
			</div>
		</nav>
	);
};

export default Navbar;
