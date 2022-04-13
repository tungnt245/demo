import React from 'react';
import './acount.scss';
import Icon from '../heplper/icon';
import iconImg from '../image/Circle-Button.png';
import lono from '../image/Logobit.png';
import { Link } from 'react-router-dom';

function Acount() {
	return (
		<div className="Acount">
			<div className="login-container1">
				<div className="login-logo1">
					<img className="logo-img1" src={lono} />
				</div>
				<div className="login-content1">
					<div className="back1">
						<Link to="/" className="back-text1">
							<div className="icons">
								<img className="iconn" src={Icon.Iconback1} />
							</div>
							<span>Quay lại</span>
						</Link>
					</div>
					<div className="form-login1">
						<form>
							<div className="titlee1">Tạo tài khoản</div>
							<div className="login-input1">
								<input
									name="usename"
									type="text"
									className="login-input-email1 "
									placeholder="Email của bạn"
								/>
							</div>
							<div className="login-input2">
								<input
									name="usename"
									type="text"
									className="login-input-email2 "
									placeholder="Họ và tên"
								/>
							</div>
							<div className="register-input">
								<input
									name="password"
									type="password"
									className="register-input-password "
									placeholder="Mật khẩu"
								/>

									<img src={iconImg} className="buton" />

							</div>
							<div className="register-input">
								<input
									name="password"
									type="password"
									className="register-input-password "
									placeholder="Nhập lại mật khẩu"
								/>

									<img src={iconImg} className="buton" />

							</div>
							<button type='submit' className='register-button9' >Tạo tài khoản</button>
							<div className='login-btn9'>
								<div className='question-text9'>Đã có tài khoản</div>
								<div className='login-link9'>
									<Link to = "/" className="login-url9" href='./'>Đăng nhập</Link>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Acount;
