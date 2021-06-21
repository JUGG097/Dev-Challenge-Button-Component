import React from "react";
import "./Button.css";

const Button = ({ variant, color, size, startIcon, endIcon }) => {
	return (
		<div>
			<button
				className={`default-btn ${variant} ${color} ${size + "-btn"}`}
			>
				<i class="material-icons">{startIcon}</i>
				{"  "}Default{"  "}
				<i class="material-icons">{endIcon}</i>
			</button>
		</div>
	);
};

export default Button;
