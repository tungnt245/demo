import React from 'react';
import './loginpage.scss';
import Icon from '../heplper/icon';
import gmail from "../image/gmail.png";
import { Link } from 'react-router-dom';

function LoginPage() {
	return (
		<div className="Header">
			<div className="auth-container">
				<div className="background"></div>
				<div className="auth-title">
					<div className="text">
						Hàng ngàn cuốn sách
						<br />
						trong tầm tay
					</div>
				</div>
				<div className="auth-content">
					<div className="form-login">
						<div className="title-login">
							Đăng nhập
							<br />
							và khám phá
						</div>
						<div className="login-btn">
							<button className="login-with-facebook">
								<div className="icon-fb">
									<img
										className="facebook-icon"
										src={Icon.facebookicon}
									/>
								</div>

								<span className="facebook-url">
									Đăng nhập bằng FaceBook
								</span>
							</button>
						</div>
						<div className="login-btn">
							<button className="login-with-facebook1">
								<div className="icon-fb1">
									<img src={gmail} className= "facebook-icon1"/>
								</div>

								<span className="facebook-url1">
									Đăng nhập bằng Gmail
								</span>
							</button>
						</div>
						<div className="login-btn">
							<Link className='links' to="/login">
								<button className="login-with-facebook3">


								<span className="facebook-url3">
									Đăng nhập tài khoản BIBOO
								</span>
							</button>
							</Link>

						</div>
						<div className='register-btn'>
							<div className='question-text'>Chưa có tài khoản?</div>
							<div className='register-link'>
							   <Link to="/acount" className='register-url' href='./register'>Đăng ký</Link>
							   tài khoản BIBOO
							</div>
						</div>
						<div className='cancel'>
							<Link to="/topic" className='cancel-text'>
								<span className='pan'>Bỏ qua</span>
								<div className='icon-back'><img className='canx' src= {Icon.IconBack}/></div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default LoginPage;
