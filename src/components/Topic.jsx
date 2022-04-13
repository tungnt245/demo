import React from 'react';
import './topic.scss';
import loggo from '../image/loggo.png';
import search from '../image/Search.png';
import Icon from '../heplper/icon';

function Topic() {
	return (
		<div className="Topic">
			<div className="login-container">
				<div className="choose-Topic__Logo">
					<div className="choose-topic__Content">Chọn chủ đề</div>
					<div className="choose-topic__Decription">
						Hãy lựa chọn ít nhất 03 chủ đề mà bạn quan tâm
					</div>
					<img className="choose-Topic-img" src={loggo} />
				</div>
				<div className="login-content">
					<div className="search-input">
						<div className="search-icon">
							<img src={search} className="color-icon" />
						</div>
						<input
							className="inpu"
							type="text"
							placeholder="Tìm kiếm chủ đề"
						/>
					</div>
					<div className="flex">
						<div className="choose-Topic__list1">
							<button className="choose-Topic__item">
								<div className="choose-Topic__item-img">

									<img src={Icon.tusach} className="icong" />
								</div>
								<span className='pam9'>Tủ sách Nguyễn Hiến Lê </span>
							</button>
						</div>
						<div className="choose-Topic__list">
							<button className="choose-Topic__item2">
								<div className="choose-Topic__item-img">
									<img src={Icon.group3}  className="icong" />
								</div>
								<span className='pam'>Sức khỏe </span>
							</button>
						</div>
						<div className="choose-Topic__list">
							<button className="choose-Topic__item">
								<div className="choose-Topic__item-img">
									<img src={Icon.tien}  className="icong" />
								</div>
								<span className='pam'>Tài chính </span>
							</button>
						</div>
					</div>
					<div className='flex2'>
					<div className="choose-Topic__list">
							<button className="choose-Topic__item">
								<div className="choose-Topic__item-img">
									<img src={Icon.group4}  className="icong" />
								</div>
								<span className='spam'>Tình yêu-hạnh phúc </span>
							</button>
						</div>
						<div className="choose-Topic__list">
							<button className="choose-Topic__item">
								<div className="choose-Topic__item-img">
									<img src={Icon.doanhnghiep}  className="icong" />
								</div>
								<span className='spam'>Doanh nghiệp </span>
							</button>
						</div>
						<div className="choose-Topic__list">
							<button className="choose-Topic__item">
								<div className="choose-Topic__item-img">
									<img src={Icon.group}  className="icong1" />
								</div>
								<span className='spam'>Doanh nhân </span>
							</button>
						</div>
					</div>
					<div className="choose-Topic__list">
							<button className="tem">
								<div className="choose-Topic__item-img">
									<img src={Icon.group2}  className="icong12" />
								</div>
								<span className='spam1'>Sách kỹ năng </span>
							</button>
						</div>
						<div className=' choose-Topic-disable'>Tiếp tục</div>
				</div>

			</div>
		</div>
	);
}
export default Topic;
