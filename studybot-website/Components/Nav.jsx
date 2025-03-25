import React from "react";

const Nav = () => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<img src="src\assets\settings.png" alt="Settings"></img>
				</li>
				<li>
					<img src="src\assets\fire.png" alt="Streaks"></img>
				</li>
				<li id="study-button">
					<img src="src\assets\play.png" alt="Study" id="study-button"></img>
				</li>
				<li>
					<img src="src\assets\tree.png" alt="Forest"></img>
				</li>
				<li>
					<img src="src\assets\chat.png" alt="Chat"></img>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
