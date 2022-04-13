import './doc.scss';
import Icon from '../heplper/icon';
import React, { useState, useEffect, useRef } from 'react';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import taixuong from '../image/taixuong.png';
import ModalShare from './modal-share/ModalShare';
import { Fullscreen } from '@mui/icons-material';
import classNames from 'classnames';



function Doc() {
	pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
	const [numPages, setNumPages] = useState(null); //Tổng số trang
	const [pageNumber, setPageNumber] = useState(1); // số trang
	const [iCheck, setICheck] = useState(false);
	const [show, setShow] = useState(false);
	const [timer, setTimer] = useState(30);
	const [timeToFlipPage, setTimeToFlipPage] = useState(30);
	const [autoFlipStatus, setAutoFlipStatus] = useState(false);
	const [changeTimeNumber, setChangeTimeNumber] = useState('30s');
	const [autoStart, setAutoStart] = useState(false);
	const [isShow, setIsShow] = useState(false);
	const [fullScreenStatus, setFullScreenStatus] = useState(false);
	const [showUpBtnStatusShow, setShowUpBtnStatusShow] = useState(false);
	const [hamburgerMenuStatus, setHamburgerMenuStatus] = useState(false);
	const [upDownBtnStatus, setUpDownBtnStatus] = useState(false);
	const [pdfToolsStatusHide, setPdfToolsStatusHide] = useState(false);
	const [speedReadPdfStatus, setSpeedReadPdfStatus] = useState(false);
	const [showModalShare, setShowModalShare] = useState(false);
	const currentUrl = useRef(window.location.href);
	const [toggleTool, setToggleTool] = useState(true);
	const [toggleTools, setToggleTools] = useState(false);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}
	const shareBtn = () => {
		setShowModalShare(!showModalShare);
	};
	const hideModalShare = () => {
		setShowModalShare(false);
	};
	const facebookShare = () => {
		const params = 'menubar=no,toolbar=no,status=no,width=570,height=570';
		const shareUrl = `http://www.facebook.com/sharer/sharer.php?u=${currentUrl.current}`;
		window.open(shareUrl, '_blank', params);
	};

	function toggleFullScreen() {
		if (fullScreenStatus === true) {
			setFullScreenStatus(false);
			setShowUpBtnStatusShow(false);
		} else {
			// Bật
			setFullScreenStatus(true);
			setHamburgerMenuStatus(false);
			// Tắt nút show pdf-tool
			setShowUpBtnStatusShow(true);
			setUpDownBtnStatus(true);
			// set trạng thái css ẩn pdf-tools
			setPdfToolsStatusHide(true);
			setSpeedReadPdfStatus(false);
		}
	}

	const nextBack = () => {
		if (pageNumber <= numPages - 2 && autoStart === true) {
			const newpage = pageNumber + 2;
			setPageNumber(newpage);
		} else if (pageNumber <= numPages - 1 && autoStart === false) {
			const newpage = pageNumber + 1;
			setPageNumber(newpage);
		}
	};
	const priBack = () => {
		if (pageNumber > 2 && autoStart === true) {
			const pripage = pageNumber - 2;
			setPageNumber(pripage);
		} else if (pageNumber > 1 && autoStart === false) {
			const pripage = pageNumber - 1;
			setPageNumber(pripage);
		}
	};

	const autoFlipPage = () => {
		setAutoFlipStatus(!autoFlipStatus);
	};
	const autoFrank = () => {
		setAutoStart(!autoStart);
	};

	//nutplay
	useEffect(() => {
		let interval;
		if (autoFlipStatus) {
			if (pageNumber === 1) {
				nextBack();
			} else {
				interval = setInterval(() => {
					setTimeToFlipPage(timeToFlipPage - 1);
				}, 1000);
			}

			if (timeToFlipPage < 0) {
				setTimeToFlipPage(timer);
				nextBack();
			}
		} else {
			setTimeToFlipPage(timer);
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [autoFlipStatus, timeToFlipPage, pageNumber]);

	const changeTimer = timerParam => {
		if (timerParam === 30) {
			setChangeTimeNumber('30s');
		} else if (timerParam === 60) {
			setChangeTimeNumber('1m');
		} else if (timerParam === 120) {
			setChangeTimeNumber('2ms');
		} else if (timerParam === 300) {
			setChangeTimeNumber('5m');
		} else {
			setChangeTimeNumber('10m');
		}

		setTimer(timerParam);
		setTimeToFlipPage(timerParam);
		//
		if (autoFlipStatus) {
			setAutoFlipStatus(false);
			setTimeout(() => {
				setAutoFlipStatus(true);
			}, 1);
		}
		setShow(false);
	};
	const handleChangeShow = () => {
		setIsShow(!isShow);
	};

	const handleToggle = () => {
		setToggleTool(!toggleTool);
		setToggleTools(!toggleTools);
	};
	const handleClose = () => {
		setToggleTools(false);
	};
	const arr = [...Array(Number(numPages))];
	

	return (
		<div className="pdf-backgound ">
			<div
				className={
					fullScreenStatus ? 'fullscreen1' : 'pfd-title-button-pc'
				}
			>
				<button className="button-doc">
					<img className="doc-imgback" src={Icon.Iconback1} />
				</button>
				<div className="pfd-title">Người thành công làm gì vào buổi sáng?</div>
				<button className="pfd-button">
					<img src={Icon.Playhead} />
					<div className="audio">Nghe Audio</div>
				</button>
			</div>
			<div
				className={` ${
					fullScreenStatus
						? 'pdf-container_full-screen  pdf-container '
						: 'pdf-container'
				} `}
			>
				<div
					className="feed-card"
					style={isShow ? { display: 'block' } : { display: 'none' }}
				>
					{arr.map((item, index) => (
						<div
							id={`page-${index + 1}`}
							className="feed-card_content"
							key={index}
							onClick={() => {
								setPageNumber(index + 1);
								setIsShow(!isShow);
							}}
						>
							<span className="page-number">{index + 1}</span>
						</div>
					))}
				</div>
			</div>

			<TransformWrapper
				initialScale={1}
				// initialPositionX={200}
				// // initialPositionY={100}
			>
				{({ zoomIn, zoomOut, resetTransform, ...rest }) => (
					<React.Fragment>
						<div
							className={fullScreenStatus ? 'fullscreen' : 'lexu'}
						>
							<button
								className={
									fullScreenStatus
										? 'prifullscreen button-pri'
										: 'button-pri'
								}
							>
								<img
									onClick={priBack}
									className="pri-img"
									src={Icon.pore}
								/>
							</button>

							<TransformComponent>
								<div
									className={classNames('pdf-content', {
										fullscreen2: fullScreenStatus,
										fullscreen3: toggleTools
									})}
								>
									<div className="sotrang">
										{pageNumber}/ {numPages}
									</div>
									<div>
										<Document
											file="https://file.mentor.vn/files/books/lesson/file-1634892917313.pdf"
											onLoadSuccess={
												onDocumentLoadSuccess
											}
										>
											{autoStart ? (
												<>
													<Page
														pageNumber={pageNumber}
													/>
													<Page
														pageNumber={
															pageNumber + 1
														}
													/>
												</>
											) : (
												<Page pageNumber={pageNumber} />
											)}
										</Document>
									</div>
								</div>
							</TransformComponent>
							{fullScreenStatus ? (
								<button
									className={
										toggleTools
											? 'button-prinext2'
											: 'button-prinext'
									}
								>
									<img
										onClick={() => handleToggle()}
										className="pri-img"
										src={Icon.pore}
									/>
								</button>
							) : (
								''
							)}
							<button
								className={
									fullScreenStatus
										? 'buttonfullscreen button-next'
										: 'button-next'
								}
							>
								<img
									onClick={nextBack}
									className="next-img"
									src={Icon.nexttop}
								/>
							</button>

						</div>
						{toggleTool ? (
							<div className={'tools'}>
								<div
									className="pdf-tools-img1"
									onClick={() => zoomIn()}
								>
									<img src={Icon.Actions} />
									<div className='funscen'>zoom&nbsp;in&nbsp;</div>
								</div>
								<div
									className="pdf-tools-img2"
									onClick={() => {
										zoomOut();
									}}
								>
									<img src={Icon.Vectors} />
									<div className='funscen'>zoom&nbsp;out&nbsp;</div>
								</div>
								<div
									onClick={() => autoFlipPage()}
									className="pdf-tools-img3"
								>
									{autoFlipStatus ? (
										<img
											className="pdf-tool-icon"
											src={taixuong}
											alt="icon"
										/>
									) : (
										<img
											className="pdf-tool-icon"
											src={Icon.Play}
											alt="icon"
										/>
									)}
										<div className='funscen'>Tự&nbsp;động&nbsp;lật&nbsp;trang&nbsp;</div>
								</div>
								<div className="pdf-tools-img4">
									<ul
										className={` drowpdown-list-speed-read`}
										style={
											show
												? { display: 'block' }
												: { display: 'none' }
										}
									>
										<li className="speed-read-title">
											Tự chuyển trang
										</li>
										<li
											onClick={() => changeTimer(600)}
											className="speed-read"
										>
											10 phút
										</li>
										<li
											onClick={() => changeTimer(300)}
											className="speed-read"
										>
											5 phút
										</li>
										<li
											onClick={() => changeTimer(120)}
											className="speed-read"
										>
											2 phút
										</li>
										<li
											onClick={() => changeTimer(60)}
											className="speed-read"
										>
											1 phút
										</li>
										<li
											onClick={() => changeTimer(30)}
											className="speed-read"
										>
											30s
										</li>
									</ul>
									<img
										className="codicon"
										src={Icon.codicon}
										onClick={() => setShow(!show)}
									/>
									<div className='funscen'>Thời&nbsp;gian&nbsp;tựt&nbsp;chuyển&nbsp;trang&nbsp;</div>
								</div>
								{/* --------------------------------- */}
								<div
									className="pdf-tools-img5"
									onClick={() => autoFrank()}
								>
									{/* <img src={Icon.cil} /> */}
									{autoStart ? (
										<img
											className="auto-start"
											src={Icon.clipp}
											alt="icon"
										/>
									) : (
										<img
											className="auto-start"
											src={Icon.cil}
											alt="icon"
										/>
									)}
									<div className='funscen'>xem&nbsp;trang&nbsp;đơn&nbsp;</div>
								</div>
								<div
									className="pdf-tools-img6"
									onClick={() => handleChangeShow()}
								>
									<img src={Icon.Grid} />
									<div className='funscen'>Chọn&nbsp;trang&nbsp;sách&nbsp;</div>
								</div>
								<div className="pdf-tools-img7">
									<img src={Icon.Bullets} />
									<div className='funscen'>Mục&nbsp;lục&nbsp;</div>
								</div>

								<div
									className="pdf-tools-img8"
									onClick={shareBtn}
								>
									<img src={Icon.Vectorabc} />
									<div className='funscen'>Chia&nbsp;sẻ&nbsp;</div>
								</div>
								<ModalShare
									urlLink={currentUrl.current}
									showModal={showModalShare}
									hideModal={hideModalShare}
									facebookShare={facebookShare}
								/>

								<div

									onClick={() => {
										toggleFullScreen();
										// if (!fullScreenStatus) {
										// 	zoomIn(0.2);
										// } else {
										// 	zoomOut(0.2);
										// }
									}}
									className={`${
										fullScreenStatus
											? 'pdf-tool_visited  pdf-tool pdf-tool-full-screen  popover__wrapper'
											: 'pdf-tool pdf-tool-full-screen  popover__wrapper'
									} `}
								>

									{fullScreenStatus ? (
										<img
											className="pdf-tools-img9"
											src={Icon.Full}
											alt="icon"
											onClick={handleClose}
										/>
									) : (
										<img
											className="pdf-tools-img9"
											src={Icon.Full}
											alt="icon"
											onClick={() => setToggleTool(false)}
										/>
									)}
									<div className='funscen'>Toàn&nbsp;màn&nbsp;hình&nbsp;</div>

								</div>

							</div>
						) : (
							''
						)}
					</React.Fragment>
				)}
			</TransformWrapper>
		</div>
	);
}
export default Doc;
