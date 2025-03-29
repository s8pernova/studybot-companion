const Face = () => {
	return (
		<div>
			<svg
				className="center-TEMPORARY"
				width="800"
				height="800"
				viewBox="0 0 200 200"
				fill="#f8f8f8"
			>
				{/* <circle cx="100" cy="100" r="80" fill="gray" /> */}
				<ellipse rx="100" ry="50" cx="120" cy="80" />
				<circle cx="70" cy="80" r="10" />
				<circle cx="130" cy="80" r="10" />
				<rect x="70" y="130" width="60" height="10" />
			</svg>
		</div>
	);
};

export default Face;
