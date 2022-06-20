import React from "react";

const Card = ({ title, description, cta }) => {
	return (
		<div className="card mx-auto mt-2 p-0" style={{ width: 17 + "rem" }}>
			<img
				src="https://camikids.com/wp-content/uploads/2020/08/placeholder.png"
				className="card-img-top"
				alt="..."
			/>
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{description}</p>
				<a href="#" className="btn btn-primary">
					{cta}
				</a>
			</div>
		</div>
	);
};

export default Card;
