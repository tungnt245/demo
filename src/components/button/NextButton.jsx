import React from 'react';
import Icon from '../../heplper/icon';

function NextButton(props) {
	const { className, style, onClick } = props;

	return (
		<div
			className={className}
			style={{ ...style, display: 'flex', justifyContent: 'center' }}
			onClick={onClick}
		>
			<img
				className="slick-control-icon slick-next-icon"
				src={Icon.arrownext}
				alt="arrow-icon"
			/>
		</div>
	);
}

export default NextButton;
