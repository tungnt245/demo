import React from 'react';
import Icon from "../../heplper/icon";
import './style.scss';

function PrevButton(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{ ...style, display: 'flex', justifyContent: 'center' }}
			onClick={onClick}
		>
			<img
				className="slick-control-icon slick-prev-icon"
				src={Icon.pre}
				alt="arrow-icon"
			/>
		</div>
	);
}

export default PrevButton;
