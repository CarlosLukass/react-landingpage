import React from "react";
import Card from "./Card.jsx";

const Cards = () => {
	const cards = [
		{
			title: "Card Title One",
			description:
				"Bacon ipsum dolor amet tail chuck boudin, salami ribeye meatloaf pork loin alcatra corned beef picanha. Porchetta jerky beef, ball tip bresaola salami shank kielbasa doner. Andouille bacon sausage, fatback jowl tenderloin turducken landjaeger beef ribs.",
			cta: "go to post",
		},
		{
			title: "Card Title Two",
			description:
				"Bacon ipsum dolor amet tail chuck boudin, salami ribeye meatloaf pork loin alcatra corned beef picanha. Porchetta jerky beef.",
			cta: "go to post",
		},
		{
			title: "Card Title Tree",
			description:
				"Bacon ipsum dolor amet tail chuck boudin, salami ribeye meatloaf pork loin alcatra corned beef picanha. Porchetta jerky beef, ball tip.",
			cta: "go to post",
		},
		{
			title: "Card Title Four",
			description:
				"Bacon ipsum dolor amet tail chuck boudin, salami ribeye meatloaf pork loin.",
			cta: "go to post",
		},
	];

	return (
		<>
			<div className="container py-5">
				<div className="row d-flex justify-content-between">
					{cards.map((post) => {
						return (
							<Card
								title={post.title}
								description={post.description}
								cta={post.cta}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Cards;
