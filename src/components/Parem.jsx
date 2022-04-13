import React from 'react';
import './style7.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Logobit from '../image/Logobit.png';
import { Link } from 'react-router-dom';
import Icon from '../heplper/icon';
import { Home } from '../heplper/icon';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Slider from 'react-slick';
import caro1 from '../image/caro1.jpg';
import caro2 from '../image/caro2.jpg';
import caro3 from '../image/caro3.jpg';
import rec1 from '../image/Rectangle613.png';
import rec2 from '../image/Rectangle614.png';
import rec3 from '../image/Rectangle615.png';
import start from '../image/start.png';
import color from '../image/color.png';
import muctieu from '../image/muctieu.png';
import SVG from '../components/SVG';
import location from '../image/Location.png';
import Mail from '../image/Mail.png';
import bocongthuong from '../image/bocongthuong.png';
import apple from '../image/apple.png';
import Badge from '../image/Badge.png';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import show from "../image/show.png"
import QT from "../image/QT.png";
function Parem() {
	const settings = {
		centerMode: true,
		dots: true,
		infinite: true,
		adaptiveHeight: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0
	};
	const idCSS = 'hello';


	return (
		<div className="Menu">
			<div className="home-container">
				<div className="menu">
					<div className="menu-top">
						<img className="img-logo" src={Logobit} />
					</div>
					<div className="menu-lists">
						<Link to="/" className="menu-list">
							<div className="menu-item-active">
								<div className="menu-item-icon">
									<Home />
								</div>
								<div className="menu-item-title">
									<span className="span-home">Home</span>
								</div>
							</div>
						</Link>
						<Link to="/" className="menu-list">
							<div className="menu-item-active2">
								<div className="menu-item-icon">
									<img
										className="img-home"
										src={Icon.search}
									/>
								</div>
								<div className="menu-item-title2">
									<span className="span-home2">Tìm kiếm</span>
								</div>
							</div>
						</Link>
						<Link to="/" className="menu-list">
							<div className="menu-item-active3">
								<div className="menu-item-icon">
									<img className="img-home" src={Icon.feed} />
								</div>
								<div className="menu-item-title3">
									<span className="span-home3">Danh mục</span>
								</div>
							</div>
						</Link>
						<Link to="/" className="menu-list">
							<div className="menu-item-active3">
								<div className="menu-item-icon">
									<img
										className="img-home"
										src={Icon.profile}
									/>
								</div>
								<div className="menu-item-title3">
									<span className="span-home3">Cá nhân</span>
								</div>
							</div>
						</Link>
					</div>
					<div className="menu-img">
						<svg
							width="660"
							viewBox="0 0 785 1129"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M603.918 851.201C610.358 875.045 620.643 897.679 634.367 918.213C594.691 956.275 484.427 1047.16 484.427 1047.16C484.427 1047.16 659.396 744.397 676.351 597.34C697.944 651.299 716.693 706.352 732.521 762.275C674.851 807.372 603.918 851.201 603.918 851.201ZM455.938 660.315C425.373 634.018 398.961 625.713 365.282 635.979C325.259 648.32 337.6 707.373 332.872 707.604C328.143 707.835 305.421 667.927 302.422 614.18C300.154 578.68 307.233 543.207 322.952 511.297C320.271 533.898 321.127 556.779 325.49 579.117C329.223 595.036 339.11 608.828 352.987 617.474C366.865 626.121 383.603 628.917 399.537 625.252H400.806C446.942 615.794 495.153 578.309 521.451 544.515C547.748 510.721 566.779 470.813 571.277 473.351C575.775 475.888 589.731 515.68 596.767 535.749C603.803 555.818 599.535 567.237 580.504 606.336C564.818 638.631 499.767 702.529 488.233 703.682C483.273 703.682 481.774 682.114 456.053 660.084L455.938 660.315ZM355.132 723.29C354.44 713.14 386.619 670.35 396.193 670.35C407.726 670.35 438.061 712.102 437.253 722.598C436.446 733.094 388.58 791.801 379.584 791.801C370.587 791.801 355.593 733.44 354.786 723.405L355.132 723.29ZM436.677 1067.23C311.995 1001.49 217.533 877.152 217.533 877.152L237.832 828.133L205.768 785.919C208.431 756.842 213.956 728.099 222.262 700.107C234.871 664.84 250.02 630.532 267.59 597.455C245.56 735.862 265.283 818.906 304.96 916.252C327.105 970.577 371.279 994.682 372.779 992.722C374.278 990.761 367.819 981.188 361.822 971.845C357.587 964.357 353.738 956.658 350.288 948.778C349.172 925.919 349.904 903.007 352.479 880.266C355.354 855.688 361.844 831.668 371.741 808.987C376.7 801.259 378.43 822.482 405.65 860.659C422.605 884.534 437.599 888.686 437.83 917.521V1067.46L436.677 1067.23ZM195.618 490.767C174.857 490.767 158.941 471.851 164.246 455.243C171.282 433.098 203.346 430.214 198.848 413.951C195.503 402.417 164.246 412.798 157.556 399.419C151.79 387.885 154.788 378.081 165.169 375.313C175.549 372.545 187.429 377.62 204.038 378.658C220.647 379.696 258.132 374.851 256.633 365.163C255.825 359.396 226.298 359.396 212.227 349.592C203.862 343.011 193.763 339.004 183.162 338.058C174.857 338.058 163.554 344.979 156.864 343.941C152.943 343.249 153.866 331.715 154.327 327.447C154.788 323.18 157.556 315.913 164.592 316.721C173.118 317.428 181.691 316.124 189.621 312.914C200.463 307.493 208.19 300.112 209.344 272.661C211.852 253.337 208.178 233.714 198.848 216.606C197.926 214.166 196.532 211.932 194.746 210.031C192.959 208.13 190.816 206.6 188.437 205.529C186.059 204.458 183.493 203.866 180.885 203.788C178.278 203.709 175.681 204.146 173.243 205.073C170.607 206.114 168.213 207.684 166.207 209.686C158.023 218.611 151.36 228.82 146.484 239.905C138.641 255.014 129.068 279.927 137.142 282.119C145.215 284.31 152.597 271.508 163.208 272.776C167.105 273.014 170.749 274.786 173.343 277.704C175.937 280.622 177.27 284.449 177.049 288.347C176.908 289.763 176.598 291.157 176.126 292.499C174.281 299.189 167.937 301.842 157.095 301.842H120.071C111.421 301.842 98.6183 292.038 103.001 280.043C115.219 251.099 129.441 223.042 145.561 196.076C161.478 173.008 170.705 167.703 184.546 168.51C193.653 169.885 201.898 174.667 207.614 181.889C221.454 198.96 231.835 219.605 251.327 225.488C254.3 226.637 257.491 227.11 260.669 226.872C281.43 226.872 286.967 210.493 303.114 203.227C316.724 197.114 343.713 203.227 345.213 198.152C346.712 193.077 342.329 188.464 333.679 183.273C333.007 183.008 332.395 182.61 331.879 182.105C331.363 181.599 330.954 180.995 330.674 180.329C330.395 179.663 330.252 178.948 330.253 178.225C330.254 177.503 330.399 176.788 330.68 176.122C330.92 175.415 331.313 174.768 331.831 174.23C332.35 173.692 332.981 173.275 333.679 173.008C346.435 165.624 361.302 162.74 375.893 164.819C384.698 165.313 393.206 168.179 400.515 173.112C407.825 178.046 413.664 184.865 417.415 192.847C431.948 224.449 423.989 249.363 396.308 278.543C368.627 307.724 341.868 334.483 324.106 371.622C293.08 436.327 251.673 491.228 196.08 491.228L195.618 490.767ZM489.502 392.152C534.599 334.483 542.096 294.229 542.096 314.068C542.096 333.906 532.062 390.999 517.644 412.106C508.604 423.179 497.25 432.138 484.378 438.355C471.506 444.572 457.429 447.895 443.136 448.092C424.451 448.092 449.479 442.786 489.271 392.152H489.502ZM785 125.258H698.727C694.228 201.266 660.665 268.048 643.479 289.731C626.294 311.415 664.702 242.788 648.323 125.258H93.082C84.0395 125.479 75.27 122.15 68.6516 115.984C62.0333 109.819 58.0924 101.307 57.673 92.2711C57.5311 90.3514 57.5311 88.4239 57.673 86.5042C57.673 62.5137 72.7824 45.4435 92.2747 45.4435H699.188C699.188 13.264 673.121 0 641.518 0H92.2747C67.8029 0 44.3334 9.72139 27.0292 27.0256C9.72497 44.3298 0.00357966 67.7993 0.00357966 92.2711V756.623C61.4792 711.41 146.715 652.011 212.919 618.216C139.448 681.191 63.9013 771.502 0.00357966 850.394V1036.32C-0.102857 1048.35 2.16527 1060.28 6.67803 1071.44C11.1908 1082.59 17.8595 1092.74 26.3022 1101.31C34.745 1109.88 44.7957 1116.71 55.8789 1121.39C66.9621 1126.07 78.8598 1128.52 90.8906 1128.59H785V125.258Z"
								fill="#0f109a"
							/>
						</svg>
					</div>
				</div>
				<div className="home">
					<div className="menu-content">
						<Link to="/menu">
						<div className="menu-content-title">
							<button className="tatca">Tất cả</button>
						</div>
						</Link>
                        <Link to="/library">
						<div className="menu-content-title">
							<button className="thuvien">Thư viện</button>
						</div>
						</Link>

						<div className="menu-content-title">
							<button className="quatang">Quà tặng</button>
						</div>
					</div>

					<div className='gift-content-box'>
						<span className='gift-content'>
							<img className='img-show' src = {show}/>
							<div className='gift-info'>
								<div className='gift-title'>Mã quà tặng</div>
								<div className='gift-text'>Mở khóa sách để nhận quà</div>
								<form className='gift-form'>
									<input type="text" className='gift-input' placeholder='Nhập mã quà tặng'/>

										<img className='buton-img' src={Icon.muiten}/>

								</form>
							</div>
							<div className='QT'>
								<img src = {QT}/>
							</div>
						</span>
					</div>

					<div className="home__body">
						<div className="home-suggest">
							<span className='booking'>Tất cả sách </span>
							<div className="scrool">
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach4}
									/>
									<div className="sachdoc">
										Can they do that tomorrow?{' '}
									</div>
									<div className="tacgia">John Wick</div>
								</div>
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach3}
									/>
									<div className="sachdoc">
										Đàn ông sao hỏa đàn bà sao
									</div>
									<div className="tacgia">Amada Natsuki</div>
								</div>
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach2}
									/>
									<div className="sachdoc">
										Follow me to ground
									</div>
									<div className="tacgia">Nguyễn Hiến Lê</div>
								</div>
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach1}
									/>
									<div className="sachdoc">
										Barrack Obama the audacity of
									</div>
									<div className="tacgia"> Barrack Obama</div>
								</div>
							</div>
						</div>
						<div className="home-suggest">

							<div className="scrool">
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach5}
									/>
									<div className="sachdoc">
										Can they do that tomorrow?{' '}
									</div>
									<div className="tacgia">John Wick</div>
								</div>
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach6}
									/>
									<div className="sachdoc">
										Đàn ông sao hỏa đàn bà sao
									</div>
									<div className="tacgia">Amada Natsuki</div>
								</div>
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach7}
									/>
									<div className="sachdoc">
										Follow me to ground
									</div>
									<div className="tacgia">Nguyễn Hiến Lê</div>
								</div>
								<div className="sach1">
									<img
										className="sachauto"
										src={Icon.sach8}
									/>
									<div className="sachdoc">
										Barrack Obama the audacity of
									</div>
									<div className="tacgia"> Barrack Obama</div>
								</div>
							</div>
						</div>


						<div className="scrool">
							<div className="sach1">
								<img className="sachauto" src={Icon.sach5} />
								<div className="sachdoc">
									Can they do that tomorrow?{' '}
								</div>
								<div className="tacgia">John Wick</div>
							</div>
							<div className="sach1">
								<img className="sachauto" src={Icon.sach6} />
								<div className="sachdoc">
									Đàn ông sao hỏa đàn bà sao
								</div>
								<div className="tacgia">Amada Natsuki</div>
							</div>
							<div className="sach1">
								<img className="sachauto" src={Icon.sach7} />
								<div className="sachdoc">
									Follow me to ground
								</div>
								<div className="tacgia">Nguyễn Hiến Lê</div>
							</div>
							<div className="sach1">
								<img className="sachauto" src={Icon.sach8} />
								<div className="sachdoc">
									Barrack Obama the audacity of
								</div>
								<div className="tacgia"> Barrack Obama</div>
							</div>
						</div>
					</div>
				</div>
				<div className="suggest">
					<div className="system-info">
						<div className="cart-container">
							<div className="cart-link">
								<a to="/">
									<img src={Icon.Cart} className="cart" />
								</a>
							</div>
						</div>
						<div className="cart-container">
							<div className="cart-link1">
								<a to="/">
									<img src={Icon.Bell} className="cart2" />
								</a>
							</div>
						</div>
						<div className="cart-container">
							<div className="cart-link2">
								<a to="/">
									<img src={Icon.People} className="cart1" />
								</a>
							</div>
						</div>
					</div>
					<div className="suggest-listen">
						<span className='nghenhieunhat'>Nghe nhiều nhất</span>
						<div className="suggest-listen-content">
							<div className="suggest-information">
								<div className="banner">
									<div className="rank">#1</div>
								</div>
								<img className="rec1" src={rec1} />
								<div className="daily">
									<div className="recently9">
										Kinh tế và tài chính
									</div>
									<div className="title">
										Đàn ông sao hỏa đàn bà sao
									</div>
									<div className="author1">Amada Natsuki</div>
									<div className="start">
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<span className="star-number">
											(122)
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="suggest-listen-content">
							<div className="suggest-information">
								<div className="banner">
									<div className="rank">#2</div>
								</div>
								<img className="rec1" src={rec2} />
								<div className="daily">
									<div className="recently91">
										Tiểu thuyết
									</div>
									<div className="title">
										The Way of the Nameless
									</div>
									<div className="author1">Amada Natsuki</div>
									<div className="start">
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start1"
											src={color}
										/>
										<span className="star-number">
											(122)
										</span>
									</div>
								</div>
							</div>
						</div>
						<div className="suggest-listen-content">
							<div className="suggest-information">
								<div className="banner">
									<div className="rank">#3</div>
								</div>
								<img className="rec1" src={rec3} />
								<div className="daily">
									<div className="recently911">
										Sách văn học
									</div>
									<div className="title">
										Clap when you landing
									</div>
									<div className="author1">Elizabeth</div>
									<div className="start">
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start"
											src={start}
										/>
										<img
											className="img-start1"
											src={color}
										/>
										<span className="star-number">
											(122)
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div className="footer">
				<div className="main">
					<div className="info">
						<div className="info1">
							<div className="img">
								<img className="div1-img" src={Logobit} />
								<div className="div1-span">
									CÔNG TY CỔ PHẦN BIBBO
								</div>
							</div>
						</div>
						<div className="text2">
							Giấy CNĐKKD: 0315637603, đăng ký lần đầu ngày
							18/04/2019 cấp bởi Sở KHĐT thành phố Hồ Chí Minh.
						</div>
						<div className="adress">
							<div className="adress-img">
								<img className="elipe-img" src={location} />
							</div>
							<div className="text3">
								E34, Khu đấu giá 3ha, Phúc Diễn, Bắc Từ Liêm,Hà
								Nội, Việt Nam
							</div>
						</div>
						<div className="email">
							<div>
								<img src={Mail} className="mail-img" />
							</div>
							<div className="text4">support@biboo.vn</div>
						</div>
						<div>
							<img className="bocongthuong" src={bocongthuong} />
						</div>
					</div>
					<div className="police">
						<div className="police-text1">Chính sách đổi trả</div>
						<div className="policetong">
							<div className="police-text2">
								Chính sách đổi trả
							</div>
							<div className="police-text3">
								Chính sách bảo hành
							</div>
							<div className="police-text4">
								Chính sách thanh toán
							</div>
							<div className="police-text5">
								Chính sách giao nhận
							</div>
						</div>
					</div>
					<div className="social">
						<div className="social-text">Tải ứng dụng</div>
						<div className="socialimg">
							<img className="apple" src={apple} />
						</div>
					    <div className='badge'>
							<img className='badegeimg' src={Badge}/>
						</div>
					</div>
					<div className='link'>
						<div className='link-text'>Kết nối với Biboo</div>
						<div className='link-icon'>
							<div className='icon1'>
								<img className='face' src={Icon.face}/>
							</div>
							<div className='icon1'>
								<img className='' src={Icon.intagam}/>
							</div>
							<div className='icon1'>
								<img className='face' src={Icon.sky}/>
							</div>
							<div className='icon1'>
								<img className='face' src={Icon.youtobe}/>
							</div>
						</div>
						<div className='link-text1'>Liên kết nhanh</div>
						<div className='link-text3'>Bibbo Blog</div>
						<div className='link-text4'>Tủ sách cá nhân</div>
						<div className='link-text5'>Cam kết sách nói bản quyền | Coppyright 2022 By Bibbo</div>
					</div>
				</div>
			</div>

		</div>
	);
}
export default Parem;
