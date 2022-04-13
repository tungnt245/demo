function SVG() {
	const idCSS = "hello";
	const gradientTransform = `rotate(70)`;
	return (
		<svg style={{ height: 0 }}>
			<defs>
				<linearGradient id={idCSS} gradientTransform={gradientTransform}>
					<stop offset='7%' stopColor='#E359F9' />
					<stop offset='93%' stopColor='#3D40C6' />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default SVG;
