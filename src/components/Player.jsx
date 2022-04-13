import React from 'react';
import './player.scss';
import player from '../image/player.png';
import NHL from "../image/NHL.jpg";
import cd from '../image/cd.png';
import Icon from '../heplper/icon';

function Player() {
	return (
		<div className="Player">
			<div className="audio-section">
				<div className="audio-wrapper">
					<div className="audio-extension">
						<button>
							<img className="back-img" src={Icon.Iconback1} />
						</button>
						<button>
							<img className="cham-img" src={Icon.chamtron} />
						</button>
					</div>

					<div className='audio-content'>
						<div className='audio-image'>
							<img className='img-hinhanh' src={NHL}/>
							<img className='img-cd' src={cd}/>
						</div>
						<div className='audio-description'>
							<h3 className='chapter-title'>Sống 24h một ngày</h3>
							<p className='chapter-description'>Chương 1: Phép màu mỗi ngày</p>
						</div>
					</div>
				</div>
			</div>

		</div>
	);
}
export default Player;
