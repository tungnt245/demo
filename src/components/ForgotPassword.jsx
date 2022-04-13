import React from 'react';
import './forgot.scss';
import Icon from '../heplper/icon';
import iconImg from '../image/Circle-Button.png';
import lono from '../image/Logobit.png';
import { Link } from 'react-router-dom';

function ForgotPassword () {
	return(
		<div className="Acount">
			<div className="forgot-login-container1">
				<div className="forgot-login-logo1">
					<img className="forgot-logo-img1" src={lono} />
				</div>
				<div className="forgot-login-content1">
					<div className="forgot-back1">
						<Link to="/login" className="forgot-back-text1">
							<div className="forgot-icons">
								<img className="forgot-iconn" src={Icon.Iconback1} />
							</div>
							<span>Quay lại</span>
						</Link>
					</div>
					<div className="forgot-form-login1">
						<form>
							<div className="forgot-titlee1">Quên mật khẩu</div>
							<div className='note'>
								Nhập vào Email bạn đã đăng ký tài khoản <br/>
								BIBOO để lấy lại mật khẩu.
							</div>
							<div className="forgot-login-input1">
								<input
									name="usename"
									type="text"
									className="forgot-login-input-email1 "
									placeholder="Email đã đăng ký"
								/>
							</div>


							<button type='submit' className='forgot-register-button9' >Tiếp tục</button>

						</form>
					</div>
				</div>
			</div>
		</div>
	);
}
export default ForgotPassword;