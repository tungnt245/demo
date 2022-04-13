import './styles.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import close from "../../image/close.png";
import FacebookIcon from '@mui/icons-material/Facebook';
import CloseIcon from '@mui/icons-material/Close';
import fb1 from "../../image/fb1.png";
import fb2 from "../../image/fb2.png";
import fb3 from "../../image/fb3.png";

export default function ModalShare({ urlLink, showModal, hideModal, facebookShare }) {
	const [copiedPopover, setCopiedPopover] = useState(false);

	const copyUrl = () => {
		navigator.clipboard.writeText(urlLink);
		setCopiedPopover(true);
		setTimeout(() => {
			setCopiedPopover(false);
		}, 1200);
	};

	return (
		<div className='modal-container' style={showModal ? { display: 'flex' } : { display: 'none' }}>
			<div className='modal-box'>
				<div className='modal-title'>
					<div className='empty-block'></div>
					<div className='title-content'>Chia sẻ</div>
					<button onClick={hideModal} style={{border:"none"}}>
					{/* <img style={{width:"19px" , height:"19px"}} src= {close}/> */}
					<CloseIcon />
					</button>
				</div>
				<div className='content'>
					<div className='social-btns'>
						<ul>
							<li>
								<button className='facebook' onClick={facebookShare}>
									{/* <i className='fab fa-facebook-f icon'></i> */}
									<img style={{width :"30px", height : "30px"}} src= {fb2}/>
								</button>
							</li>
						</ul>
					</div>

					<div className='copy-link-box'>
						<i className='fas fa-link'></i>
						<input value={urlLink} readOnly></input>
						<button onClick={copyUrl}>Copy</button>
						<div
							className='popover-copied'
							style={copiedPopover ? { display: 'block' } : { display: 'none' }}
						>
							Copied
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
