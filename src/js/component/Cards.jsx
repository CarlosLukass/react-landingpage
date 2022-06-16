import React from "react";
import Card from "./Card.jsx";

const Cards = () => {
	return (
		<>
			<div className="container py-5">
				<div className="row d-flex justify-content-between">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
};

export default Cards;
