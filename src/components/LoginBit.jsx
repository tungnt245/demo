import React from 'react';
import './loginbit.scss';
import Icon from '../heplper/icon';
import iconImg from '../image/Circle-Button.png';
import lono from "../image/Logobit.png";
import { Link } from 'react-router-dom';

function LoginBit() {
	return (
		<div className="LoginBit">
			<div className="login-container">
				<div className="login-logo">
					<img className='logo-img' src={lono}/>
				</div>
				<div className="login-content">
					<div className="back">
						<Link to="/" className="back-text">
							<div className="icon1">
								<img className="icon" src={Icon.Iconback1} />
							</div>
							<span>Quay lại</span>
						</Link>
					</div>
					<div className="form-login">
						<form>
							<div className="titlee">
								Đăng nhập <br /> tài khoản Bizbooks
							</div>
							<div className="login-input">
								<input
									name="usename"
									type="text"
									className="login-input-email "
									placeholder="Email đăng nhập"
								/>
							</div>
							<div className="login-input">
								<input
									type="text"
									name="password"
									className="login-input-password"
									placeholder="Mật khẩu"
								/>
								{/* <button type="button" className="password-btn"> */}
									<img className="ig" src={iconImg} />
								{/* </button> */}
							</div>
							<div className='forgot-password'>
								<Link to="/forgot" className='forgot-password-link'>Quên mật khẩu?</Link>
							</div>
							<button type='submit' className='login-button'>Đăng nhập</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default LoginBit;
