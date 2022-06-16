import React from "react";

const Hero = () => {
	const data = {
		title: "A Warn Welcome!!",
		message:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure rerum optio voluptatem illo quasi deserunt odit mollitia, neque sed debitis ex, error praesentium autem dignissimos. Animi veniam consectetur quaerat dolorum perferendis enim quo at nulla rem quod laborum corporis.",
	};
	return (
		<div className="jumbotron container bg-light p-5 mt-5">
			<h1 className="display-4">{data.title}</h1>
			<p className="lead">{data.message}</p>
			<a className="btn btn-primary btn-lg" href="#" role="button">
				Call To Action!
			</a>
		</div>
	);
};

export default Hero;
