import React from 'react';
import './forget.scss';
import Icon from '../heplper/icon';
import iconImg from '../image/Circle-Button.png';
import lono from '../image/Logobit.png';
import { Link } from 'react-router-dom';

function ForgetPassword() {
	return (
		<div className="Forgetpassword">
			<div className="forget-login-container1">
				<div className="forget-login-logo1">
					<img className="forget-logo-img1" src={lono} />
				</div>
				<div className="forget-login-content1">
					<div className="forget-back1">
						<Link to="/forgot" className="forget-back-text1">
							<div className="forget-icons">
								<img className="forget-iconn" src={Icon.Iconback1} />
							</div>
							<span>Quay lại</span>
						</Link>
					</div>
					<div className="forget-form-login1">
						<form>
							<div className="forget-titlee1">Nhập mã xác nhận</div>
							<div className='forget-note'>
								Nhập mã xác nhận 06 chữ số vừa được gửi về Email
								đã đăng ký của bạn. Sau đó hãy tạo mật khẩu mới
							</div>
							<div className="forget-login-input1">
								<input
									name="usename"
									type="text"
									className="forget-login-input-email1 "
									placeholder=""
								/>
							</div>
							<div className="forget-login-input2">
								<input
									name="usename"
									type="text"
									className="forget-login-input-email2 "
									placeholder="Mã xác nhận"
								/>
							</div>
							<div className="forget-register-input">
								<input
									name="password"
									type="password"
									className="forget-register-input-password "
									placeholder="Mật khẩu mới"
								/>

									<img src={iconImg} className="forget-buton" />

							</div>
							<div className="register-input">
								<input
									name="password"
									type="password"
									className="forget-register-input-password "
									placeholder="Nhập lại mật khẩu mới"
								/>

									<img src={iconImg} className="forget-buton" />

							</div>
							<button type='submit' className='forget-register-button9' >Tiếp tục</button>

						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ForgetPassword;
