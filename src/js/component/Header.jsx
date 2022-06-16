import React from "react";

const Header = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<div className="container">
					<div>
						<a className="navbar-brand" href="#">
							Start Bootstrap
						</a>
					</div>

					<button
						className="navbar-toggler justify-content-end"
						type="button"
						data-toggle="collapse"
						data-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse justify-content-end"
						id="navbarNavAltMarkup">
						<div className="navbar-nav">
							<a className="nav-link active" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
							<a className="nav-link" href="#">
								About
							</a>
							<a className="nav-link" href="#">
								Service
							</a>
							<a className="nav-link" href="#">
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
