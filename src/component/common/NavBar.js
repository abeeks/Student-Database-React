import React from "react";
import { Link } from "react-router-dom";
import '../common/NavBar.css';
import logo from '../images/logo.png';
import { UserAuth } from "../../context/AuthContext";

const NavBar = () => {
	const { user, logOut } = UserAuth();

	// Define function to handle sign out
  	const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
}

	return (
		<nav className="navbar navbar-expand-xl navbar-dark bg-dark mb-5">
			<div className="container-fluid">
				
				<Link className="navbar-brand" to={"/"}>
                    <img src={logo} width={150} alt="logo"/>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								className="btn btn-secondary"
								aria-current="page"
								to={"/view-students"}>
								Current Students
							</Link>
						</li>
						<li className="nav-item">
							<Link
								className="btn btn-secondary"
								to={"/add-students"}>
								Add New Student
							</Link>
						</li>
						{user?.displayName ?(
							<button onClick={handleSignOut}>Logout</button>
				 				):(
							<Link 
							className="btn btn-secondary"
							to='/signin'>
							Sign In
							</Link>
				 		)}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;